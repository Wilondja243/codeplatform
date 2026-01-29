import { Search, Bell, Moon, Command } from 'lucide-react';

const TopBar = () => {
    return (
        <header className="h-20 border-b border-card-d-border bg-card-d backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="relative w-1/3">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="text-gray-500 size-4" />
                </div>
                <input
                    type="text"
                    placeholder="Predictive system search"
                    className="w-full bg-[#161B22] border border-gray-700 rounded-xl py-2.5 pl-11 pr-16 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 transition-all"
                />
                <div className="absolute inset-y-0 right-3 flex items-center gap-1">
                    <span className="bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded text-[10px] flex items-center gap-0.5">
                        <Command size={10} /> K
                    </span>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 pr-6 border-r border-gray-800">
                    <button className="p-2.5 bg-[#161B22] border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors">
                        <Bell size={18} />
                    </button>
                    <button className="p-2.5 bg-[#161B22] border border-gray-700 rounded-xl text-gray-400 hover:text-white transition-colors">
                        <Moon size={18} />
                    </button>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-sm font-bold text-white leading-none">
                            Alex Rivera
                        </p>
                        <p className="text-[10px] text-primary font-bold uppercase mt-1 tracking-tighter">
                            System Architect
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-blue-500/20 p-0.5">
                        <img
                            src="images/4442.jpg"
                            alt="Avatar"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
