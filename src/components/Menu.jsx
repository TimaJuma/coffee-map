import React from "react";

const Menu = ({ shop }) => {
  return (
    <>
      <h3>Menu of {shop.name}</h3>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {shop.menu.map((item) => (
            <tr>
              <td>{item.type}</td>
              <td>{item.price.toFixed(2)} CAD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Menu;
