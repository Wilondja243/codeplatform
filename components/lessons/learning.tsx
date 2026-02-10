'use client';

import React, { useState, useMemo } from 'react';
import {
    ChevronRight,
    ChevronLeft,
    Check,
    Sparkles,
    BookOpen,
    Copy,
    Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    atomDark,
    vscDarkPlus,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import LearningNavigation from '../ui/learning-navigation';

export default function LearningCenter({ lessons }: { lessons: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const lessonsCount = lessons?.length || 0;

    const currentLesson = useMemo(() => {
        if (!lessons || lessonsCount === 0) return null;
        return lessons[currentIndex];
    }, [lessons, currentIndex, lessonsCount]);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const isLastLesson = currentIndex === lessonsCount - 1;
    const isFirstLesson = currentIndex === 0;

    const handleNext = () => {
        if (!isLastLesson) {
            setCurrentIndex((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        if (!isFirstLesson) {
            setCurrentIndex((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (lessonsCount === 0 || !currentLesson) {
        return (
            <div className="h-screen flex items-center justify-center bg-white text-slate-400 font-medium">
                Préparation de votre leçon...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-text-main selection:bg-blue-50 pb-20">
            {/* Barre de progression */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-50 z-50">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{
                        width: `${((currentIndex + 1) / lessonsCount) * 100}%`,
                    }}
                    className="h-full bg-blue-600 transition-all duration-500"
                />
            </div>

            {/* Header */}
            <header className="max-w-4xl mx-auto pt-24 pb-12">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                        <BookOpen size={16} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Leçon {currentIndex + 1} sur {lessonsCount}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-text-main mb-6">
                    {currentLesson.title}
                </h1>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
            </header>

            {/* Contenu principal */}
            <main className="max-w-3xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentLesson.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                    >
                        {currentLesson.contents
                            ?.sort((a: any, b: any) => a.order - b.order)
                            .map((content: any, index: number) => (
                                <div key={content.id} className="group">
                                    {content.type === 'SECTION_TITLE' && (
                                        <h2 className="text-2xl font-bold text-slate-800 mt-16 mb-4 flex items-baseline gap-3">
                                            <span className="text-blue-600/30 font-mono text-sm">
                                                0{index + 1}
                                            </span>
                                            {content?.value}
                                        </h2>
                                    )}

                                    {content.type === 'PARAGRAPH' && (
                                        <p
                                            className="
                                            text-lg md:text-xl text-slate-600 leading-relaxed font-normal
                                        [&_code]:bg-slate-200 [&_code]:rounded-md [&_code]:px-2 [&_code]:py-1 "
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: content.value,
                                                }}
                                            />
                                        </p>
                                    )}

                                    {content.type === 'COMMAND' && (
                                        <div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-[#1e1e1e]">
                                            <div className="bg-[#2d2d2d] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex gap-1.5">
                                                        <div className="size-2.5 rounded-full bg-[#ff5f56]/80" />
                                                        <div className="size-2.5 rounded-full bg-[#ffbd2e]/80" />
                                                        <div className="size-2.5 rounded-full bg-[#27c93f]/80" />
                                                    </div>
                                                    <div className="h-4 w-[1px] bg-white/10 mx-2" />
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] font-mono">
                                                        {content.language ||
                                                            'python'}
                                                    </span>
                                                </div>

                                                {/* Bouton Copier */}
                                                <button
                                                    onClick={() =>
                                                        handleCopy(
                                                            content.value,
                                                            content.id,
                                                        )
                                                    }
                                                    className="text-slate-400 hover:text-white transition-colors p-1 bg-white/5 rounded-md hover:bg-white/10"
                                                >
                                                    {copiedId === content.id ? (
                                                        <div className="flex items-center gap-1.5 px-1">
                                                            <span className="text-[10px] font-bold text-green-400">
                                                                Copié!
                                                            </span>
                                                            <Check
                                                                size={14}
                                                                className="text-green-400"
                                                            />
                                                        </div>
                                                    ) : (
                                                        <Copy size={14} />
                                                    )}
                                                </button>
                                            </div>

                                            <div className="text-sm bg-[#1e1e1e] rounded-b-xl overflow-hidden">
                                                <SyntaxHighlighter
                                                    language={
                                                        content.language ||
                                                        'python'
                                                    }
                                                    style={atomDark}
                                                    showLineNumbers={true}
                                                    // On dit au highlighter d'utiliser une div au lieu d'un <pre> pour mieux contrôler le CSS
                                                    PreTag="div"
                                                    customStyle={{
                                                        margin: 0,
                                                        padding: '24px',
                                                        fontSize: '14px',
                                                        lineHeight: '1.6',
                                                        background:
                                                            'transparent',
                                                        // On force le comportement du texte au niveau le plus profond
                                                        whiteSpace: 'pre',
                                                        wordWrap: 'break-word',
                                                    }}
                                                    codeTagProps={{
                                                        style: {
                                                            whiteSpace:
                                                                'pre-wrap',
                                                            wordBreak:
                                                                'break-all',
                                                            display: 'block', // Force le rendu en bloc
                                                        },
                                                    }}
                                                    lineNumberStyle={{
                                                        color: '#5c6370',
                                                        minWidth: '2.5em',
                                                        paddingRight: '1.5em',
                                                        textAlign: 'right',
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {content.value
                                                        ? content.value.replace(
                                                              /\\n/g,
                                                              '\n',
                                                          )
                                                        : //   .replace(
                                                          //       /\n\s*\n/g,
                                                          //       '\n',
                                                          //   )
                                                          ''}
                                                </SyntaxHighlighter>
                                            </div>
                                        </div>
                                    )}

                                    {content.type === 'IMAGE' && (
                                        <div className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                                            <img
                                                src={content.value}
                                                alt="Illustration"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Navigation fixe en bas */}
            <LearningNavigation
                handleBack={handleBack}
                isFirstLesson={isFirstLesson}
                isLastLesson={isLastLesson}
                handleNext={handleNext}
                currentIndex={currentIndex}
                lessonsCount={lessonsCount}
            />
        </div>
    );
}
