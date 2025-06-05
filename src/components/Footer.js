// components/Footer.js
import "../components/Contact.css";

function Footer() {
  return (
    <footer className="contacts-section">
      <h2>Контакти</h2>
      <p>Телефон: +380 67 123 4567</p>
      <p>Email: info@diskstore.ua</p>
      <p>&copy; {new Date().getFullYear()} HDD & SSD Shop. Всі права захищено.</p>
    </footer>
  );
}

export default Footer;
