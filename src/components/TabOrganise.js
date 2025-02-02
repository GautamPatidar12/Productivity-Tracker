import React, { useEffect, useState } from 'react';
import './style.css';

function TabOrganizer() {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        chrome.tabs.query({}, function (tabs) {
            setTabs(tabs);
        });
    }, []);

    const closeTab = (tabId) => {
        chrome.tabs.remove(tabId, () => {
            setTabs(tabs.filter(tab => tab.id !== tabId));
        });
    };

    return (
        <div className="container">
            <h2>Tab Organizer</h2>
            <ul className="tab-list">
                {tabs.map((tab) => (
                    <li key={tab.id}>
                        {tab.title}
                        <button onClick={() => closeTab(tab.id)}>Close</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TabOrganizer;