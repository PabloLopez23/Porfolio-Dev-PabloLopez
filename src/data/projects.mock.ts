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
    skills: ["TypeScript","React","bootstrap","git", "Api", "Node.js"],
    urlImage: '/public/img2.png', 
    urlRepository: 'https://github.com/PabloLopez23/Best-Movie-Trailers',
    urlDeploy: 'https://moonlit-syrniki-83ced5.netlify.app/'
  },
  {
    title: 'BARBERHUB',
    description: 'En colaboración con compañeros de todo el mundo, participé en el desarrollo de una aplicación Web para una barbería. Nuestro objetivo fue crear una plataforma intuitiva y funcional que permitiera a los usuarios reservar citas, ver los servicios disponibles y obtener información sobre los barberos.',
    urlImage: '/public/img3.png', 
    skills: ["Node.js","TypeScript","React","Redux","TailwindCSS","MongoDB", "Clean Architecture"],
    urlRepository: 'https://github.com/Heba-WebDev/barbershop',
    urlDeploy: 'https://github.com/Heba-WebDev/barbershop',
  },
  {
    title: 'Todo List',
    urlImage: '/public/favicon.svg', 
    description: 'Gestor de tareas diarias diseñado para mejorar la eficiencia de los usuarios. Facilita la organización y priorización de actividades.',
    skills: ["React","TypeScript","TailwindCSS"],
    urlRepository: 'https://github.com/isakiDev/react-todo-ts',
    urlDeploy: 'https://isakidev-todo.netlify.app/',
  }
]
