'use client';

import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/layout/nav-bar';
import { useLessonsByModuleQuery } from '@/lib/query/course.query';
import LearningCenter from '@/components/lessons/learning';

export default function LearnLessonPage() {
    const searchParams = useSearchParams();
    const courseId = searchParams.get('courseId');
    const moduleId = searchParams.get('moduleId');

    const { data, isLoading, error } = useLessonsByModuleQuery({
        moduleId: String(moduleId),
        courseId: String(courseId),
    });

    if (!isLoading) {
        console.log('lessons: ', JSON.stringify(data, null, 4));
    }

    return (
        <div>
            <NavBar />
            <LearningCenter lessons={data?.data as []} />
        </div>
    );
}
