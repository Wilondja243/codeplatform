import { ThemeProvider } from '@/components/theme-provider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    console.log('session: ', session);

    if (!session || !session.user) {
        redirect('/auth/accounts/signin');
    }

    if (session.user.role !== 'ADMIN') {
        redirect('/explore?error=AccessDenied');
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            // forcedTheme="dark"
        >
            <div className="min-h-screen bg-background text-foreground">
                {children}
            </div>
        </ThemeProvider>
    );
}
