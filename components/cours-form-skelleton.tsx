import React from 'react';

export default function CourseFormSkeleton() {
    return (
        <div className="flex-1 py-10 overflow-y-auto bg-background animate-pulse">
            <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
                <div className="space-y-3">
                    <div className="h-8 w-64 bg-card-border rounded-md" />{' '}
                    {/* Titre */}
                    <div className="h-4 w-80 bg-card-border/50 rounded-md" />{' '}
                    {/* Sous-titre */}
                </div>
                <div className="h-11 w-40 bg-card-border rounded-md" />{' '}
                {/* Bouton */}
            </div>

            {/* Corps du Formulaire */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-card border border-card-border rounded-md p-6 space-y-6">
                        <div className="h-4 w-40 bg-primary/20 rounded" />

                        <div className="space-y-3">
                            <div className="h-3 w-20 bg-card-border rounded" />
                            <div className="h-12 w-full bg-background border border-card-border rounded-sm" />
                        </div>

                        <div className="space-y-3">
                            <div className="h-3 w-24 bg-card-border rounded" />
                            <div className="h-32 w-full bg-background border border-card-border rounded-sm" />
                        </div>

                        <div className="space-y-3">
                            <div className="h-3 w-28 bg-card-border rounded" />
                            <div className="h-12 w-full bg-background border border-card-border rounded-sm" />
                        </div>
                    </div>

                    <div className="bg-card border border-card-border rounded-md p-6 space-y-6">
                        <div className="h-4 w-32 bg-primary/20 rounded" />
                        <div className="space-y-3">
                            <div className="h-3 w-20 bg-card-border rounded" />
                            <div className="h-12 w-full bg-background border border-card-border rounded-sm" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-card border border-card-border rounded-md p-6 space-y-6">
                        <div className="h-4 w-28 bg-primary/20 rounded" />
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-3">
                                <div className="h-3 w-16 bg-card-border rounded" />
                                <div className="h-10 w-full bg-background border border-card-border rounded-sm" />
                            </div>
                        ))}
                    </div>

                    <div className="bg-card border border-card-border rounded-md p-6 space-y-6">
                        <div className="h-4 w-28 bg-primary/20 rounded" />
                        <div className="space-y-3">
                            <div className="h-3 w-24 bg-card-border rounded" />
                            <div className="h-10 w-full bg-background border border-card-border rounded-sm" />
                        </div>
                        <div className="space-y-3">
                            <div className="h-3 w-32 bg-card-border rounded" />
                            <div className="flex gap-3 mt-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-card-border"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
