import React from "react";

const busRoutes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "800/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "800/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "1400/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "1400/SR" },
  { route: "Madina Airport to Madina Hotel", price: "700/SR" },
  { route: "Madina Hotel to Madina Airport", price: "700/SR" },
  { route: "Makkah Ziyarat", price: "800/SR" },
  { route: "Madina Ziyarat", price: "700/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "1400/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "1400/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "1800/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "1400/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "600/SR" },
  { route: "Hotal to Train Station", price: "500/SR" },
  { route: "Train Station to Hotal", price: "500/SR" },
  { route: "Per Hour Rate", price: "250/SR" },
];

const Bus = () => {
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
          {busRoutes.map((route, index) => (
            <tr key={index}>
              <td>{route.route}</td>
              <td>
                <div className="table-cell-end nowrap">{route.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bus;
