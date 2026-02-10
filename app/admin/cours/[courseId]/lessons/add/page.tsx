import LessonForm from '@/components/lessons/lesson-form';

export default async function AddLessonPage({
    params,
    searchParams,
}: {
    params: Promise<{ courseId: string }>;
    searchParams: Promise<{ moduleId: string }>;
}) {
    const { courseId } = await params;
    const { moduleId } = await searchParams;

    return (
        <div className="flex-1">
            <LessonForm courseId={courseId} moduleId={moduleId} />
        </div>
    );
}
