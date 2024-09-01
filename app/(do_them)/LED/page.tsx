"use client";

// Reactとフックをインポート
import React, { useState, useRef, useEffect } from 'react';
import UpperBar from '@/app/ui/upper_bar'; // タブを切り替えるためのバー
import PriorKnowledge from '@/app/ui/prior_knowledge/knowledge'; // タブごとのコンテンツ
import LEDContent from '@/app/ui/(do_them)/LED';
import Debug from '@/app/ui/debug/debug';
import Comments from '@/app/ui/comments/comments';

// タブ名の型定義。各タブに対応する名前を設定しています。
type TabName = 'knowledge' | 'task' | 'debug' | 'comment';

// 各タブに表示されるコンテンツを管理するコンポーネント。`React.memo` を使用して最適化されています。
const TabContent = React.memo(({ tab, isActive }: { tab: TabName; isActive: boolean }) => {
    const contentRef = useRef<HTMLDivElement>(null); // 各タブのコンテンツを参照するためのRefを作成

    // タブがアクティブ/非アクティブになったときにメッセージを出力するための `useEffect`。
    useEffect(() => {
        console.log(`${tab} content ${isActive ? 'activated' : 'deactivated'}`);
    }, [isActive, tab]); // `isActive` または `tab` が変更されるたびに実行されます。

    // アクティブなタブに応じて、表示するコンテンツを切り替える。
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
        // コンテンツの表示領域。アクティブなタブの場合は表示され、非アクティブなタブは隠されます。
        <div
            ref={contentRef} // `contentRef` はここで使用されるが、具体的にどう使うかはまだ未定。
            className={`w-full h-full overflow-y-auto absolute inset-0 transition-opacity duration-300 ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
            {content}
        </div>
    );
});

// メインコンポーネント。タブの切り替えとそれに応じたコンテンツ表示を管理します。
export default function LEDPage() {
    const [activeTab, setActiveTab] = useState<TabName>('knowledge'); // 現在アクティブなタブを管理

    // タブが変更されたときに呼び出される関数。タブの状態を変更し、ログを出力します。
    const handleTabChange = (tab: TabName) => {
        console.log(`Changing tab from ${activeTab} to ${tab}`);
        setActiveTab(tab);
    };

    // アクティブなタブが変更されたときに実行される `useEffect`。
    useEffect(() => {
        console.log(`Active tab changed to: ${activeTab}`);
    }, [activeTab]); // `activeTab` が変更されるたびに実行されます。

    return (
        <div className="flex flex-col min-h-screen">
            {/* タブの変更を行う上部バー。 `handleTabChange` が呼び出される。 */}
            <UpperBar onTabChange={handleTabChange} />
            {/* 各タブのコンテンツを表示するエリア。現在のタブに応じて内容が切り替わる。 */}
            <main className="flex grow p-6 overflow-hidden relative">
                {(['knowledge', 'task', 'debug', 'comment'] as TabName[]).map((tab) => (
                    <TabContent key={tab} tab={tab} isActive={activeTab === tab} />
                ))}
            </main>
        </div>
    );
}
