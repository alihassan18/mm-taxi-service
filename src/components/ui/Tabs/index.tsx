import React, { useState } from "react";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="tabs-container">
            <div className="tabs-nav">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${
                            activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {tabs.map((tab) =>
                    activeTab === tab.id ? (
                        <div key={tab.id} className="tab-panel">
                            {tab.content}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default Tabs;
