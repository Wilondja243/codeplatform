import { ThemeProvider } from '@/components/theme-provider';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
