export type ThemeProps = {
    isDark: boolean;
    toggleTheme: () => void;
    hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void;
};
