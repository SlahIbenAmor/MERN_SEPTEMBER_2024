import React, { useState } from "react";
import './Tabs.css'; 

const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (items[index].onClick) {
            items[index].onClick();
        }
    };

    return (
        <div className="tabs">
            <div className="tab-headers">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className={`tab-header ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <div className="content">
                    {items[activeIndex].content}
                </div>
            </div>
        </div>
    );
};

export default Tabs;