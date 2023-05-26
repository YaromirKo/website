const about = ''
const experience = [
  {
    startDate: '06/2022',
    endDate: 'Current',
    position: 'Web Developer | Data Scientist | Freelance',
    keyword: ['Web Developer','Data Scientist', 'Freelance'],
    company: "Upwork",
    companyLink: "https://www.upwork.com/freelancers/~015b519264b03e5865",
    description: "Implemented and improved logic for web app for calling. " +
      "Led the design and development prototype of PWA web application for user’s workout analysis in real time using the latest technologies " +
      "Implemented the client part of the web application to work with SIP pcap files with visualization of various data.",
    tags: [
      "Vue.js", "Tailwind CSS", "TypeScript", "Vite", "PWA", "Mediapipe", "Tensorflow.js", "Pinia"
    ]
  },
  {
    startDate: '06/2021',
    endDate: 'Current',
    position: 'Data scientist | Bioinformatician',
    keyword: ["Data scientist", "Bioinformaticia"],
    company: "Uppsala University",
    companyLink: "https://www.uu.se/en",
    description: "Performed statistical analysis of various experimental data using Bayesian theory with the R programming language. " +
      "Development of informative reports on the data analysis performed. Working closely with bench scientists to understand and help accomplish their research goals. " +
      "Analyzed gene expression and gene regulatory networks. Implemented approaches bootstrapping with permutation for a detailed analysis of gene expression correlations, taking into account the unequal amount of data in different experimental groups. " +
      "Automated the process of creating panels with graphs for scientific papers. Mentioned in the presentation at Nobel Symposium “Neuropeptides: The Diverse Dialects of the Nervous System”, June 13-15, 2022, Nobel Forum, Karolinska Institutet, Sweden.",
    tags: [
      "R", "Rmarkdown", "Bayesian", "Tidyverse", "Rstudio", "Linux"
    ]
  },
  {
    startDate: '10/2020',
    endDate: '07/2021',
    position: 'Data scientist',
    keyword: ["Data scientist"],
    company: "Moscow State University",
    companyLink: "",
    description: "Research on algorithms for efficiency - how additional factors could affect the subsequent classification and regression data. Scraped data from website.",
    tags: [
      "Python", "Scikit-lear", "Linux"
    ]
  },
  {
    startDate: '06/2020',
    endDate: '09/2020',
    position: 'Frontend Developer',
    keyword: ['Web Developer', 'Fronted Developer'],
    company: "Blacksoft",
    companyLink: "",
    description: "Refactored, optimized project components, in particular rendering of large data tables. Created a chat from scratch for communication. " +
      "Between the foreman, warehouse, supplier, administrator, owner and others.",
    tags: [
      "Nuxt.js", "Vuex", "Gantt chart"
    ]
  },
  {
    startDate: '08/2018',
    endDate: '12/2018',
    position: 'Frontend Developer',
    keyword: ['Web Developer', 'Fronted Developer'],
    company: "LLC Site Labs",
    companyLink: "https://datasite.uz/",
    description: "Developed the logic of data validation, worked with charts, internationalization for a leading working capital financing platform. " +
      "Implemented view pdf files directly in the web application interface. Worked with Marzipano.js for corporate parties / parties application and other events for receiving photos in 360 degree format.",
    tags: [
      "Vue.js", "Chart.js", "internationalization", "Vuex"
    ]
  },
  {
    startDate: '02/2018',
    endDate: '07/2018',
    position: 'Full stack Developer',
    keyword: ['Web Developer', 'Fronted Developer', "Full stack"],
    company: "Instinct trade",
    companyLink: "",
    description: "Developed an application with interactive windows - chat, downloading and viewing files, notebook, audio broadcasting, economic calendar, notifications for Financial coordination platform for training and communication between members.",
    tags: [
      "Vue.js", "Laravel"
    ]
  }
]
const projects = []
const scientificPublications = []

export default {
  fullName: 'Yaromir Kobikov',
  position: 'Web Developer | Data Scientist',
  subDescription: 'I build Web application using advanced technologies aimed at achieving the best results in the UI/UX according to the requirements of clients and users using these applications. And in machine learning which helps to create applications aimed to work without server-side computational technologies and not only... ',
  socialLinks: [
    { name: 'github', link: 'https://github.com/YaromirKo' },
    { name: 'linkedin', link: 'https://www.linkedin.com/in/yaromir-ko' },
    { name: 'kaggle', link: 'https://www.kaggle.com/ronanndex' }
  ],
  pages: {
    about,
    experience,
    projects,
    'scientific-publications': scientificPublications,
  }
}