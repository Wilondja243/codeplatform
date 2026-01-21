type Lesson = {
    id: string;
    title: string;
    modules: {
        id: string;
        title: string;
        code_blocks: {
            id: string;
            title: string;
            language: string;
            content: string;
        }[];
    }[];
    code_blocks: {
        id: string;
        title: string;
        language: string;
        content: string;
    }[];
};

export default function LessonPage() {
    const lesson = {
        id: '1',
        title: 'Introduction to Python',
        modules: [
            {
                id: 'm1',
                title: 'Getting Started',
                code_blocks: [
                    {
                        id: 'cb1',
                        title: 'Hello World',
                        language: 'python',
                        content: 'print("Hello, World!")',
                    },
                ],
            },
        ],
    };

    return (
        <div>
            {/* <h1>{lesson.title}</h1>

            {lesson.code_blocks.map((block) => (
                <pre key={block.id}>
                    <code>{block.content}</code>
                </pre>
            ))}

            {lesson.modules.map((module) => (
                <div key={module.id}>
                    <h2>{module.title}</h2>
                    {module.code_blocks.map((block) => (
                        <pre key={block.id}>
                            <code>{block.content}</code>
                        </pre>
                    ))}
                </div>
            ))} */}
        </div>
    );
}
