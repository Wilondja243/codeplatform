export default function LessonBlock({ block }: { block: any }) {
    switch (block.type) {
        case 'SECTION_TITLE':
            return (
                <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-4">
                    {block.value}
                </h2>
            );

        case 'PARAGRAPH':
            return (
                <p className="text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                    {block.value}
                </p>
            );

        case 'IMAGE':
            return (
                <figure className="my-8">
                    <img
                        src={block.value}
                        alt="Illustration leçon"
                        className="rounded-2xl border border-slate-200 shadow-sm w-full"
                    />
                </figure>
            );

        case 'COMMAND':
            return (
                <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
                    <code className="flex gap-2">
                        <span className="text-slate-500">$</span> {block.value}
                    </code>
                </div>
            );

        case 'LINK':
            return (
                <a
                    href={block.value}
                    target="_blank"
                    className="flex items-center gap-2 text-primary font-bold hover:underline"
                >
                    🔗 Voir la ressource externe
                </a>
            );

        default:
            return null;
    }
}
