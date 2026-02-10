import LessonForm from '@/components/lessons/lesson-form';

export default async function EditLessonPage({
    params,
    searchParams,
}: {
    params: Promise<{ courseId: string; lessonId: string }>;
    searchParams: Promise<{ moduleId: string }>;
}) {
    const { courseId, lessonId } = await params;
    const { moduleId } = await searchParams;

    return (
        <div className="flex-1">
            <LessonForm
                key={lessonId}
                courseId={courseId}
                moduleId={moduleId}
                lessonId={lessonId}
            />
        </div>
    );
}
