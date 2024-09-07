import React from "react";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";

const hyundaiRoutes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "350/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "300/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "550/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "550/SR" },
  { route: "Madina Airport to Madina Hotel", price: "200/SR" },
  { route: "Madina Hotel to Madina Airport", price: "150/SR" },
  { route: "Makkah Ziyarat", price: "300/SR" },
  { route: "Madina Ziyarat", price: "250/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "600/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "550/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "700/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "600/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "250/SR" },
  { route: "Hotel to Train Station", price: "150/SR" },
  { route: "Train Station to Hotel", price: "150/SR" },
  { route: "Per Hour Rate", price: "120/SR" },
];

const Hyundai = () => {
  return (
    <div>
      <DynamicScriptsLoader />
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
          {hyundaiRoutes.map((route, index) => (
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

export default Hyundai;
