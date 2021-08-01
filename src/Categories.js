import React from "react";

const Categories = ({ categories, activeCategory, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => filterItems(category)}
            key={index}
            type='button'
            className={`${activeCategory === category ? "filter-btn active" : "filter-btn"}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
