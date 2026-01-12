import { BookOpen } from "lucide-react";
import { useUserMeQuery } from "../../lib/query/user.query";


export default function Navbar() {
    const { data, isLoading } = useUserMeQuery();

    return (
        <nav className="sticky top-0 z-50  border-b bg-background-light py-3">
            <div className="wrapper flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-1 text-primary">
                        <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-text-light">
                            <BookOpen size={25} color="white" />
                        </div>
                        <h2 className="text-lg font-bold">CodePlatform</h2>
                    </div>

                    <nav className="hidden md:flex gap-5 text-sm font-medium">
                        <a href="/" className="hover:text-primary">
                            Accueil
                        </a>
                        <a href="/explore" className="hover:text-primary">
                            Explorer
                        </a>
                        <a href="/roadmap" className="hover:text-primary">
                            Roadmaps
                        </a>
                        <a href="#" className="hover:text-primary">
                            Méthodologie
                        </a>
                        <a href="#" className="hover:text-primary">
                            Ressources
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href="/contact"
                        className="flex items-center justify-between border border-card-light-border text-text-dark px-6 h-10 rounded-lg font-bold hover:text-primary hover:border-primary"
                    >
                        Contact
                    </a>
                    {!data && (
                        <a href="/register" className="flex items-center justify-center bg-primary text-text-light px-6 h-10 rounded-lg font-bold hover:bg-primary-dark">
                            Inscription
                        </a>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}
