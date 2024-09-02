"use client";

import React, { useState, createContext, useContext } from 'react';
import UpperBar from '@/app/ui/upper_bar';
import { useSelectedLayoutSegment } from 'next/navigation';

type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

const TabContext = createContext<{ activeTab: TabName; setActiveTab: (tab: TabName) => void } | undefined>(undefined);

export default function DoThemLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TabName>('task');
  const segment = useSelectedLayoutSegment();
  const taskName = segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : 'Task';

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="flex flex-col min-h-screen">
        <UpperBar taskName={taskName} />
        <main className="flex-grow relative overflow-hidden mt-16">
          <div className="absolute inset-0 p-6">
            {children}
          </div>
        </main>
      </div>
    </TabContext.Provider>
  );
}

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
}