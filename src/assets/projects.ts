export interface Projects {
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Projects[] =[
  {
    name: 'Ortiz Metals',
    description: 'Vue 3 site for a metal artist.', 
    link: 'https://ortizmetals.com/',
    image: 'rso.png'
  },
  {
    name: 'Bothsides Construction',
    description: 'Wordpress site.', 
    link:'https://www.bothsidesconstruction.com/',
    image: 'bsc.png'
  },
  {
    name: 'Eugene Sculpture Group',
    description: 'Vue 2 site for sculpters.', 
    link: 'https://eugenesculpturegroup.com/',
    image: 'esg.png'
  },
  {
    name: 'Outbound Props',
    description: 'Vue 3 site for housing projects.', 
    link: 'https://main.d26l5gtfztyujz.amplifyapp.com/',
    image: 'ob.png'
  },
  {
    name: 'GRHIIT',
    description: 'Fitness App : Fullstack React / WIP', 
    link: 'https://main.d2sl89tjawpj77.amplifyapp.com/',
    image: 'grhiit.png'
  },
  // {
  //   name: 'VTell',
  //   description: 'Vue 2 site for MVNO integration.', 
  //   link: 'place.jpg',
  //   image: 'vtell.png'
  // },
  // {
  //   name: 'Trepyx',
  //   description: 'Vue 2 site for MVNO integration.', 
  //   link: 'place.jpg',
  //   image: 'trepyx.png'
  // },
  // {
  //   name: 'Crowdify',
  //   description: 'Vue 3 site for crowdsourcing entertainment options.', 
  //   link: 'place.jpg',
  //   image: 'crowd.png'
  // },
  // {
  //   name: 'AMC',
  //   description: 'Vue 3 site for crowdsourcing entertainment options.', 
  //   link: 'place.jpg',
  //   image: 'place.png'
  // },
]

export default projects

