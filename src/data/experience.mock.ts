import {type TimeLineData } from "@ui/TimeLine/time-line.interface";

export const mockExperience: TimeLineData[] = [
  {
    title: 'Desarrollador de Software',
    subTitle: { title: 'NO COUNTRY - Enlace', url: 'https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all'},
    date: '2024',
    extraDetails: [
      {
        title: 'BarberShop ',
        description: 'Simulación laboral tech con equipo multidisciplinario y trabajo remoto. Participé en el desarrollo de una aplicación web para gestión de turnos y servicios de barbería, colaborando en frontend, integración con backend, consumo de APIs y organización del flujo de reservas.',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7208504650159816704/'
      }
      
    ],
  },
  {
    title: 'Desarrollador de Software',
    subTitle: { title: 'HENRY - Enlace', url: 'https://www.linkedin.com/school/henryok/posts/?feedView=all'},
    date: '2023',
    extraDetails: [
      {
        description: 'Bootcamp de Programación en el que adquirí experiencia trabajando a tiempo completo en equipo mediante Pair Programming. Este espacio simula un entorno laboral real y se lleva a cabo de forma remota utilizando herramientas colaborativas como Slack, Zoom, Meet, Notion y Discord.'
      }
    ],
  }
]
