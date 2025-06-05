//src/pages/Catalog.js
import React, { useState } from "react";
import "./Catalog.css";

const Catalog = ({ onSearch }) => {
  const [price, setPrice] = useState([1000, 4000]);
  const [type, setType] = useState("");
  const [ssdType, setSsdType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ price, type, ssdType, capacity, sort });
  };

  return (
    <form onSubmit={handleSubmit} className="catalog-form">
      <div className="catalog-group">
        <label className="catalog-label">Тип диска</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="catalog-select"
        >
          <option value="">Будь-який</option>
          <option value="SSD">SSD</option>
          <option value="HDD">HDD</option>
        </select>
      </div>

      {type === "SSD" && (
        <div className="catalog-group">
          <label className="catalog-label">Тип SSD</label>
          <select
            value={ssdType}
            onChange={(e) => setSsdType(e.target.value)}
            className="catalog-select"
          >
            <option value="">Будь-який</option>
            <option value="M.2">M.2</option>
            <option value="SATA">SATA</option>
          </select>
        </div>
      )}

      <div className="catalog-group">
        <label className="catalog-label">Обʼєм памʼяті</label>
        <select
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="catalog-select"
        >
          <option value="">Будь-який</option>
          <option value="480 ГБ">480 ГБ</option>
          <option value="1 ТБ">1 ТБ</option>
          <option value="2 ТБ">2 ТБ</option>
        </select>
      </div>

      <div className="catalog-group">
        <label className="catalog-label">Ціна (від - до)</label>
        <div className="catalog-price-inputs">
          <input
            type="number"
            min={0}
            value={price[0]}
            onChange={(e) => setPrice([+e.target.value, price[1]])}
            placeholder="від"
            className="catalog-input"
          />
          <input
            type="number"
            min={0}
            value={price[1]}
            onChange={(e) => setPrice([price[0], +e.target.value])}
            placeholder="до"
            className="catalog-input"
          />
        </div>
      </div>

      <div className="catalog-group">
        <label className="catalog-label">Сортувати за</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="catalog-select"
        >
          <option value="">Без сортування</option>
          <option value="price-asc">Ціна: зростання</option>
          <option value="price-desc">Ціна: спадання</option>
          <option value="alpha">Назва (А → Я)</option>
        </select>
      </div>

      <button type="submit" className="catalog-button">
        Застосувати фільтри
      </button>
    </form>
  );
};

export default Catalog;
