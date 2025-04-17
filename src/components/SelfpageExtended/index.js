import React from 'react';
import clsx from 'clsx';
import styles from '../Selfpage/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import personalInfo from '../../config/personal';

library.add(fab, fas);

export default function SelfpageExtended() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            {/* 头像部分 */}
            <div className="text--center">
              <img 
                className={styles.profileImage} 
                src="https://github.com/haoguoyao.png" 
                alt="Profile" 
              />
            </div>
            {/* 联系方式 */}
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <div className={styles.contactItem}>
                <FontAwesomeIcon 
                  icon={['fas', 'location-dot']} 
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>Los Angeles, CA</span>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon 
                  icon={['fas', 'envelope']} 
                  className={styles.contactIcon}
                />
                    <a 
                        href={`mailto:${personalInfo.email}`}
                      className={styles.contactLink}
                    >
                      {personalInfo.email}
                    </a>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon 
                  icon={['fab', 'github']} 
                  className={styles.contactIcon}
                />
                <a 
                  href="https://github.com/haoguoyao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  github.com/haoguoyao
                </a>
              </div>
              <div className={styles.contactItem}>
                <FontAwesomeIcon 
                  icon={['fab', 'weixin']} 
                  className={styles.contactIcon}
                />
                <span className={styles.contactText}>haoguoyao99</span>
              </div>
            </div>
          </div>

          <div className={clsx('col col--8')}>
            <h2>Introduction</h2>
            <div className={styles.summary}>
            <p>
                    Highly skilled software engineer with expertise in AI, deep learning, large language models (LLM), and full‑stack development. 
                    Two Master's degrees in Computer Science and Computer Engineering. 
                    </p>
                    <p>
                    Years of hands-on experience on full‑cycle software development, including requirements analysis, design, data preprocessing, 
                    model development, testing, and deployment. With the strong ability to integrate the latest techniques and research background, 
        solved real-world problems, implemented complex machine learning system, and delivered impactful results.
                  </p>
            </div>

            {/* Freelancer 板块 */}
            <div className={styles.freelancer}>
              <h2>Freelancer Services</h2>
              <div className={styles.servicesList}>
                  <div className={styles.serviceItem}>
                    <FontAwesomeIcon 
                      icon={['fas', 'graduation-cap']} 
                      className={styles.serviceIcon}
                    />
                    <h3>CS Assignment Tutor</h3>
                    <p>Algorithm design, programming assignments, and technical mentoring</p>
                  </div>

                <div className={styles.serviceItem}>
                  <FontAwesomeIcon 
                    icon={['fas', 'robot']} 
                    className={styles.serviceIcon}
                  />
                  <h3>AI Development</h3>
                  <p>Custom AI solutions, LLM integration, and intelligent system development</p>
                </div>
                <div className={styles.serviceItem}>
                  <FontAwesomeIcon 
                    icon={['fas', 'code']} 
                    className={styles.serviceIcon}
                  />
                  <h3>Full-Stack Development</h3>
                  <p>Web applications, APIs, and database design</p>
                </div>
                <div className={styles.serviceItem}>
                  <FontAwesomeIcon 
                    icon={['fas', 'chart-line']} 
                    className={styles.serviceIcon}
                  />
                  <h3>Data Science</h3>
                  <p>Data analysis, visualization, and machine learning models</p>
                </div>
              </div>
            </div>

            {/* 教育背景 */}
            {/* <div className={styles.education}>
              <h2>Education</h2>
              <div className={styles.educationEntry}>
                <div className={styles.institution}>University of California, Riverside (UCR)</div>
                <div className={styles.degree}>M.S. in Computer Engineering</div>
                <div>Overall GPA: 3.96/4.0</div>
              </div>
              <div className={styles.educationEntry}>
                <div className={styles.institution}>Rutgers, The State University of New Jersey</div>
                <div className={styles.degree}>M.S. in Data Science</div>
              </div>
              <div className={styles.educationEntry}>
                <div className={styles.institution}>Northeastern University (China)</div>
                <div className={styles.degree}>B.E. in Software Engineering</div>
              </div>
            </div> */}



          </div>
        </div>
      </div>
    </section>
  );
} 