import React, { useState } from 'react';
import TabContent from './TabContent';
import TabMenu from './TabMenu';

export default function Tab({ tabs }) {
  const firstTabId = tabs[0]['id'];
  const [activeTabId, setActiveTabId] = useState(firstTabId);


  const activeTabContent = () => {
    return tabs.find(tab => tab['id'] === activeTabId)['content'];
  }

  return (
    <div className='text-white'>
      <TabMenu tabs={tabs} activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
      <TabContent content={activeTabContent()} />
    </div>
  )
}