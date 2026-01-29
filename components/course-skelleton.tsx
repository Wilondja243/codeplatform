export const CourseSkeleton = () => (
    <div className="w-full bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm animate-pulse">
        <div className="p-5 flex flex-col gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>

            <div className="h-4 w-24 bg-gray-200 rounded-full"></div>

            <div className="space-y-2">
                <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
            </div>

            <div className="space-y-2 py-2">
                <div className="h-3 w-full bg-gray-200 rounded-md"></div>
                <div className="h-3 w-full bg-gray-200 rounded-md"></div>
                <div className="h-3 w-2/3 bg-gray-200 rounded-md"></div>
            </div>

            <div className="pt-4 mt-auto border-t border-gray-50 flex justify-between items-center">
                <div className="h-8 w-28 bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-12 bg-gray-100 rounded-md"></div>
            </div>
        </div>
    </div>
);
