import React from "react";
import StatCard from "../components/StatCard";
import {
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineDatabase
} from "react-icons/ai";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="stats">
      <StatCard title="Formulaires" value="125" color="#9c27b0" icon={<AiOutlineFile size={30} />} />
      <StatCard title="Messages" value="40" color="#4caf50" icon={<AiOutlineMessage size={30} />} />
      <StatCard title="Emails" value="25" color="#f44336" icon={<AiOutlineMail size={30} />} />
      <StatCard title="Hôtels" value="40" color="#9c27b0" icon={<AiOutlineHome size={30} />} />
      <StatCard title="Utilisateurs" value="600" color="#ff9800" icon={<AiOutlineUser size={30} />} />
      <StatCard title="Entités" value="02" color="#2196f3" icon={<AiOutlineDatabase size={30} />} />
    </div>
  );
}

export default Dashboard;
