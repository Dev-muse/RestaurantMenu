import React from "react";

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item, index) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>£{price}</h4>
              </header>
              <p class='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
