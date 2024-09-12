"use client";

import React from 'react';
import { useTabContext } from '@/app/(do_them)/layout';
import styles from './upper_bar.module.css';

type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

export default function UpperBar({ taskName }: { taskName: string }) {
  const { activeTab, setActiveTab } = useTabContext();

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.button} ${activeTab === 'knowledge' ? styles.activeButton : ''}`}
        onClick={() => handleTabChange('knowledge')}
      >
        Knowledge
      </button>
      <button
        className={`${styles.button} ${activeTab === 'task' ? styles.activeButton : ''}`}
        onClick={() => handleTabChange('task')}
      >
        {taskName}
      </button>
      <button
        className={`${styles.button} ${activeTab === 'debug' ? styles.activeButton : ''}`}
        onClick={() => handleTabChange('debug')}
      >
        Debug
      </button>
      <button
        className={`${styles.button} ${activeTab === 'comment' ? styles.activeButton : ''}`}
        onClick={() => handleTabChange('comment')}
      >
        Comment
      </button>
    </nav>
  );
}