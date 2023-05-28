import Experience from "@/stores/experience";
import Projects from "@/stores/projects";
import Publications from "@/stores/publications";

const about = ''

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
    experience: Experience,
    projects: Projects,
    'scientific-publications': Publications,
  }
}
