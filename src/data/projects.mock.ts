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
    description: 'Aplicación Web de trailers de películas desarrollada con React, donde puedes explorar y consultar información de trailers de películas más actuales y populares. Utilizando la API externa de Themoviedb.',
    skills: ["TypeScript","React","bootstrap","git","Axios", "Api", "Node.js"],
    urlImage: '/public/img2.png', 
    urlRepository: 'https://github.com/PabloLopez23/Best-Movie-Trailers',
    urlDeploy: 'https://moonlit-syrniki-83ced5.netlify.app/'
  },
  {
    title: 'BARBERHUB',
    description: 'En colaboración con compañeros de todo el mundo, participé en el desarrollo de una aplicación Web para una barbería. Nuestro objetivo fue crear una plataforma intuitiva y funcional que permitiera a los usuarios reservar citas, ver los servicios disponibles y obtener información sobre los barberos.',
    urlImage: '/public/img3.png', 
    skills: ["Node.js","TypeScript","React","Redux","TailwindCSS",],
    urlRepository: 'https://github.com/Heba-WebDev/barbershop',
    urlDeploy: 'https://github.com/Heba-WebDev/barbershop',
  },
  {
    title: 'SEARCHER GITHUB',
    urlImage: '/public/46.jpeg',
    description: 'Aplicacion realizada con React, es un buscador de usuarios de GitHub y muestra la informacion mas relevante como cantidad de Repositorios, Seguidores, etc.',
    skills: ["React","TypeScript","CSS","Axios","Api",],
    urlRepository: 'https://github.com/PabloLopez23/Searcher_GitHub',
    urlDeploy: 'https://searcher-git-hub.vercel.app/',
  }
]
