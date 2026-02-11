import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./dashboard.css";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="logo">PRODUIT ROUGE</h2>
        <ul>
          <li>Tableau de bord</li>
          <li>Liste des hôtels</li>
        </ul>
      </div>

      {/* Main */}
      <div className={`main ${isOpen ? "shifted" : ""}`}>
        
        {/* Hamburger */}
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <h1>Dashboard</h1>

      </div>
    </div>
  );
}
