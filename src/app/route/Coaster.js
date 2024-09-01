import React from "react";
const coasterRoutes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "800/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "700/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "1100/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "1100/SR" },
  { route: "Madina Airport to Madina Hotel", price: "500/SR" },
  { route: "Madina Hotel to Madina Airport", price: "500/SR" },
  { route: "Makkah Ziyarat", price: "600/SR" },
  { route: "Madina Ziyarat", price: "550/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "1100/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "1100/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "1500/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "1000/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "500/SR" },
  { route: "Hotel to Train Station", price: "400/SR" },
  { route: "Train Station to Hotel", price: "400/SR" },
  { route: "Per Hour Rate", price: "250/SR" },
];

const Coaster = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="nowrap">
            <th className="table-header">
              <div>Route</div>
            </th>
            <th>
              <div className="table-cell-end">COASTER</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {coasterRoutes.map((route, index) => (
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

export default Coaster;
