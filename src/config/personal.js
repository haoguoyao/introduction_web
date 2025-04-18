const personalInfo = {
  name: 'Guoyao Hao',
  location: 'Los Angeles, CA',
  email: 'ghao004@ucr.edu',
  github: {
    username: 'haoguoyao',
    url: 'https://github.com/haoguoyao'
  },
  linkedin: {
    username: 'haoguoyao',
    url: 'https://www.linkedin.com/in/haoguoyao'
  },
  resume: {
    url: require('@site/static/resume.pdf').default,  // 使用require方式引用
    label: 'Download Resume'
  },
  wechat: 'haoguoyao99',
  education: [
    {
      institution: 'University of California, Riverside (UCR)',
      degree: 'M.S. in Computer Engineering',
      gpa: '3.96/4.0'
    },
    {
      institution: 'Rutgers, The State University of New Jersey',
      degree: 'M.S. in Data Science'
    },
    {
      institution: 'Northeastern University (China)',
      degree: 'B.E. in Software Engineering'
    }
  ],
  company: 'Tazzy Street LLC'
};

export default personalInfo; 