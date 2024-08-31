"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import UpperBar from '@/app/ui/upper_bar';
import PriorKnowledge from '@/app/ui/prior_knowledge/knowledge';
import LEDContent from '@/app/ui/(do_them)/LED';
import Debug from '@/app/ui/debug/debug';
import Comments from '@/app/ui/comments/comments';

type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

const TabContent = React.memo(({ tab, isActive }: { tab: TabName; isActive: boolean }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(`${tab} content ${isActive ? 'activated' : 'deactivated'}`);
    }, [isActive, tab]);

    const content = (() => {
        switch (tab) {
            case 'task':
                return <LEDContent />;
            case 'debug':
                return <Debug />;
            case 'comment':
                return <Comments />;
            case 'knowledge':
            default:
                return <PriorKnowledge />;
        }
    })();

    return (
        <div
            ref={contentRef}
            className={`w-full h-full overflow-y-auto absolute inset-0 transition-opacity duration-300 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
            {content}
            <div style={{ height: '2000px', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
                Long content for testing scroll - {tab}
            </div>
        </div>
    );
});

export default function LEDPage() {
    const [activeTab, setActiveTab] = useState<TabName>('knowledge');

    const handleTabChange = (tab: TabName) => {
        console.log(`Changing tab from ${activeTab} to ${tab}`);
        setActiveTab(tab);
    };

    useEffect(() => {
        console.log(`Active tab changed to: ${activeTab}`);
    }, [activeTab]);

    return (
        <div className="flex flex-col min-h-screen">
            <UpperBar onTabChange={handleTabChange} />
            <main className="flex grow p-6 overflow-hidden relative">
                {(['knowledge', 'task', 'debug', 'comment'] as TabName[]).map((tab) => (
                    <TabContent key={tab} tab={tab} isActive={activeTab === tab} />
                ))}
            </main>
        </div>
    );
}