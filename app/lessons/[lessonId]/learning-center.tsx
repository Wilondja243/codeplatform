import LessonBlock from '@/components/lesson-block';
import { useLessonsQuery } from '@/lib/query/query.cours';

export default async function PublicLessonPage({ params }: any) {
    const { lessonId } = await params;

    const { data: lesson, isLoading, error } = useLessonsQuery(lessonId);

    if (!lesson) return <div>Leçon non trouvée</div>;

    return (
        <main className="max-w-3xl mx-auto py-12 px-6">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
                    {lesson.title}
                </h1>
                <div className="flex justify-center gap-4 text-sm text-slate-500">
                    <span>Ordre: {lesson.order}</span>
                    <span>•</span>
                    <span>{lesson.duration || '5 min'} de lecture</span>
                </div>
            </header>

            <div className="space-y-8">
                {lesson.contents.map((block: any) => (
                    <LessonBlock key={block.id} block={block} />
                ))}
            </div>
        </main>
    );
}
