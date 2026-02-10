import { CheckCircle2, CircleDashed, Circle } from 'lucide-react';

export default function Status({ status }: { status: string }) {
    switch (status) {
        case 'published':
            return (
                <span className="flex items-center gap-1 text-green-500 font-bold text-[11px] uppercase">
                    <CheckCircle2 size={14} /> Publiée
                </span>
            );
        case 'draft':
            return (
                <span className="flex items-center gap-1 text-amber-500 font-bold text-[11px] uppercase">
                    <CircleDashed size={14} /> Brouillon
                </span>
            );
        default:
            return <Circle size={14} className="text-gray-300" />;
    }
}
