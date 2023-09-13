import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  jobufea,
  nearhub,
  btcs,
  bookingapp,
  jobit,
  callcenter,
  travelpage,
  nftmarketplace,
  portfolio,
  threejs,
  hien,
  long,
  quang,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const basicInfo = [
  { name: 'Birthday', value: '17 December 2001' },
  { name: 'Website', value: 'https://www.linkedin.com/in/ncongtu/' },
  { name: 'Degree', value: 'University' },
  { name: 'City', value: 'Hanoi' },
  { name: 'Age', value: '22' },
  { name: 'Email', value: 'nguyencongtu57.it@gmail.com' },
  { name: 'Phone', value: '+84 347495431' },
  { name: 'Job', value: 'Data Management Collaborator' },
];

export const skillProgressBar = [
  { name: 'SQL', percentage: '70' },
  { name: 'Power BI/Looker studio', percentage: '70' },
  { name: 'Python', percentage: '40' },
  { name: 'AWS', percentage: '30' },
];

const services = [
  {
    title: 'Data Analyst',
    icon: web,
  },
  {
    title: 'Data Engineer',
    icon: mobile,
  },
  {
    title: 'Data Management',
    icon: backend,
  },
  {
    title: 'Data Design',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Implementation Techniques Intern',
    company_name: 'Bravo Software Join Stock Company',
    icon: jobufea,
    iconBg: '#383E56',
    date: 'Dec 2022 - Apr 2023',
    points: [
      'Using SQL to create functional and procedural.',
      'Offering solutions for Business Intelligence (BI) systems.',
      'Building, creating dashboard and report using Excel, Power BI, Looker Studio from multiple data sources (Excel, Google Analytics 4, Firebase, Google Cloud Big query...).',
      'Collaborate with Dev team to name, define and attach events to software buttons to track users.',
    ],
  },
  {
    title: 'BI Developer Collaborator',
    company_name: 'MB Ageas Life - IT Governance',
    icon: btcs,
    iconBg: '#E6DEDD',
    date: 'Apr 2023 - Aug 2023',
    points: [
      'Build automatic reports using power BI for administrative purposes such as human resources and outsourcing management.',
      'Develop descriptive analysis reports for budget & expenses management, IT Project Quality Management, Portfolio management...',
      'Centralize data from multiple source to sharepoint, ETL and build data model (Star Schema) in Power BI',
      'Use python to automatically get data from SAP system.',
    ],
  },
  {
    title: 'Data Management Collaborator',
    company_name: 'VPBank - Enterprise Data & Analytics Divison',
    icon: nearhub,
    iconBg: '#383E56',
    date: 'Aug 2023 - Currently',
    points: [
      'Together with BA, analyze requirements from Business Unit to clarify requirements.',
      'High level System of Record (9 concepts IBM)',
      'Design data from Data source to System of record',
      'Mapping data from System of Record to Interface Concept, Inteface BU, Data Mart...',
    ],
  },
  /*
  {
    title: 'Blockchain Developer',
    company_name: 'Nearhub',
    icon: nearhub,
    iconBg: '#383E56',
    date: 'May 2022 - Oct 2022',
    points: [
      'Developing Smart Contract for the NFT Marketplace using NEAR - Rust SDK',
      'Bulding projects on Near Protocol Blockchain',
      'Participating in designing feature specifications for the NFT game',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      'Tu is really a smart guy with impressive technical and analytical skill have been demonstrated throughout all the time I worked with him.',
    name: 'Christopher Vu Nguyen',
    designation: 'Management Associate',
    company: 'Techcombank (TCB)',
    image: hien,
  },
  {
    testimonial:
      'I really appreciate Tu for his extremly hard-working and spirit when doing internship at my company',
    name: 'Thuy Trinh',
    designation: 'Information Technology Governance Manager',
    company: 'MB Ageas Life',
    image: long,
  },
  {
    testimonial:
      'Tu is a dedicated person who always willing to learn, practice and build. And he still has a long way ahead',
    name: 'Hoang Vy',
    designation: 'BA',
    company: 'MB Ageas Life',
    image: quang,
  },
];

const projects = [
  /*
  {
    name: 'Booking App',
    description:
      'Web-based platform that allows users to search and book hotels and manage booking history from various hotel providers, providing a convenient and efficient solution for travelling needs.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: bookingapp,
    source_code_link: 'https://github.com/dylan751/booking-app-front-end',
    live_link: 'https://booking-app-front-end.vercel.app/',
    source_code_enable: true,
    live_enable: true,
  },
  {
    name: 'Japanese Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs in Japan.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/dylan751',
    live_link: 'https://jobufea.com',
    source_code_enable: false,
    live_enable: true,
  },
  {
    name: 'Travel Page',
    description:
      'A comprehensive travel booking platform that allows users to book hotels, buy essential travelling products, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'Module scss',
        color: 'pink-text-gradient',
      },
    ],
    image: travelpage,
    source_code_link: 'https://github.com/dylan751/db-travel-page-project',
    live_link: 'https://db-travel-page-project.vercel.app/',
    source_code_enable: true,
    live_enable: false,
  },
  {
    name: 'Call Center',
    description:
      'Web-based platform that allows users to search and manage call history from various contact providers, providing a convenient and efficient solution for setup calling options.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: callcenter,
    source_code_link: 'https://github.com/dylan751/',
    live_link: 'https://ccp.ast-dev.ai-studio-work.net',
    source_code_enable: false,
    live_enable: false,
  },
  {
    name: 'Near NFT Marketplace',
    description:
      'The Blockchain Game Crowdfunding Platform integrated with NFT Marketplace built on NEAR Protocol Blockchain using Rust SDK and ReactJS',
    tags: [
      {
        name: 'near',
        color: 'blue-text-gradient',
      },
      {
        name: 'rust',
        color: 'green-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'pink-text-gradient',
      },
    ],
    image: nftmarketplace,
    source_code_link: 'https://github.com/dylan751/nearhub-marketplace',
    live_link: 'https://testnet.nearhub.io/',
    source_code_enable: true,
    live_enable: false,
  },
  {
    name: 'Personal Portfolio',
    description:
      'My Portfolio Website built with Vite and Three.js. It is where I show my background, skills, interests and share my projects to everyone',
    tags: [
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/dylan751/portfolio',
    live_link: 'https://portfolio-seven-ashen-81.vercel.app/',
    source_code_enable: true,
    live_enable: true,
  },
  */
];

export { services, technologies, experiences, testimonials, projects };
