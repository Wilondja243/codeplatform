import { ArrowRight } from 'lucide-react';
import { useCourseQuery } from '../../lib/query/course.query';
import { CourseSkeleton } from '../../components/course-skelleton';

export default function FeatureRoadmaps() {
    const { data, isLoading, isError, error } = useCourseQuery();

    const skeletons = Array.from({ length: 3 });

    return (
        <section className="roadmaps-wrapper wrapper">
            <div className="roadmap-container">
                <div className="roadmap-header">
                    <h3 className="title">
                        <span
                            className="material-symbols-outlined"
                            style={{ color: '#d97706' }}
                        >
                            auto_awesome
                        </span>
                        Roadmaps
                    </h3>
                </div>

                <div className="roadmaps-grid">
                    {isLoading
                        ? skeletons.map((_, index) => (
                              <CourseSkeleton key={index} />
                          ))
                        : data.map((course: any) => (
                              <div className="roadmap-card group">
                                  <div
                                      className="roadmap-card-header"
                                      style={{
                                          background:
                                              'linear-gradient(135deg, #ecdd13ff 0%, #e100ffff 100%)',
                                      }}
                                  >
                                      <div className="icons">
                                          <div className="icon">Python</div>
                                      </div>
                                  </div>
                                  <div className="roadmap-card-body">
                                      <div className="roadmap-card-meta">
                                          <span className="category">
                                              Développement
                                          </span>
                                          <span className="lessons">
                                              22 Leçons
                                          </span>
                                      </div>
                                      <h5 className="roadmap-card-title">
                                          {course.title}
                                      </h5>
                                      <p className="roadmap-card-description">
                                          {course.description}
                                      </p>
                                      <div className="progress-bar-container">
                                          <div className="progress-bar">
                                              <div
                                                  className="progress"
                                                  style={{ width: '0%' }}
                                              ></div>
                                          </div>
                                      </div>
                                      <div className="roadmap-card-footer">
                                          <div className="level">
                                              <span className="material-symbols-outlined">
                                                  signal_cellular_alt
                                              </span>{' '}
                                              {course.level}
                                          </div>
                                          <a
                                              href={course.link}
                                              className="view-roadmap"
                                          >
                                              Voir Roadmap{' '}
                                              <ArrowRight
                                                  size={20}
                                                  className="inline"
                                              />
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
