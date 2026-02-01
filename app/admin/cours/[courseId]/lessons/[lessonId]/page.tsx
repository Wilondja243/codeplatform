import LessonForm from '@/components/lesson-form';

export default async function EditLessonPage({
    params,
}: {
    params: Promise<{ courseId: string; lessonId: string }>;
}) {
    const { courseId, lessonId } = await params;

    return (
        <div className="flex-1">
            <LessonForm
                key={lessonId}
                courseId={courseId}
                lessonId={lessonId}
            />
        </div>
    );
}
