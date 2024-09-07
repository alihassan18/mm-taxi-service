import React from "react";
import DynamicScriptsLoader from "../../components/common/script/ScriptLoader";

const gmc22Routes = [
  { route: "Jeddah Airport to Makkah Hotel", price: "550/SR" },
  { route: "Makkah Hotel to Jeddah Airport", price: "500/SR" },
  { route: "Makkah Hotel to Madina Hotel", price: "1000/SR" },
  { route: "Madina Hotel to Makkah Hotel", price: "1000/SR" },
  { route: "Madina Airport to Madina Hotel", price: "400/SR" },
  { route: "Madina Hotel to Madina Airport", price: "300/SR" },
  { route: "Makkah Ziyarat", price: "500/SR" },
  { route: "Madina Ziyarat", price: "4000/SR" },
  { route: "Jeddah Airport to Madina Hotel", price: "1000/SR" },
  { route: "Madina Hotel to Jeddah Airport", price: "1000/SR" },
  { route: "Jeddah to Taif Zariat & Return", price: "1300/SR" },
  { route: "Makkah to Taif Zariat & Return", price: "900/SR" },
  { route: "Jeddah Airport to Jeddah Hotel", price: "400/SR" },
  { route: "Hotel to Train Station", price: "300/SR" },
  { route: "Train Station to Hotel", price: "300/SR" },
  { route: "Per Hour Rate", price: "180/SR" },
];

const Gmc22Modal = () => {
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
          {gmc22Routes.map((route, index) => (
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

export default Gmc22Modal;
