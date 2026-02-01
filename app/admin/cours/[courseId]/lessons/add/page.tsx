import LessonForm from '@/components/lesson-form';

export default async function AddLessonPage({
    params,
}: {
    params: Promise<{ courseId: string }>;
}) {
    const { courseId } = await params;

    return (
        <div className="flex-1">
            <LessonForm courseId={courseId} />
        </div>
    );
}
