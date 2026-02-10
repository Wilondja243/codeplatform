import AddRoadmapPage from '@/components/roadmaps/roadmap-form';

export default async function AddLessonPage({
    params,
    searchParams,
}: {
    params: Promise<{ courseId: string }>;
    searchParams: Promise<{ roadmapId: string }>;
}) {
    const { courseId } = await params;
    const { roadmapId } = await searchParams;

    return (
        <div className="flex-1">
            <AddRoadmapPage courseId={courseId} roadmapId={roadmapId} />
        </div>
    );
}
