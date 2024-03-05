interface Projects {
  name: string;
  description: string;
  link: string;
}

const projects: Projects[] =[
  // {
  //   name: 'Bothsides Construction',
  //   description: 'Wordpress site for a construction company.', 
  //   link: '/assets/images/bsc.jpg'
  // },
  // {
  //   name: 'Ortiz Metals',
  //   description: 'Vue 2 site for a local metal artist.', 
  //   link: '/assets/images/ortiz.jpg'
  // },
  {
    name: 'Eugene Sculpture Group',
    description: 'Vue 2 site for local sculpters.', 
    link: 'place.jpg'
  },
  {
    name: 'VTell',
    description: 'Vue 2 site for MVNO integration.', 
    link: 'place.jpg'
  },
  {
    name: 'Crowdify',
    description: 'Vue 3 site for crowdsourcing entertainment options.', 
    link: 'place.jpg'
  }
]

export default projects

