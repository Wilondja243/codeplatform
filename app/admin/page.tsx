import TopBar from '@/components/sections/panel/top-bar';
import Sidebar from '@/components/sections/panel/side-bar';
import MainDashboard from '@/components/sections/panel/dashboard';

export default function Dashboard() {
    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <MainDashboard />
                </div>
            </div>
        </div>
    );
}
