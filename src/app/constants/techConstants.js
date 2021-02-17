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
import thinkerBackgroundImage from 'Images/technology/Thinking.jpg';

export const techList = [
  {
    id: 'TAD',
    name: 'The Almost Dropouts',
    firstLogo: TADIcon,
    backgroundImage: TADBackgroundImage,
    description: `I created the Almost Dropouts, a student-led podcast, where I discuss a wide variety of things from my experiences in Engineering to exciting new updates in the tech industry! Check out an episode!`,
    projects: ['anchor', 'spotify', 'apple', 'google'],
  },
  {
    id: 'hackathons',
    name: 'Hackathons',
    firstLogo: codeIcon,
    backgroundImage: hackBackgroundImage,
    description: "I have really enjoyed doing hackathons as it tests out your product building skills in a condensed duration. It has worked out pretty well and you can check out my projects above!",
    projects: ['HTN', 'CHacks', 'StudentPathways']
  },
    {
    id: 'Youtube',
    name: 'Youtube',
    firstLogo: YoutubeIcon,
    backgroundImage: YoutubeBackgroundImage,
    description: `I recently started creating Youtube Videos to discuss some lessons I have learnt across the way during my time in University and to talk about tech that excites me! Check out a video!`,
    projects: ['Youtube']
  },
  {
    id: 'uWVoice',
    name: 'uWaterloo Voice',
    firstLogo: UWIcon,
    backgroundImage: UWVoiceBackgroundImage,
    description: `uWaterloo Voice is an unofficial student run publication aiming to showcase articles created by University of Waterloo students. These articles can be of any topic and anybody from the University of Waterloo is able to write for this publication.
    `,
    projects: ['uWVMedium', 'uWInstagram', 'uWTwitter', 'uWFacebook']
  },

    {
    id: 'medium',
    name: 'Product Articles',
    firstLogo: mediumIcon,
    backgroundImage: mediumBackgroundImage, //but recently have not touched on Android development so have to freshen up a bit on it.
    description: `An an avid tech enthusiast, I love to observe different changes throughout the tech industry and think about the potential impact these might have! You can check out some of my obersavations on my Medium or Linkedin!`,
    projects: ['medium', 'linkedin']
  },
  {
    id: 'outsourcedthinker',
    name: 'Poetry/Philosphy',
    firstLogo: thinkerIcon,
    backgroundImage: thinkerBackgroundImage, //but recently have not touched on Android development so have to freshen up a bit on it.
    description: `I recently started writing poetry and my thoughts about life. You can check out some of those thoughts above!`,
    projects: ['outInstagram', 'outmedium']
  }
];
