"use client";

import { useState } from 'react';

type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

export default function UpperBar({ onTabChange }: { onTabChange: (tab: TabName) => void }) {
  const [activeTab, setActiveTab] = useState<TabName>('knowledge');

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
    onTabChange(tab);
  };
  
  return (
    <nav className="sticky top-24 left-0 w-full bg-gray-800 text-white py-4 z-50 flex justify-center">
      <button
        className={`mx-4 px-4 py-2 rounded ${activeTab === 'knowledge' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('knowledge')}
      >
        Knowledge
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded ${activeTab === 'task' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('task')}
      >
        Task
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded ${activeTab === 'debug' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('debug')}
      >
        Debug
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded ${activeTab === 'comment' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('comment')}
      >
        Comment
      </button>
    </nav>
  );
}



