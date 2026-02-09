import { useState } from "react";
import HotelCard from "../components/HotelCard";

import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";


const hotelsData = [
  { name: "Hôtel Terrou-Bi", address: "Dakar", price: 25000, images: hotel1 },
  { name: "Hôtel Pullman", address: "Plateau", price: 20000, images: hotel2 },
  { name: "Hôtel King Fahd", address: "Almadies", price: 30000, images: hotel3 },
  { name: "Hôtel Radisson", address: "Dakar", price: 22000, images: hotel4 },
 
];

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      name: e.target.name.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      price: Number(e.target.price.value),
      currency: e.target.currency.value,
      images: e.target.image.files[0]
        ? URL.createObjectURL(e.target.image.files[0])
        : hotel1,
    };

    setHotels([newHotel, ...hotels]);
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Liste des Hôtels</h1>

      <div className="btn-container">
        <button className="add-btn" onClick={() => setShowForm(true)}>
          Ajouter un hôtel
        </button>
      </div>

      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            address={hotel.address}
            price={hotel.price}
            images={hotel.images}
          />
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <form
            className="modal-form"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <h2>Ajouter un hôtel</h2>

            <input type="text" name="name" placeholder="Nom de l'hôtel" required />
            <input type="text" name="address" placeholder="Adresse" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Téléphone" required />
            <input type="number" name="price" placeholder="Prix par nuit" required />
            <input type="text" name="currency" placeholder="Devise" required />

            {/* AJOUT IMAGE SIMPLE */}
            <label className="image-upload">
              <input type="file" name="image" accept="image/*" hidden />
              <div className="image-box">
                📷 Ajouter une photo
              </div>
            </label>

            <button type="submit" className="submit-btn">
              Sauvegarder
            </button>
          </form>
        </div>
      )}

      <style>
        {`
        .page-container {
          padding: 20px;
          min-height: 100vh;
          background: #f5f5f5;
        }

        .page-title {
          font-size: 24px;
          font-weight: bold;
        }

        .btn-container {
          display: flex;
          justify-content: flex-end;
          margin: 20px 0;
        }

        .add-btn {
          padding: 10px 20px;
          border: none;
          background: #2e7050;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .hotel-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-form {
          width: 420px;
          max-height: 85vh;
          overflow-y: auto;
          background: white;
          padding: 20px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        .modal-form input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .image-upload {
          cursor: pointer;
        }

        .image-box {
          height: 120px;
          border: 2px dashed #aaa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #555;
        }

        .submit-btn {
          padding: 10px;
          border: none;
          border-radius: 6px;
          background: #2e7050;
          color: white;
          cursor: pointer;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
        `}
      </style>
    </div>
  );
}

export default Hotels;
