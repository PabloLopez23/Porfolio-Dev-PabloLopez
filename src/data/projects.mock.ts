export interface Project {
  title: string;
  date?: string;
  description: string;
  skills: string[];
  urlImage: string;
  urlRepository?: string;
  urlDeploy: string;
}

export const mockProjects: Project[] = [
  {
    title: 'BEST MOVIE TRAILERS',
    description: 'Aplicación web de tráilers de películas desarrollada con React, que permite explorar y consultar información sobre los tráilers más recientes y populares. Utiliza la API externa de The Movie DB (TMDb).',
    skills: ["TypeScript","React","bootstrap","git","Axios", "Api", "Node.js","Responsive Web Design"],
    urlImage: 'https://res.cloudinary.com/dxakaoudm/image/upload/v1732389918/img1_deiska.jpg', 
    urlRepository: 'https://github.com/PabloLopez23/Best-Movie-Trailers',
    urlDeploy: 'https://pablolopezmovies.netlify.app/'
  },
  {
    title: 'SEARCHER GITHUB',
    urlImage: 'https://res.cloudinary.com/dxakaoudm/image/upload/v1732390061/img3_k0t9sc.jpg',
    description: 'Aplicación desarrollada con React que funciona como buscador de usuarios de GitHub, mostrando información relevante como número de repositorios, seguidores y más.',
    skills: ["React","TypeScript","CSS","Axios","Api","Responsive Web Design"],
    urlRepository: 'https://github.com/PabloLopez23/Searcher_GitHub',
    urlDeploy: 'https://searcher-git-hub.vercel.app/',
  },
  {
    title: 'PORFOLIO DEV',
    urlImage: 'https://res.cloudinary.com/dxakaoudm/image/upload/v1732390073/img4_femr3y.jpg',
    description: 'Portafolio personal desarrollado con Astro, JavaScript, TypeScript y TailwindCSS. La aplicación es completamente responsive e incluye una sección de proyectos con descripciones detalladas y enlaces relevantes.',
    skills: ["Astro","Javascript","TypeScript","TailwindCSS","Axios","Node.js","Responsive Web Design"],
    urlRepository: 'https://github.com/PabloLopez23/Porfolio-Dev-PabloLopez',
    urlDeploy: 'https://pablolopezporfolio.netlify.app/',
  },
  {
    title: 'BARBERHUB',
    description: 'En colaboración con un equipo internacional, participé en el desarrollo de una aplicación web para barbería. Nuestro objetivo fue crear una plataforma intuitiva y funcional que permitiera a los usuarios reservar citas, consultar servicios disponibles y obtener información sobre los barberos.',
    urlImage: 'https://res.cloudinary.com/dxakaoudm/image/upload/v1732390027/img2_ghgatr.jpg', 
    skills: ["Node.js","TypeScript","React","Redux","TailwindCSS","Responsive Web Design"],
    urlRepository: 'https://github.com/Heba-WebDev/barbershop',
    urlDeploy: 'https://drive.google.com/file/d/1H1S3dTU0ZS_Fl6zovThnI_87PoGG_NbX/view?usp=sharing',
  },
]
