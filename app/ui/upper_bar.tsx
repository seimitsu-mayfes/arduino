"use client";

import React from 'react';
import { useTabContext } from '@/app/(do_them)/layout';

type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

export default function UpperBar({ taskName }: { taskName: string }) {
  const { activeTab, setActiveTab } = useTabContext();

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <nav className="fixed top-16 left-0 w-full bg-gray-800 text-white py-4 z-40 flex justify-center rounded-lg">
      <button
        className={`mx-4 px-4 py-2 rounded w-32 ${activeTab === 'knowledge' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('knowledge')}
      >
        Knowledge
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded w-32 ${activeTab === 'task' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('task')}
      >
        {taskName}
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded w-32 ${activeTab === 'debug' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('debug')}
      >
        Debug
      </button>
      <button
        className={`mx-4 px-4 py-2 rounded w-32 ${activeTab === 'comment' ? 'bg-blue-600' : ''}`}
        onClick={() => handleTabChange('comment')}
      >
        Comment
      </button>
    </nav>
  );
}