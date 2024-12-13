import {type TimeLineData } from "@ui/TimeLine/time-line.interface";

export const mockExperience: TimeLineData[] = [
  {
    title: 'Software Developer',
    subTitle: { title: 'NO COUNTRY - Enlace', url: 'https://www.nocountry.tech/simulacion-laboral'},
    date: 'May 2024 - Nov 2024',
    extraDetails: [
      {
        title: 'BarberHub ',
        description: 'Simulación Laboral Tech donde creamos aplicaciones web desde cero en equipos interdisciplinarios. Como Desarrollador de Software, me permite colaborar en la elección del proyecto, la planificación y creacion del mismo.',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7208504650159816704/'
      }
      
    ],
  },
  {
    title: 'Software Developer',
    subTitle: { title: 'HENRY - Enlace', url: 'https://www.soyhenry.com/'},
    date: 'Abr 2023 - Sep 2023',
    extraDetails: [
      {
        description: 'Bootcamp de Programación donde adquirí experiencia trabajando full time con compañeros en equipo gracias al Pair Programming. Este espacio imita un entorno de trabajo real y se realiza de manera remota utilizando herramientas colaborativas como Slack, Zoom, Meet, Notion y Discord.'
      }
    ],
  }
]
