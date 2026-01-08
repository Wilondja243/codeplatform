import React from 'react';

type CourseNavigationProps = {
    prevLabel?: string;
    nextLabel?: string;
    onPrev?: () => void;
    onNext?: () => void;
};

export default function CourseNavigation({
    prevLabel,
    nextLabel = 'Cours suivant',
    onPrev,
    onNext,
}: CourseNavigationProps) {
    return (
        <div
            className="course-navigation"
            style={{
                justifyContent: onNext && 'end'
            }}
        >
            {prevLabel && (
                <button
                    className="nav-button prev"
                    onClick={onPrev}
                    disabled={!onPrev}
                >
                    ← {prevLabel}
                </button>
            )}

            {nextLabel && (
                <button
                    className="nav-button next"
                    onClick={onNext}
                    disabled={!onNext}
                >
                    {nextLabel} →
                </button>
            )}
            
        </div>
    );
}
