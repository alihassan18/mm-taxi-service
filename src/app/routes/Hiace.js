import React from "react";

const hiaceRoutes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "400/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "400/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "650/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "650/SR" },
  { route: "Madina Airport to Madina Hotel", price: "350/SR" },
  { route: "Madina Hotel to Madina Airport", price: "300/SR" },
  { route: "Makkah Ziyarat", price: "400/SR" },
  { route: "Madina Ziyarat", price: "350/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "750/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "650/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "1300/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "700/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "300/SR" },
  { route: "Hotel to Train Station", price: "200/SR" },
  { route: "Train Station to Hotel", price: "200/SR" },
  { route: "Per Hour Rate", price: "280/SR" },
];

const Hiace = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="nowrap">
            <th className="table-header">
              <div>Route</div>
            </th>
            <th>
              <div className="table-cell-end">HIACE</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {hiaceRoutes.map((route, index) => (
            <tr key={index}>
              <td className="nowrap">{route.route}</td>
              <td>
                <div className="table-cell-end">{route.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hiace;
