            {showFreelancer && (
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
            )} 