# Portfolio Visitor Counter Feature

## Overview

This feature tracks how many users have viewed your portfolio and displays the count in the contact section.

## Features

- Tracks unique visitors using browser fingerprinting
- Displays total view count
- Stores visitor data in Supabase
- Automatic tracking on page load
- Newspaper-themed display matching your portfolio style

---

## Step 1: Create Supabase Table

Go to your Supabase dashboard and run this SQL query:

```sql
-- Create visitors table
CREATE TABLE IF NOT EXISTS portfolio_visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id TEXT NOT NULL,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_visitor_id ON portfolio_visitors(visitor_id);
CREATE INDEX IF NOT EXISTS idx_visited_at ON portfolio_visitors(visited_at);

-- Enable Row Level Security
ALTER TABLE portfolio_visitors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public insert" ON portfolio_visitors
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create policy to allow anyone to read count
CREATE POLICY "Allow public read" ON portfolio_visitors
  FOR SELECT TO anon
  USING (true);
```

---

## Step 2: Create Visitor Tracking Hook

Create a new file: `src/hooks/useVisitorTracking.js`

```javascript
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
```

---

## Step 3: Create Visitor Counter Component

Create a new file: `src/components/VisitorCounter.jsx`

```javascript
import { motion } from 'framer-motion';
import { useVisitorTracking } from '../hooks/useVisitorTracking';
import './VisitorCounter.css';

function VisitorCounter() {
  const { visitorCount, loading } = useVisitorTracking();

  if (loading) {
    return (
      <div className="visitor-counter loading">
        <span className="counter-label">TRACKING READERSHIP...</span>
      </div>
    );
  }

  return (
    <motion.div
      className="visitor-counter"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="counter-box">
        <span className="counter-label">TOTAL READERSHIP</span>
        <motion.div
          className="counter-value"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {visitorCount?.toLocaleString() || '0'}
        </motion.div>
        <span className="counter-subtitle">Unique Visitors</span>
      </div>
    </motion.div>
  );
}

export default VisitorCounter;
```

---

## Step 4: Create Visitor Counter Styles

Create a new file: `src/components/VisitorCounter.css`

```css
.visitor-counter {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: var(--card-bg, #f9f7f4);
  border: 2px solid var(--border-color, #2c2c2c);
  border-radius: 4px;
  text-align: center;
}

.visitor-counter.loading {
  padding: 1rem;
  opacity: 0.7;
}

.counter-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.counter-label {
  font-family: 'Playfair Display', serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--text-secondary, #666);
  text-transform: uppercase;
}

.counter-value {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  color: var(--text-primary, #2c2c2c);
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.05);
}

.counter-subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 0.875rem;
  font-style: italic;
  color: var(--text-secondary, #666);
}

/* Dark mode support */
[data-theme='dark'] .visitor-counter {
  background: var(--card-bg, #1a1a1a);
  border-color: var(--border-color, #444);
}

[data-theme='dark'] .counter-value {
  color: var(--text-primary, #e8e6e3);
  text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.05);
}

/* Responsive */
@media (max-width: 768px) {
  .visitor-counter {
    padding: 1rem;
  }

  .counter-value {
    font-size: 2.5rem;
  }
}
```

---

## Step 5: Update Contact Component

Update your `src/components/Contact.jsx` to include the visitor counter:

Add this import at the top:

```javascript
import VisitorCounter from './VisitorCounter';
```

Add the counter inside the `contact-info` div, after the `availability-notice`:

```javascript
<VisitorCounter />
```

The placement should look like this:

```javascript
<motion.div className="contact-info" ...>
  <div className="info-box classified-style">
    {/* existing contact info */}
  </div>

  <div className="availability-notice">
    {/* existing availability notice */}
  </div>

  {/* ADD THIS LINE */}
  <VisitorCounter />
</motion.div>
```

---

## Step 6: Create the Hook Directory

Make sure the hooks directory exists:

```bash
mkdir src\hooks
```

---

## Testing

1. Run your development server:

   ```bash
   npm run dev
   ```

2. Open your portfolio in the browser

3. Check the contact section - you should see the visitor counter

4. Open in incognito/private mode to test unique visitor tracking

5. Check your Supabase dashboard to see visitor records

---

## How It Works

1. **Visitor ID Generation**: Creates a unique fingerprint based on browser characteristics
2. **Local Storage**: Stores visitor ID to recognize returning visitors
3. **Daily Tracking**: Only counts one visit per visitor per day
4. **Unique Count**: Displays total unique visitors, not total visits
5. **Privacy-Friendly**: No personal data collected, just anonymous fingerprints

---

## Optional: View Detailed Analytics

You can query your Supabase database to see:

```sql
-- Total unique visitors
SELECT COUNT(DISTINCT visitor_id) as unique_visitors 
FROM portfolio_visitors;

-- Visitors by day
SELECT DATE(visited_at) as date, COUNT(DISTINCT visitor_id) as visitors
FROM portfolio_visitors
GROUP BY DATE(visited_at)
ORDER BY date DESC;

-- Recent visitors
SELECT visited_at, referrer
FROM portfolio_visitors
ORDER BY visited_at DESC
LIMIT 10;
```

---

## Troubleshooting

**Counter shows 0:**

- Check Supabase connection in browser console
- Verify table was created correctly
- Check RLS policies are enabled

**Counter not updating:**

- Clear localStorage and refresh
- Check browser console for errors
- Verify Supabase credentials in .env file

**Styling issues:**

- Make sure VisitorCounter.css is imported
- Check CSS variables match your theme

---

## Future Enhancements

- Add page view tracking (not just unique visitors)
- Show visitors in last 24 hours
- Add country/region tracking (requires IP geolocation service)
- Create admin dashboard to view analytics
- Add real-time visitor count using Supabase Realtime

---

Enjoy tracking your portfolio's reach! 📊
