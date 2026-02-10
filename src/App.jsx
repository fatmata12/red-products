import "./App.css";

function App() {
  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Principal</h2>
        <ul>
          <li>Dashboard</li>
          <li>Liste des hôtels</li>
        </ul>
      </aside>

      {/* CONTENU */}
      <main className="content">
        <div className="cards">

          <div className="card">
            <p>Formulaires</p>
            <strong>125</strong>
          </div>

          <div className="card">
            <p>Messages</p>
            <strong>40</strong>
          </div>

          <div className="card">
            <p>Emails</p>
            <strong>25</strong>
          </div>

          <div className="card">
            <p>Hôtels</p>
            <strong>40</strong>
          </div>

          <div className="card">
            <p>Utilisateurs</p>
            <strong>600</strong>
          </div>

          <div className="card">
            <p>Entités</p>
            <strong>02</strong>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
