import CourseFormPage from '@/components/course-form';

export default async function EditCourseFormPage({
    params,
}: {
    params: Promise<{ courseId: string }>;
}) {
    const { courseId } = await params;

    console.log('courseId: ', courseId);

    return (
        <div className="filex-1">
            <CourseFormPage key={courseId} courseId={courseId} />
        </div>
    );
}
