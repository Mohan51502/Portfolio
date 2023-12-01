import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpg';
  import Work2 from './assets/project-2.jpeg';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project-5.jpeg';
  import Work9 from './assets/project-6.jpg';
    import Work7 from './assets/project-7.jpg';
    import Work8 from './assets/nationalizeapi.webp';
    import Work10 from './assets/restcountries.png';
    import Work11 from './assets/crudimage.webp';
    import Work12 from './assets/shoppingapp.jpg';
    import Work13 from './assets/tirukural.png';
    import Work14 from './assets/zenclass.jpg';
    import Work15 from './assets/expenses.jpg';
    import Work16 from './assets/chat.webp';
    import Work17 from './assets/spotifyapp.png';
    import Work18 from './assets/chatappp.jpg';
    import Work19 from './assets/spotifyapps.webp';
    import Work20 from './assets/notes_image.jpeg';












  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
  
    {
      id: 3,
      name: 'Projects',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/portfolio',
    },
  
    {
      id: 4,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Mohanraj',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Venkatachalam',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '23 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
   
  
    {
      id: 6,
      title: 'Location : ',
      description: 'Coimbatore',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+91-9080930652',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'rajmohan51502@mail.com',
    },
  
  
  
    {
      id: 10,
      title: 'Languages : ',
      description: 'English, Tamil',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: 'Fresher',
      title: 'Looking for great  <br /> Opportunity',
    },
    {
      id: 4,
      no: '2+',
      title: ' Years Experience in <br /> Nss',
    },
  ];
  export const certificate = [
    {
      id: 1,
      category: 'certificate',
      icon: <FaGraduationCap />,
      year: ' 2023 ',
      title: 'Full Stack Development <span> Guvi</span>',
      desc: '',
      certificatelink : 'https://www.guvi.in/verify-certificate?id=17Dt935g5V91Bo886l',

    },
    {
      id: 2,
      category: 'certificate',
      icon: <FaGraduationCap />,
      year: ' 2023 ',
      title: 'Data Structure <span> Guvi</span>',
      desc: '',
      certificatelink : 'https://www.guvi.in/verify-certificate?id=7961gW59e15S3XvC81',
    },
    {
      id: 3,
      category: 'certificate',
      icon: <FaGraduationCap />,
      year: ' 2023 ',
      title: 'AWS <span> Guvi</span>',
      desc: '',
      certificatelink : 'https://www.guvi.in/verify-certificate?id=a6G5cb11ps93978v5t',
    },
  
  
  
    
  ];
  
  export const resume = [
   
   

   
    {
      id: 7,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2017 -  2021',
      title: 'BE  <span> Dr.Mahalingam College of Engineering and Technology </span>',
      desc: 'Scored 83%',
    },
    {
      id: 8,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2016-2017',
      title: 'HSC <span> Oxford Matric Higher Secondary School </span>',
      desc: 'Scored 85% ',
    },
  
    {
      id: 9,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2014-2015',
      title: 'SSLC <span> Oxford Matric Higher Secondary School </span>',
      desc: 'Scored 91.6% ',
    },
  ];
  
  export const skills = [
    {
      id: 1,
      title: 'HTML',
      percentage: '85',
    },
    {
      id: 2,
      title: 'CSS',
      percentage: '80',
    },
    {
      id: 3,
      title: 'JavaScript',
      percentage: '75',
    },
    {
      id: 4,
      title: 'React',
      percentage: '75',
    },
  
    {
      id: 5,
      title: 'Bootstrap',
      percentage: '70',
    },
 
    {
      id: 7,
      title: 'NodeJs',
      percentage: '75',
    },
    {
      id: 8,
      title: 'ExpressJs',
      percentage: '85',
    },
    {
      id: 9,
      title: 'MongoDB',
      percentage: '85',
    },
    {
      id: 13,
      title: 'AWS',
      percentage: '70',
    },
    {
      id: 11,
      title: 'Git',
      percentage: '80',
    },
    {
      id: 10,
      title: 'MySql',
      percentage: '60',
    },
  
  ];
  
  export const portfolio = [
    {
      id: 1,
      img: Work20,
      title: 'Notes App  ',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: ' Make a Notes and lead a better Life',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' React js, Node js,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Frontend : ',
          desc: 'https://github.com/Mohan51502/Notes_frontend.git',
          
        },
        {
          icon: <FiExternalLink />,
          title: 'Backend : ',
          desc: 'https://github.com/Mohan51502/Notes_backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://glittering-fairy-e558b7.netlify.app/',
        },
     
  
      ],
    },
  
    {
      id: 2,
      img: Work11,
      title: 'Crud App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: 'Add ,Update or Delete User from DB',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' React js, Node js,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Frontend : ',
          desc: 'https://github.com/Mohan51502/crud-frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Backend : ',
          desc: 'https://github.com/Mohan51502/crud-backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://dynamic-kataifi-96cdf0.netlify.app/',
        },
      
  
      ],
    },
    {
      id: 3,
      img: Work15,
      title: 'Cash-Manager',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'Calculate your expense annd income',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React JS, Node js ,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Frontend : ',
          desc: 'https://github.com/Mohan51502/expanse-frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Backend : ',
          desc: 'https://github.com/Mohan51502/expanse-backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://soft-daifuku-49e886.netlify.app',
        },
       
      ],
    },
    {
      id: 4,
      img: Work18,
      title: 'Chat App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'Chat with friends who are present in Our DB',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React JS, Node js ,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Frontend : ',
          desc: 'https://github.com/Mohan51502/chat-app-frontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Backend : ',
          desc: 'https://github.com/Mohan51502/chat-app-backend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://lambent-gelato-d12eb5.netlify.app',
        },
       
      ],
    },
    {
      id: 5,
      img: Work14,
      title: 'Zen Class Query Ticketing System',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'This App can Solve the Doubts for Students by raising the Query and it will be solved by mentor',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React JS, Node js ,Mongodb',
        },
        {
          icon: <FiExternalLink />,
          title: 'Frontend : ',
          desc: 'https://github.com/Mohan51502/capstonefrontend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Backend : ',
          desc: 'https://github.com/Mohan51502/Capstonebackend.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://tranquil-profiterole-c07f73.netlify.app/',
        },
      
      ],
    },
    
     
   
    {
      id: 6,
      img: Work8,
      title: 'Nationalize API',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: 'Enter your name and see the probability',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'HTML, CSS ,javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/Mohan51502/webcode1.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://boisterous-cannoli-3f1494.netlify.app/',
        },
       
      ],
    },
    
  
  
    
    {
      id: 7,
      img: Work10,
      title: 'Rest Countries',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description: ',
          desc: 'It will fetch the API and display flags and countries',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: ' Html,CSS,Javascript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/Mohan51502/day18.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://deluxe-cajeta-a8d185.netlify.app/',
        },
       
  
      ],
    },
    
    
    {
      id: 8,
      img: Work13,
      title: 'Tirukural App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: ' Fetch the API and display Tirukural',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'HTML, CSS, JavaScript',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/Mohan51502/Tirukural.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://melodious-pika-1f44af.netlify.app/',
        },
       
      ],
    },
    {
      id: 9,
      img: Work12,
      title: 'Shopping App',
      details: [
        {
          icon: <FiFileText />,
          title: 'Description : ',
          desc: ' Simple Shopping App, You can view the price of the book and add to cart',
        },
        {
          icon: <FaCode />,
          title: 'Tech Used : ',
          desc: 'React js',
        },
        {
          icon: <FiExternalLink />,
          title: 'Code : ',
          desc: 'https://github.com/Mohan51502/day24.git',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'https://gilded-bubblegum-639a7c.netlify.app/',
        },
     
      ],
    },
    
    

  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];