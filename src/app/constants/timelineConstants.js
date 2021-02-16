import TeslaLogoFirst from 'Images/tesla-first.png';
import TeslaLogoRest from 'Images/tesla-rest.svg';

import IBIFirst from 'Images/ibi-first.jpg';
import IBIRest from 'Images/ibi-rest.png';

import IBMLogoFirst from 'Images/ibm-first.png';
import IBMLogoRest from 'Images/IBM-rest.png';

import shawLogoFirst from 'Images/shaw-first.png';
import shawLogoRest from 'Images/shaw-logo-rest.png';

import RCAFLogoFirst from 'Images/RCAF-first.png';
import RCAFLogoRest from 'Images/RCAF-rest.png';

import MosaicFirst from 'Images/mosaic-first.png';
import MosaicRest from 'Images/mosaic-rest.png';


import TeslaBackgroundImage from 'Images/background/tesla.jpg';
import TeslaBackgroundImage2 from 'Images/background/tesla2.jpg';
import IBIBackgroundImage from 'Images/background/newyork.jpg';
import IBMBackgroundImage from 'Images/background/ibm.jpg';
import shawbackgroundImage from 'Images/background/shaw-background.jpg';
import RCAFbackgroundImage from 'Images/background/airforce.jpg';
import MosaicbackgroundImage from 'Images/background/toronto.jpg';

export const timelineListValue = [
  {
    id: 'Tesla1',
    companyName: 'Tesla',
    link: 'https://www.Tesla.com/',
    position: 'Technical Program Manager',
    duration: 'May 2020 - August 2020',
    location: 'Remote(Palo Alto)',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Nykaa is an e-commerce website offering beauty and wellness products from more than 500 leading brands. Nykaa follows an inventory-based model with warehouses in Mumbai, New Delhi, and Chennai as its offline presence is in 60 stores and expanding. It claims to have over 1000+ curated brands and 85,000 products.',
    firstLogo: TeslaLogoFirst,
    restLogo: TeslaLogoRest,
    restMargin: 34, // the secound image margin because logo length is different
    backgroundImage: TeslaBackgroundImage,
    projects: ['Tesla1']
  },
  {
    id: 'Tesla2',
    companyName: 'Tesla',
    link: 'https://www.Tesla.com/',
    position: 'Product Manager',
    duration: 'January 2020 - April 2020',
    location: 'Remote(Palo Alto)',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Nykaa is an e-commerce website offering beauty and wellness products from more than 500 leading brands. Nykaa follows an inventory-based model with warehouses in Mumbai, New Delhi, and Chennai as its offline presence is in 60 stores and expanding. It claims to have over 1000+ curated brands and 85,000 products.',
    firstLogo: TeslaLogoFirst,
    restLogo: TeslaLogoRest,
    restMargin: 34, // the secound image margin because logo length is different
    backgroundImage: TeslaBackgroundImage2,
    projects: ['Tesla2']
  },
  {
    id: 'InformationBuilders',
    companyName: 'Information Builders',
    link: 'https://www.ibi.com/',
    position: 'Product Manager, Cloud',
    duration: 'September 2019 - December 2019',
    location: 'New York',
    roleDetail: 'In TailoredTech I got to experience many roles. I was initially working as an Android developer for a year then jumped on to these tech stacks :- Laravel, React-Native and React.',
    companyDetail: 'Tailored Tech was a service based startup specialised in web and mobile development, and had clients like Nykaa, Ezone, Sportobuddy, healthcode, hippily, wok express, etc.<br /> TailoredTech later got acqui-hired by Nykaa.',
    firstLogo: IBIFirst,
    restLogo: IBIRest,
    restMargin: 34,
    backgroundImage: IBIBackgroundImage,
    projects: ['snapteam', 'pulse', 'measure', 'wakency', 'benefactory', 'lighthouse']
  },
  {
    id: 'IBM',
    companyName: 'IBM',
    position: 'Cognitve Software Developer, Analytics',
    duration: 'January 2019 - April 2019',
    location: 'Calgary',
    roleDetail: '',
    companyDetail: '',
    firstLogo: IBMLogoFirst,
    restLogo: IBMLogoRest,
    restMargin: 37,
    backgroundImage: IBMBackgroundImage,
    projects: ['vc_music_player']
  },
   {
    id: 'Shaw',
    companyName: 'Shaw',
    position: 'Solutions Architect',
    duration: 'May 2018 - August 2018',
    location: 'Calgary',
    roleDetail: '',
    companyDetail: '',
    firstLogo: shawLogoFirst,
    restLogo: shawLogoRest,
    restMargin: 37,
    backgroundImage: shawbackgroundImage,
    projects: ['vc_music_player']
  },
    {
    id: 'RCAF',
    companyName: 'Royal Canadian Air Force',
    position: 'Solutions Developer',
    duration: 'September 2017 - December 2017',
    location: 'Waterloo',
    roleDetail: '',
    companyDetail: '',
    firstLogo: RCAFLogoFirst,
    restLogo: RCAFLogoRest,
    restMargin: 50,
    backgroundImage: RCAFbackgroundImage,
    projects: ['vc_music_player']
  },
    {
    id: 'Mosaic',
    companyName: 'Mosaic Sales Solutions',
    position: 'Enteprise Developer',
    duration: 'Jan 2017 - April 2017',
    location: 'Toronto',
    roleDetail: '',
    companyDetail: '',
    firstLogo: MosaicFirst,
    restLogo: MosaicRest,
    restMargin: 40,
    backgroundImage: MosaicbackgroundImage,
    projects: ['vc_music_player']
  }
];

