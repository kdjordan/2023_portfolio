interface Job {
  employer: string;
  title: string; 
  brief: string;
  dates: string;
  highlights: string[];
}

const data: Job[] = [
  {
    employer: 'V-tell',
    title : 'VP Wholesale Services',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '2019-Present',
    highlights: ['Directed infrastruture selection resulting in 50% savings in monthly overhead.', 'Implemented tax reporting system that reduced staff hours by 25%', 'Coordinate projects between 3 International Teams', 'Redesigned carrier patnership program to increase active interconnects by 150%', 'Designed and developed customer payment portal.']
  },
  {
    employer: 'NW Straps',
    title : 'Owner / operator',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '2016-2018',
    highlights: ['Conceived and implemented business plan.', 'Created orignal branding and digital presence.', 'Designed initial product line.', 'Secured warehouse space, designed manufacturing area, led purchase of all maufacturing equipment : sublimation printers, webbing sublimators, sewing machines, raw materials, etc...', 'Built and refined sales strategies and funnels.', 'Took business from 0 to 1M gross revenue.']
  },
  {
    employer: '3Charm',
    title : 'Co - Founder / Primary Developer',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '2012-2015',
    highlights: ['Participated in the creation of the business from inception to running.', 'Built e-com website which produced 15k/mo.', 'Designed and maintained a streaming sales platform that genrated 2M/yr', 'Designed and directed a virtual trade show using streaming tech that produced 300k of sales in 4 days.']
  },
  {
    employer: 'Tabata Project',
    title : 'Tech Lead / Coach',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '2010-2012',
    highlights: ['Desinged and impemented original web presence.', 'Built, recorded, and maintained a catalog of mp3 workouts', 'Coached clients in the physical gym space.', 'Revenue increased by 300% during my tenure.']
  },
  {
    employer: 'Fired Glass Company',
    title : 'Owner / Operator',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '2000-2010',
    highlights: ['Built an artist co-op managing 25 individuals', 'Handled taxes, saftey codes, taxes, accounting, and daily operations.', 'Directed production and shipping logistics.']
  },
  {
    employer: 'Catalogfinder',
    title : 'Lead Developer',
    brief : 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    dates : '1998-2000',
    highlights: ['Responsible for hiring and managing a small enginering team.', 'Conceived, written, orchestrated, and guided a contracrts which resulted in 500k investment in the company.']
  },
  
  
  
  
  
]

export default data