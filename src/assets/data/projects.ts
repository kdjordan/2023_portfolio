export type Projects = {
  name: string;
  description: string;
  link: string;
  image: string;
  techs: string[];
  github: string | null;
  notes?: string
}

const projects: Projects[] = [
  {
    name: 'Ortiz Metals',
    description: 'Metal artist portfolio.',
    link: 'https://ortizmetals.com/',
    image: 'rso.png',
    techs: ['Vue 3', 'GSAP', 'SVG', 'SCSS'],
    github: 'https://github.com/kdjordan/ortiz_v2',
    notes: "client site"
  },
  {
    name: 'Bothsides Construction',
    description: 'Builder site.',
    link: 'https://www.bothsidesconstruction.com/',
    image: 'bsc.png',
    techs: ['Wordpress', 'Adobe'],
    github: null,
    notes: "client site"
  },
  {
    name: 'Eugene Sculpture Group',
    description: 'Artist Collective.',
    link: 'https://eugenesculpturegroup.com/',
    image: 'esg.png',
    techs: ['Vue 2', 'Adobe', 'SCSS'],
    github: 'https://github.com/kdjordan/esgroup',
    notes: "client site"
  },
  {
    name: 'Outbound Props',
    description: 'Housing Development.',
    link: 'https://main.d26l5gtfztyujz.amplifyapp.com/',
    image: 'ob.png',
    techs: ['Vue 3', 'Tailwind'],
    github: 'https://github.com/kdjordan/outboundProps',
    notes: "client site"
  },
  {
    name: 'GRHIIT',
    description: 'Fitness App',
    link: 'https://main.d2sl89tjawpj77.amplifyapp.com/',
    image: 'grhiit.png',
    techs: ['React', 'Tailwind', 'Node', 'Postgres', 'Framer'],
    github: 'https://github.com/kdjordan/grhiit',
    notes: "work in progress"
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

