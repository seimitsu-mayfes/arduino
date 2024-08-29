"use client";

import { useState } from 'react';

export default function UpperBar({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [activeTab, setActiveTab] = useState('knowledge');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <nav className="flex justify-center bg-gray-800 text-white py-4">
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

