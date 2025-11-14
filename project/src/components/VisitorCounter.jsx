import { useVisitorTracking } from "../hooks/useVisitorTracking";
import "./VisitorCounter.css";

function VisitorCounter() {
  const { visitorCount, loading } = useVisitorTracking();

  return (
    <div className="visitor-counter-inline">
      <span className="visitor-icon">👁</span>
      <span className="visitor-text">
        {loading ? "..." : visitorCount?.toLocaleString() || "0"} views
      </span>
    </div>
  );
}

export default VisitorCounter;
