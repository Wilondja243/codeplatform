'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, BarChart3, Clock } from 'lucide-react';
import { CourseSkeleton } from '../../course-skelleton';
import { useCoursesQuery } from '@/lib/query/course.query';

export default function FeatureRoadmap() {
    const { data: courses, isLoading, error } = useCoursesQuery();

    const skeletons = Array.from({ length: 3 });

    return (
        <section className="py-16 bg-white">
            <div className="wrapper max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-amber-600 font-black uppercase tracking-widest text-xs">
                            <Sparkles size={16} fill="#d97706" />
                            Roadmaps d'apprentissage
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                            Parcours structurés
                        </h3>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-primary transition-colors group">
                        Toutes les roadmaps
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>
                </div>

                {/* Grille des Roadmaps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2l:grid-cols-4 gap-8">
                    {isLoading
                        ? skeletons.map((_, index) => (
                              <CourseSkeleton key={index} />
                          ))
                        : Array.isArray(courses?.data) &&
                          courses?.data.map((course, index) => (
                              <div
                                  key={index}
                                  className="group flex flex-col bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500"
                              >
                                  <div className="relative h-48 w-full bg-slate-900 p-8 flex flex-col justify-between overflow-hidden">
                                      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(135deg,_#ecdd13_0%,_#e100ff_100%)] opacity-80" />
                                      <div className="absolute -bottom-10 -right-10 size-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-colors" />

                                      <div className="relative z-10 flex justify-between items-start">
                                          <div className="size-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                                              <BookOpen
                                                  className="text-white"
                                                  size={24}
                                              />
                                          </div>
                                          <span className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                              {course.tag}
                                          </span>
                                      </div>

                                      <h4 className="relative z-10 text-white text-xl font-black leading-tight">
                                          {course.title}
                                      </h4>
                                  </div>

                                  {/* Corps de la Carte */}
                                  <div className="p-8 flex flex-col flex-1">
                                      <div className="flex items-center gap-4 mb-4 text-slate-400 font-bold text-xs uppercase tracking-tight">
                                          <span className="flex items-center gap-1">
                                              <Clock
                                                  size={14}
                                                  className="text-primary"
                                              />
                                              {course.duration} Leçons
                                          </span>
                                          <span className="flex items-center gap-1">
                                              <BarChart3
                                                  size={14}
                                                  className="text-primary"
                                              />
                                              {course.note}
                                          </span>
                                      </div>

                                      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                                          {course.description}
                                      </p>

                                      <div className="space-y-2 mb-8">
                                          <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                                              <span>Progression</span>
                                              <span>0%</span>
                                          </div>
                                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                              <div className="h-full bg-primary w-0 group-hover:w-[10%] transition-all duration-1000" />
                                          </div>
                                      </div>

                                      <Link
                                          href={`/roadmaps/steps?courseId=${course.id}&?slug=${course.slug}`}
                                          className="w-full h-14 bg-slate-50 group-hover:bg-slate-900 group-hover:text-white rounded-xl flex items-center justify-center gap-2 font-black text-sm transition-all duration-300"
                                      >
                                          Voir la Roadmap
                                          <ArrowRight size={18} />
                                      </Link>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </section>
    );
}
