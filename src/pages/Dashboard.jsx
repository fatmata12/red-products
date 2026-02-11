import StatCard from "../components/StatCard";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./dashboard.css";
import {
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineDatabase
} from "react-icons/ai";
import "./Dashboard.css"; // fichier CSS pour le style

function Dashboard() {
  return (
    <div className="stats">
      <StatCard title="Formulaires" value="125" color="#9c27b0" icon={<AiOutlineFile />} />
      <StatCard title="Messages" value="40" color="#4caf50" icon={<AiOutlineMessage />} />
      <StatCard title="Emails" value="25" color="#f44336" icon={<AiOutlineMail />} />
      <StatCard title="Hôtels" value="40" color="#9c27b0" icon={<AiOutlineHome />} />
      <StatCard title="Utilisateurs" value="600" color="#ff9800" icon={<AiOutlineUser />} />
      <StatCard title="Entités" value="02" color="#2196f3" icon={<AiOutlineDatabase />} />
    </div>
  );
}

export default Dashboard;
