export const CourseSkeleton = () => (
    <div className="w-full bg-background rounded-xl border border-card-border overflow-hidden shadow-sm animate-pulse">
        <div className="p-5 flex flex-col gap-4">
            <div className="w-12 h-12 bg-card rounded-lg"></div>

            <div className="h-4 w-24 bg-card rounded-full"></div>

            <div className="space-y-2">
                <div className="h-6 w-3/4 bg-card-hover rounded-md"></div>
            </div>

            <div className="space-y-2 py-2">
                <div className="h-3 w-full bg-card rounded-md"></div>
                <div className="h-3 w-full bg-card rounded-md"></div>
                <div className="h-3 w-2/3 bg-card rounded-md"></div>
            </div>

            <div className="pt-4 mt-auto border-t border-card-border flex justify-between items-center">
                <div className="h-8 w-28 bg-card rounded-lg"></div>
                <div className="h-4 w-12 bg-card-hover rounded-md"></div>
            </div>
        </div>
    </div>
);
