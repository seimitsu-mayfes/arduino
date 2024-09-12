"use client";

import React, { useRef, useEffect } from 'react';
import PriorKnowledge from './knowledge';
import ButtonContent from '@/app/ui/(do_them)/button';
import Debug from '@/app/ui/debug/debug';
import Comments from '@/app/ui/comments/comments';
import { useTabContext } from '@/app/(do_them)/layout';


type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

const TabContent = React.memo(({ tab, isActive }: { tab: TabName; isActive: boolean }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(`${tab} content ${isActive ? 'activated' : 'deactivated'}`);
    }, [isActive, tab]);

    const content = (() => {
        switch (tab) {
            case 'task':
                return <ButtonContent />;
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
        </div>
    );
});

export default function ButtonPage() {
    const { activeTab } = useTabContext();

    return (
        <>
            {(['knowledge', 'task', 'debug', 'comment'] as TabName[]).map((tab) => (
                <TabContent key={tab} tab={tab} isActive={activeTab === tab} />
            ))}
        </>
    );
}