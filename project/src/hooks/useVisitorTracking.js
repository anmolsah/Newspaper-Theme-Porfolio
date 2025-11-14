import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// Generate a simple visitor ID based on browser fingerprint
const generateVisitorId = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('visitor', 2, 2);

    const fingerprint = canvas.toDataURL();
    const screen = `${window.screen.width}x${window.screen.height}`;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;

    const data = `${fingerprint}-${screen}-${timezone}-${language}`;

    // Simple hash function
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
        const char = data.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return `visitor_${Math.abs(hash)}`;
};

export const useVisitorTracking = () => {
    const [visitorCount, setVisitorCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                // Get or create visitor ID
                let visitorId = localStorage.getItem('portfolio_visitor_id');

                if (!visitorId) {
                    visitorId = generateVisitorId();
                    localStorage.setItem('portfolio_visitor_id', visitorId);
                }

                // Check if visitor already exists today
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const { data: existingVisit } = await supabase
                    .from('portfolio_visitors')
                    .select('id')
                    .eq('visitor_id', visitorId)
                    .gte('visited_at', today.toISOString())
                    .single();

                // Only insert if no visit today
                if (!existingVisit) {
                    await supabase.from('portfolio_visitors').insert([
                        {
                            visitor_id: visitorId,
                            user_agent: navigator.userAgent,
                            referrer: document.referrer || 'direct',
                        },
                    ]);
                }

                // Get total unique visitors count
                const { data: visitors, error } = await supabase
                    .from('portfolio_visitors')
                    .select('visitor_id');

                if (error) throw error;

                // Count unique visitor IDs
                const uniqueVisitors = new Set(visitors.map(v => v.visitor_id)).size;
                setVisitorCount(uniqueVisitors);
            } catch (error) {
                console.error('Error tracking visitor:', error);
                setVisitorCount(0);
            } finally {
                setLoading(false);
            }
        };

        trackVisitor();
    }, []);

    return { visitorCount, loading };
};
