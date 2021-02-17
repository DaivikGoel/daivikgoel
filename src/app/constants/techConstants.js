import TADIcon from 'Icons/technology/TAD-icon.png';
import UWIcon from 'Icons/technology/UW-Icon.png';
import YoutubeIcon from 'Icons/technology/YouTube.png';
import codeIcon from 'Icons/technology/code.svg';
import mediumIcon from 'Icons/technology/mediumicon.png';
import thinkerIcon from 'Icons/technology/thinker.png';

import TADBackgroundImage from 'Images/technology/TAD-background.jpg';
import UWVoiceBackgroundImage from 'Images/technology/UWVoice.jpg';
import mediumBackgroundImage from 'Images/technology/medium.jpg';
import YoutubeBackgroundImage from 'Images/technology/Me1.jpg';
import hackBackgroundImage from 'Images/technology/hack.jpg';

export const techList = [
  {
    id: 'TAD',
    name: 'The Almost Dropouts',
    firstLogo: TADIcon,
    backgroundImage: TADBackgroundImage,
    description: `I have the most as well as recent experience in React compared to other technology in my list. I have created and architected web projects from scratch as well as jumped on ongoing projects.
    <br/><br/>I am familiar with recent techniques and libraries used in react like code-splitting, Hooks, React-Router, Final-Form, Redux, Redux-api-middleware, css in js, etc.`,
    projects: ['snapteam', 'Tesla1', 'wakency'],
  },
  {
    id: 'hackathons',
    name: 'Hackathons',
    firstLogo: codeIcon,
    backgroundImage: hackBackgroundImage,
    description: 'I have experience in creating an electron app with the help of React while also considering platform specific technicalities during development like, Desktop/Web notifications, screen routing, storage.<br/><br/>Written configurations to bundle Web app and Electron app seperatly for both.',
    projects: ['snapteam']
  },
    {
    id: 'Youtube',
    name: 'Youtube',
    firstLogo: YoutubeIcon,
    backgroundImage: YoutubeBackgroundImage,
    description: `I have a bit of experience in Laravel and backend development although have not created any project from scratch but have worked on seperate modules and features.<br/><br/>
    I am familiar with backend development and the frameworks features like: MVC architecture, HTML template engine (blade), Eloquent ORM, Artisan and Seeders.`,
    projects: ['benefactory', 'snapteam']
  },
  {
    id: 'uWVoice',
    name: 'uWaterloo Voice',
    firstLogo: UWIcon,
    backgroundImage: UWVoiceBackgroundImage,
    description: `I have created and published a React-Native app for iOS and Android so i am familiar with its lifecycle, while working with React-Native CLI.<br/><br/>
    I have contributed some bug fixes to some open source React-Native libraries during my period developing on react native.
    `,
    projects: ['lighthouse', 'pulse']
  },

    {
    id: 'medium',
    name: 'Product Articles',
    firstLogo: mediumIcon,
    backgroundImage: mediumBackgroundImage, //but recently have not touched on Android development so have to freshen up a bit on it.
    description: `I started my development journey with Android and have the most experience in it along with React.<br/><br/>
    I have complete lifecycle experience on Android app developement from creating to publishing and managing, and have experience with needed android libraries which includes: Retrofit, Dagger, Picasso, ActiveAndroid, etc.`,
    projects: ['vc_music_player', 'measure']
  },
  {
    id: 'outsourcedthinker',
    name: 'Poetry/Philosphy',
    firstLogo: thinkerIcon,
    backgroundImage: mediumBackgroundImage, //but recently have not touched on Android development so have to freshen up a bit on it.
    description: `I started my development journey with Android and have the most experience in it along with React.<br/><br/>
    I have complete lifecycle experience on Android app developement from creating to publishing and managing, and have experience with needed android libraries which includes: Retrofit, Dagger, Picasso, ActiveAndroid, etc.`,
    projects: ['vc_music_player', 'measure']
  }
];
