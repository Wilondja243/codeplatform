import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export type UserTokenProps = {
    userToken: null | string;
    tokenHydrated: boolean;
    hasCompletedOnboarding: boolean;
    setUserToken: (token: string) => void;
    clearToken: () => void;
    setTokenHydrated: () => void;
    completeOnboarding: () => void;
};

export const useUserToken = create<UserTokenProps>()(
    persist(
        (set) => ({
            userToken: null,
            tokenHydrated: false,
            hasCompletedOnboarding: false,

            setUserToken: (token) => set({ userToken: token }),
            
            clearToken: () => {
                set({
                    userToken: null,
                    tokenHydrated: false,
                });
            },

            completeOnboarding: () => set({ hasCompletedOnboarding: true }),

            setTokenHydrated: () => set({ tokenHydrated: true }),
        }),
        {
            name: 'user-token',
            storage: createJSONStorage(() => localStorage), 
            onRehydrateStorage: () => (state) => {
                state?.setTokenHydrated();
            },
        },
    ),
);