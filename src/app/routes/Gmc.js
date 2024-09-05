import React from "react";
const gmcRoutes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "400/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "400/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "800/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "800/SR" },
  { route: "Madina Airport to Madina Hotel", price: "300/SR" },
  { route: "Madina Hotel to Madina Airport", price: "250/SR" },
  { route: "Makkah Ziyarat", price: "350/SR" },
  { route: "Madina Ziyarat", price: "350/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "900/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "800/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "1200/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "700/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "300/SR" },
  { route: "Hotel to Train Station", price: "200/SR" },
  { route: "Train Station to Hotel", price: "200/SR" },
  { route: "Per Hour Rate", price: "150/SR" },
];

const Gmc = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="nowrap">
            <th className="table-header">
              <div>Route</div>
            </th>
            <th>
              <div className="table-cell-end">Rate</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {gmcRoutes.map((route, index) => (
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

export default Gmc;
