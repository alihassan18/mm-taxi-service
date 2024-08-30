import React from "react";

const routes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "250/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "200/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "450/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "450/SR" },
  { route: "Madina Airport to Madina Hotel", price: "150/SR" },
  { route: "Madina Hotel to Madina Airport", price: "120/SR" },
  { route: "Makkah Ziyarat", price: "200/SR" },
  { route: "Madina Ziyarat", price: "200/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "500/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "450/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "600/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "450/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "200/SR" },
  { route: "Hotel to Train Station", price: "100/SR" },
  { route: "Train Station to Hotel", price: "100/SR" },
  { route: "Per Hour Rate", price: "100/SR" },
];

const CamrySonata = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="nowrap">
            <th className="table-header">
              <div>Route</div>
            </th>
            <th>
              <div className="table-cell-end">CAMRY SONATA</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {routes.map((item, index) => (
            <tr key={index}>
              <td className="nowrap">{item.route}</td>
              <td className="table-cell-end ">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CamrySonata;
