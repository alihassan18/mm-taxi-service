'use client'
import React from 'react'
import { useState } from "react";
import CamrySonata from "./CamrySonata";
import Hyundai from "./Hyundai";

import Gmc22Modal from "./Gmc22Modal";
import Hiace from "./Hiace";
import Coaster from "./Coaster";
import Bus from "./Bus";
import Gmc from "./Gmc";

const Tabs = () => {
  const tabsData = [
    {
      id: "CAMRY SONATA",
      label: "CAMRY SONATA",
      content: <CamrySonata />,
    },
    {
      id: "H1 HYUNDAI",
      label: "H1 HYUNDAI",
      content: <Hyundai />,
    },
    {
      id: "GMC 2016 to 2020 model",
      label: " GMC 2016 to 2020 mode",
      content: <Gmc />,
    },
    {
      id: "GMC 2022 model",
      label: "GMC 2022 model",
      content: <Gmc22Modal />,
    },
    { id: "HIACE", label: "HIACE", content: <Hiace /> },
    { id: "COASTER", label: "COASTER", content: <Coaster /> },
    { id: "BUS", label: "BUS", content: <Bus /> },
  ];
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="tabs-container">
      <div className="tabs-nav  AtScrollHide">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""
              }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content AtScrollHide nowrap ">
        {tabsData.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

export default Tabs