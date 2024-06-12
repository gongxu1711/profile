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
  { name: 'Birthday', value: '17 November 2001' },
  { name: 'Website', value: 'https://www.linkedin.com/in/ncongtu/' },
  { name: 'Degree', value: 'University' },
  { name: 'City', value: 'Hanoi' },
  { name: 'Age', value: '23' },
  { name: 'Email', value: 'nguyencongtu57.it@gmail.com' },
  { name: 'Phone', value: '+84 347495431' },
  { name: 'English', value: '835 Toeic' },
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
    title: 'Data Ops',
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
    title: 'Business Intelligence Consultant',
    company_name: 'DrB Vietnam Finance Management Consultant Company',
    icon: jobufea,
    iconBg: '#FFFFFF',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Building, creating dashboard and report using Excel, Power BI from multiple data sources (Excel, SQL Server, Sharepoint, Web API, Google Analytics 4, Firebase, Google Cloud Big query...)',
      'Offering solutions for Business Intelligence (BI) systems.',
      'Research and developing Business Intelligence (BI) system',
      'Implementing and consulting BI report system for other company and help them spend less time making report (sales report, financial report, marketing report…).',
      'Collect data from multiple sources such as MISA, AMIS, AUGGES, KiotViet, FaceBook, YouTube,... and pull into Power BI',
      'Build automate BI flow with Power Automate',
    ],
  },
  {
    title: 'Power BI Developer',
    company_name: 'MB Ageas Life',
    icon: btcs,
    iconBg: '#FFFFFF',
    date: 'Jan 2023 - Jul 2023',
    points: [
      'Build automatic reports using power BI for administrative purposes such as human resources and outsourcing management.',
      'Develop descriptive analysis reports for budget & expenses management, IT Project Quality Management, Portfolio management...',
      'Centralize data from multiple source to sharepoint, ETL and build data model (Star Schema) in Power BI',
      'Use python to automatically get data from SAP system.',
    ],
  },
  {
    title: 'Data Engineer',
    company_name: 'VPBank - Enterprise Data & Analytics Divison',
    icon: nearhub,
    iconBg: '#FFFFFF',
    date: 'Jul 2023 - Currently',
    points: [
      'Analyze requirements from Business Unit, Risk, Fin to clarify requirements, Mapping data among layers of data warehouse.',
      'ETL data with IBM DataStage, DB2, Oracle, SQL Server, Trino, Apache Nifi...',
      'Deploying management reports of developing projects with Power BI',
      'Develop an ETL Process Using SQL to Store Data in SCD Types 0, 1, 2...',
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
  {
    name: 'IT Budget & Expense Dashboard',
    description:
      'A report serves to estimate budget and costs to take timely actions for overdue or over budget items.',
    tags: [
      {
        name: 'powerbi',
        color: 'yellow-text-gradient',
      },
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'saplogon',
        color: 'pink-text-gradient',
      },
    ],
    image: bookingapp,
    source_code_link: 'https://github.com/dylan751/booking-app-front-end',
    live_link: 'https://app.powerbi.com/view?r=eyJrIjoiNDNjZjQxZDAtNjlhYi00MjU2LWJkZGEtMGI5OTc3NGJiYTNiIiwidCI6IjdjNDllNjY0LTcxOGYtNDU1ZS04ZGZkLTA4YjcyMTFkMTA4ZCIsImMiOjEwfQ%3D%3D',
    source_code_enable: false,
    live_enable: true,
  },
  {
    name: 'Sales Analysis Dashboard',
    description:
      'Analytical dashboard describes the business situation at businesses with retail industries and and analyze dimensions further.',
    tags: [
      {
        name: 'powerbi',
        color: 'yellow-text-gradient',
      },
      {
        name: 'sqlsever',
        color: 'blue-text-gradient',
      },
      {
        name: 'sharepoint',
        color: 'green-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/dylan751',
    live_link: 'https://app.powerbi.com/view?r=eyJrIjoiOTk3MjBmYTctNTY0Ny00MTViLWE4OWQtY2Q0OGRhYTgwMmUwIiwidCI6IjdjNDllNjY0LTcxOGYtNDU1ZS04ZGZkLTA4YjcyMTFkMTA4ZCIsImMiOjEwfQ%3D%3D',
    source_code_enable: false,
    live_enable: true,
  },
  {
    name: 'Check-in Management Dashboard',
    description:
      'Dashboard with the purpose of managing check-in levels of personnel both internally and os to help ensure accuracy in human resource management.',
    tags: [
      {
        name: 'powerbi',
        color: 'yellow-text-gradient',
      },
      {
        name: 'mysql',
        color: 'blue-text-gradient',
      },
      {
        name: 'powerautomate',
        color: 'pink-text-gradient',
      },
    ],
    image: travelpage,
    source_code_link: 'https://github.com/dylan751/db-travel-page-project',
    live_link: 'https://app.powerbi.com/view?r=eyJrIjoiMjg0OGRkMjAtNGM3NS00MDk5LWJmZjgtYWZjYzMwNTE2YTg2IiwidCI6IjdjNDllNjY0LTcxOGYtNDU1ZS04ZGZkLTA4YjcyMTFkMTA4ZCIsImMiOjEwfQ%3D%3D',
    source_code_enable: false,
    live_enable: true,
  },
  {
    name: 'Automate Extract Data from SAP System',
    description:
      'Python scripts convert VBA scripts to python to build program auto extract data from SAP system.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'saplogon',
        color: 'green-text-gradient',
      },
      {
        name: 'vba',
        color: 'pink-text-gradient',
      },
    ],
    image: callcenter,
    source_code_link: 'https://github.com/gongxu1711/AutoExtractDataSAP',
    live_link: 'https://www.youtube.com/watch?v=UIOENw7VjYw&t=22s',
    source_code_enable: true,
    live_enable: true,
  },
  {
    name: 'Portfolio Management Dashboard',
    description:
      'Manage IT Project with details milestones and key deliverable with grantt chart and follow time series analysis',
    tags: [
      {
        name: 'powerbi',
        color: 'yellow-text-gradient',
      },
      {
        name: 'excel',
        color: 'green-text-gradient',
      },
      {
        name: 'sharepoint',
        color: 'blue-text-gradient',
      },
    ],
    image: nftmarketplace,
    source_code_link: 'https://github.com/dylan751/nearhub-marketplace',
    live_link: 'https://app.powerbi.com/view?r=eyJrIjoiMmZjMDk2MDAtZGY2Mi00MjgzLThiY2QtMTE4MjlhZWY5ZjAyIiwidCI6IjdjNDllNjY0LTcxOGYtNDU1ZS04ZGZkLTA4YjcyMTFkMTA4ZCIsImMiOjEwfQ%3D%3D',
    source_code_enable: false,
    live_enable: true,
  },
  {
    name: 'RPA Project Tracking Dashboard',
    description:
      'Dashboard for caculate cummulate FTEs and Mandays released by Robotic Process Automation',
    tags: [
      {
        name: 'powerbi',
        color: 'yellow-text-gradient',
      },
      {
        name: 'excel',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/dylan751/portfolio',
    live_link: 'https://app.powerbi.com/view?r=eyJrIjoiYmY5OTg2NjUtN2ZjMy00ZmIwLTliOGEtMDA1NDNmYzI2YTMxIiwidCI6IjdjNDllNjY0LTcxOGYtNDU1ZS04ZGZkLTA4YjcyMTFkMTA4ZCIsImMiOjEwfQ%3D%3D',
    source_code_enable: false,
    live_enable: true,
  },
];

export { services, technologies, experiences, testimonials, projects };
