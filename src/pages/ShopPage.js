// src/pages/ShopPage.js
import React, { useState } from "react";
import Catalog from "./Catalog";
import ProductList from "../components/ProductList";
import "./ShopPage.css"; 
const mockProducts = [
  {
    id: 1,
    name: "Samsung 970 EVO Plus 1 TB",
    type: "SSD",
    ssdType: "M.2",
    capacity: "1 ТБ",
    price: 3200,
    imageUrl:
      "https://images.samsung.com/is/image/samsung/ua-970-evoplus-nvme-m2-ssd-mz-v7s500bw-frontblack-140027615?$684_547_PNG$",
  },
  {
    id: 2,
    name: "WD Blue HDD 2 TB",
    type: "HDD",
    capacity: "2 ТБ",
    price: 2200,
    imageUrl: "https://serverparts.com.ua/image/cache/catalog/content/HDD/wdblue2tb-700x700.jpg",
  },
  {
    id: 3,
    name: "Kingston A400 480 GB",
    type: "SSD",
    ssdType: "SATA",
    capacity: "480 ГБ",
    price: 1500,
    imageUrl:
      "https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-240gb-1-zm-lg.jpg",
  },
];

const ShopPage = () => {
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);

    let result = mockProducts.filter((product) => {
      const inPriceRange =
        product.price >= newFilters.price[0] && product.price <= newFilters.price[1];
      const matchesType = !newFilters.type || product.type === newFilters.type;
      const matchesSSDType =
        product.type === "SSD" ? !newFilters.ssdType || product.ssdType === newFilters.ssdType : true;
      const matchesCapacity = !newFilters.capacity || product.capacity === newFilters.capacity;

      return inPriceRange && matchesType && matchesSSDType && matchesCapacity;
    });

    if (newFilters.sort === "price-asc") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (newFilters.sort === "price-desc") {
      result = result.sort((a, b) => b.price - a.price);
    } else if (newFilters.sort === "alpha") {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(result);
  };

  return (
    <div className="shop-page">
      <main className="shop-page__products">
        <ProductList products={filteredProducts} />
      </main>
      <aside className="shop-page__filter">
        <Catalog onSearch={handleSearch} filters={filters} />
      </aside>
    </div>
  );
};

export default ShopPage;
