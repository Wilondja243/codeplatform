'use client';

import Link from 'next/link';
import axios from 'axios';
import { ArrowRight, PlayCircle, Clock, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Course } from '@/app/generated/prisma';
import { CourseSkeleton } from '@/components/course-skelleton';

export default function Courses() {
    const [courses, setCourses] = useState<Course[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCourse = async () => {
            try {
                const response = await axios.get('/api/cours');
                setCourses(response.data);
            } catch (error) {
                console.error('Axios Error', error);
            } finally {
                setLoading(false);
            }
        };

        getCourse();
    }, []);

    if (!loading) {
        console.log(courses);
        console.log('courseData: ', JSON.stringify(courses), 4, null);
    }

    return (
        <section className="pb-24 pt-16 bg-gradient-to-t from-white to-[#f8f9fa]">
            <div className="wrapper space-y-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                            <span className="size-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                                Formations Disponibles
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] tracking-tighter">
                            Toutes nos formations
                        </h2>
                        <p className="text-slate-500 text-lg font-medium max-w-xl">
                            Des parcours structurés et validés par l'industrie
                            pour passer de débutant à expert en quelques mois.
                        </p>
                    </div>

                    <Link
                        href="/explore"
                        className="group flex items-center gap-2 text-[#111a30] font-black hover:text-primary transition-all pb-2 border-b-2 border-transparent hover:border-primary"
                    >
                        Voir tous les parcours
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {loading
                        ? [1, 2, 3].map((_, i) => <CourseSkeleton key={i} />)
                        : courses?.map((course: any) => (
                              <div
                                  key={course.id}
                                  className="group flex flex-col bg-white rounded-[2rem] border border-card-border p-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                              >
                                  <div className="bg-gray-100 rounded-[1.8rem] p-8 flex-1 flex flex-col">
                                      <div className="flex justify-between items-start mb-8">
                                          <div
                                              dangerouslySetInnerHTML={{
                                                  __html: course.icon,
                                              }}
                                          />
                                          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-card-border shadow-sm">
                                              <Star
                                                  size={12}
                                                  className="fill-yellow-400 text-yellow-400"
                                              />
                                              <span className="text-xs text-text-main font-bold">
                                                  {course.note}
                                              </span>
                                          </div>
                                      </div>

                                      <div className="space-y-4 flex-1">
                                          <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 border border-[#e2e8f0]">
                                              {course.tag}
                                          </span>
                                          <h3 className="text-2xl font-black text-text-main tracking-tight group-hover:text-primary transition-colors">
                                              {course.title}
                                          </h3>
                                          <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                              {course.description}
                                          </p>
                                      </div>

                                      {/* Infos additionnelles */}
                                      <div className="flex items-center gap-4 py-6 text-slate-400">
                                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tighter">
                                              <Clock size={14} />
                                              {course.duration}
                                          </div>
                                          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-tighter">
                                              <PlayCircle size={14} />
                                              Accès Illimité
                                          </div>
                                      </div>

                                      <Link
                                          href={`/roadmaps/${course.slug}`}
                                          className="w-full h-14 bg-white border border-card-border text-text-main font-black rounded-2xl flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300"
                                      >
                                          Détails du parcours
                                          <ArrowRight
                                              size={18}
                                              className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                                          />
                                      </Link>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </section>
    );
}
