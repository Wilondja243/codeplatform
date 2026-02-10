'use client';

import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { ClipLoader } from 'react-spinners';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    itemName: string;
    isPending?: boolean;
}

export default function DeleteConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    itemName,
    isPending,
}: DeleteModalProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay simple */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Card Modal */}
            <div className="relative w-full max-w-md bg-card border border-white/10 rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                    <div className="size-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 mx-auto mb-4">
                        <AlertTriangle size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Êtes-vous sûr de vouloir supprimer{' '}
                        <span className="text-primary font-bold">
                            {itemName}
                        </span>{' '}
                        ? Cette action est irréversible et supprimera tout le
                        contenu associé.
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            disabled={isPending}
                            className="flex-1 px-4 py-3 rounded-xl font-bold text-text-muted bg-white/5 transition-all cursor-pointer disabled:opacity-50"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={isPending}
                            className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            {isPending ? (
                                <>
                                    <ClipLoader size={18} color="white" />
                                    En cours
                                </>
                            ) : (
                                <>
                                    <Trash2 size={18} />
                                    Supprimer
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white cursor-pointer"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
}
