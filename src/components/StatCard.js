import React from "react";

function StatCard({ title, value, color, icon }) {
  return (
    <div className="stat-card" style={{ borderLeft: `5px solid ${color}` }}>
      <div className="icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="details">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatCard;
