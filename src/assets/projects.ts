interface Projects {
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Projects[] =[
  {
    name: 'Bothsides Construction',
    description: 'Wordpress site for a construction company.', 
    link:'https://www.bothsidesconstruction.com/',
    image: 'bsc.png'
  },
  {
    name: 'Ortiz Metals',
    description: 'Vue 3 site for a local metal artist.', 
    link: 'https://ortizmetals.com/',
    image: 'rso.png'
  },
  {
    name: 'Eugene Sculpture Group',
    description: 'Vue 2 site for local sculpters.', 
    link: 'https://eugenesculpturegroup.com/',
    image: 'esg.png'
  },
  {
    name: 'Outbound Props',
    description: 'Vue 3 site for housing projects.', 
    link: 'https://main.d26l5gtfztyujz.amplifyapp.com/',
    image: 'ob.png'
  },
  // {
  //   name: 'GRHIIT',
  //   description: 'Fullstack React', 
  //   link: 'place.jpg',
  //   image: 'vtell.png'
  // },
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

