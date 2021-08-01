import logo from "./logo.svg";
import React, { useState } from "react";
import Menu from "./Menu.js";
import Categories from "./Categories.js";
import items from "./data.js";
import "./App.css";

// creating category array
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      return setMenuItems(items);
    }
    // filter based on category
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='main section'>
        <div className='title'>
          <img src={logo} alt='logo' className='logo' />
          <h2>Menu List</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
