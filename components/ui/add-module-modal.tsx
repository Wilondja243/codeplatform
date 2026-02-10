'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Plus, Info } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import {
    getModuleByIdAction,
    updateModuleAction,
    createModuleAction,
} from '@/actions/course/course';
import { useValidateModuleForm } from '@/hooks/use-validation-form';
import useNotification from '@/hooks/use-taost';

interface AddModuleModalProps {
    isOpen: boolean;
    onClose: () => void;
    moduleId?: string | null;
    moduleTitle?: string;
    courseId: string | null;
    courseTitle?: string;
}

export default function AddModuleModal({
    isOpen,
    onClose,
    moduleId,
    moduleTitle,
    courseId,
    courseTitle,
}: AddModuleModalProps) {
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const [isPending, startTransition] = useTransition();
    const [isInitialLoading, setIsInitialLoading] = useState(!!courseId);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useValidateModuleForm();

    useEffect(() => {
        if (moduleId && courseId) {
            setIsInitialLoading(true);
            const fetchModule = async () => {
                const result = await getModuleByIdAction({
                    moduleId,
                    courseId,
                });
                if (result.success) {
                    reset(result.data as any);
                    console.log('result.data: ', result.data);
                } else {
                    notifyError(result.message as string);
                }
                setIsInitialLoading(false);
            };

            fetchModule();
        } else if (isOpen && !moduleId) {
            reset({ title: '', description: '' });
        }
    }, [moduleId, courseId, isOpen, reset]);

    const isEditing = !!moduleId;

    const onSubmit = (data: any) => {
        startTransition(async () => {
            let result;
            if (isEditing && courseId) {
                result = await updateModuleAction(
                    String(moduleId),
                    courseId,
                    data,
                );
            } else {
                result = await createModuleAction(String(courseId), data);
            }

            if (result?.success) {
                notifySuccess(
                    isEditing
                        ? 'Cours mise à jour avec success'
                        : 'Cours crée avec succès !',
                );
                router.push('/admin-1001/cours');
                router.refresh();
            } else {
                notifyError(
                    (result?.message as string) || 'Une erreur est survenue.',
                );
            }
        });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-lg bg-card border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                >
                    <div className="p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white leading-tight">
                                        {moduleId
                                            ? 'Modifier le Module'
                                            : 'Nouveau Module'}
                                    </h2>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-0.5">
                                        Dans:{' '}
                                        <span className="text-indigo-400">
                                            {moduleTitle
                                                ? moduleTitle
                                                : courseTitle}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/5 rounded-full text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-text-muted ml-1 flex items-center gap-2">
                                    Titre du module
                                    <Info
                                        size={14}
                                        className="text-text-subtle"
                                    />
                                </label>
                                <input
                                    type="text"
                                    {...register('title')}
                                    placeholder="ex: Nom du module"
                                    required
                                    className="w-full bg-background border border-card-border rounded-md px-5 py-4 text-text-main placeholder:text-text-muted outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.02] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-400 ml-1">
                                    Description (Optionnelle)
                                </label>
                                <textarea
                                    {...register('description')}
                                    placeholder="Description du module"
                                    rows={3}
                                    className="w-full bg-background border border-card-border rounded-md px-5 py-4 text-text-main placeholder:text-text-muted outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.02] transition-all resize-none"
                                />
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-6 py-4 rounded-md font-bold border border-card-border text-text-muted hover:bg-white/3 cursor-pointer transition-all"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-primary rounded-md hover:bg-primary-dark text-text-main px-6 py-4 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    {isPending ? (
                                        <>
                                            <Plus size={20} strokeWidth={3} />
                                            Créer le module
                                            <ClipLoader
                                                size={18}
                                                color="white"
                                            />
                                            En cours
                                        </>
                                    ) : (
                                        <>
                                            <Plus size={20} strokeWidth={3} />
                                            {moduleId
                                                ? 'Modifier le module'
                                                : 'Créer le module'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
