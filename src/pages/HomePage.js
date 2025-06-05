//src/pages/HomePage.js
import React from "react";
import "../components/Contact.css";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="space-y-16 p-8 max-w-5xl mx-auto">
      <section id="intro" className="intro-section">
        <div className="intro-overlay">
          <h1 className="intro-title">
            Ласкаво просимо до нашого магазину жорстких дисків!
          </h1>
          <p className="intro-subtitle">
            Ми спеціалізуємось на HDD та SSD накопичувачах різних форматів для вашого компʼютера
          </p>
          <a href="/shop" className="intro-button">
            Купити
          </a>
        </div>
      </section>

      <section id="what-are-disks" className="disk-info-background">
        <div className="disk-info-overlay">
          <h2 className="disk-info-title">Що таке жорсткі диски?</h2>
          <p className="disk-info-subtitle">
            Жорсткі диски — це пристрої зберігання даних, які використовуються у компʼютерах для зберігання операційної системи,
            програм та файлів.
          </p>
        </div>
      </section>

      <section id="advantages" className="advantages-background">
        <div className="advantages-overlay">
          <h2 className="advantages-title">Переваги SSD та HDD</h2>
          <ul className="advantages-list">
            <li><strong>SSD</strong>: Швидші, безшумні, енергоефективні.</li>
            <li><strong>HDD</strong>: Дешевші, більший обсяг за нижчу ціну.</li>
          </ul>
        </div>
      </section>

      <section id="types" className="types-background">
        <div className="types-overlay">
          <h2 className="types-title">Види накопичувачів</h2>
          <p className="types-subtitle">
            SSD бувають формату SATA або M.2. HDD — традиційні магнітні накопичувачі з обертальними дисками.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
