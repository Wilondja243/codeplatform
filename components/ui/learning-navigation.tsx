import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LearningNavigation({
    handleBack,
    isFirstLesson,
    isLastLesson,
    handleNext,
    currentIndex,
    lessonsCount,
}: any) {
    return (
        <nav className="relative bottom-2 max-w-3xl mx-auto p-2">
            <div className="flex items-center justify-between">
                <button
                    onClick={handleBack}
                    disabled={isFirstLesson}
                    className={`p-3 rounded-xl transition-all ${isFirstLesson ? 'text-slate-200' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="hidden sm:flex items-center gap-2 px-4">
                    <div className="size-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-tighter">
                        {Math.round(((currentIndex + 1) / lessonsCount) * 100)}%
                        complété
                    </span>
                </div>

                <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
                >
                    {isLastLesson ? 'Terminer' : 'Suivant'}
                    <ChevronRight size={18} />
                </button>
            </div>
        </nav>
    );
}
