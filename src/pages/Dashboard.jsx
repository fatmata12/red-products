import { useState } from "react";
import { FaBars, FaFileAlt, FaEnvelope, FaComments, FaHotel, FaUsers, FaBuilding } from "react-icons/fa";
import "./dashboard.css";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="logo">PRODUIT ROUGE</h2>
        <ul>
          <li>Tableau de bord</li>
          <li>Liste des hotels</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className={`main ${isOpen ? "shifted" : ""}`}>

        {/* HAMBURGER */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>

        <div className="cards">

          <div className="card purple">
            <FaFileAlt />
            <h3>FORMULAIRES</h3>
            <p>125</p>
          </div>

          <div className="card green">
            <FaComments />
            <h3>MESSAGES</h3>
            <p>40</p>
          </div>

          <div className="card red">
            <FaEnvelope />
            <h3>EMAILS</h3>
            <p>25</p>
          </div>

          <div className="card violet">
            <FaHotel />
            <h3>HÔTELS</h3>
            <p>40</p>
          </div>

          <div className="card orange">
            <FaUsers />
            <h3>UTILISATEURS</h3>
            <p>600</p>
          </div>

          <div className="card blue">
            <FaBuilding />
            <h3>ENTITÉS</h3>
            <p>02</p>
          </div>

        </div>
      </div>
    </div>
  );
}
