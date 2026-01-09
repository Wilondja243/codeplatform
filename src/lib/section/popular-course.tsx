import { Link } from 'react-router-dom';
import { useCourseQuery } from '../query/course.query';
import { CourseSkeleton } from '../../components/course-skelleton';

export default function PopularCourses() {
    const { data, isLoading, isError, error } = useCourseQuery();

    const skeletons = Array.from({ length: 6 });

    // console.log('data: ', JSON.stringify(data, null, 4));

    return (
        <section className="popular-courses">
            <div className="popular-container wrapper">
                <div className="header">
                    <div>
                        <h2>Toutes nos formations</h2>
                        <p>
                            Des parcours structurés pour passer de débutant à
                            expert.
                        </p>
                    </div>
                    <a href="#" className="view-all">
                        Voir tous les parcours{' '}
                        <span className="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </a>
                </div>

                <div className="courses-grid">
                    {isLoading
                        ? skeletons.map((_, index) => (
                              <CourseSkeleton key={index} />
                          ))
                        : data.map((course: any) => (
                              <div key={course.id} className="course-card">
                                  <div className="course-body">
                                      <div
                                          className={`course-icon text-${course.gradient}-500`}
                                      >
                                          <span className="material-symbols-outlined">
                                              {course.icon}
                                          </span>
                                      </div>
                                      <small className="formation">
                                          Formation
                                      </small>
                                      <h3 className="course-title">
                                          {course.title}
                                      </h3>
                                      <p className="course-desc">
                                          {course.description}
                                      </p>
                                      <div className="course-footer">
                                          <a
                                              href={course.link}
                                              className="btn-secondary"
                                          >
                                              Voir les détails
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </section>
    );
}
