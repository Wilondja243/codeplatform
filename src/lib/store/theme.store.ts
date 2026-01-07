import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ThemeProps } from './type.store';

const useThemeStore = create<ThemeProps>()(
    persist(
        (set, get) => ({
            isDark: true,
            toggleTheme: () => set({ isDark: !get().isDark }),
            hasHydrated: false,
            setHasHydrated: (state) => set({ hasHydrated: state }),
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => localStorage),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true);
            },
        },
    ),
);

export default useThemeStore;
