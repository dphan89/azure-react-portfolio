import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import YouTubeIcon from '../components/Icon/YouTubeIcon';
import heroImage from '../images/header-background.webp';
// Commented out image imports because thumbnails are served from `public/images/thumbnails`
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// Commented out unused imports (kept for easy restore)
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Donald Phan | Self-employed Content Creator',
  description: 'Portfolio site for Donald Phan, a self-employed content creator based in Houston.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Donald Phan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Houston-based{' '}
        <strong className="text-stone-100">
          self-employed content creator and Computer Information Systems graduate
        </strong>{' '}
        with extensive experience in digital media and a growing foundation in programming, databases, and hardware and
        software troubleshooting.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1Ch-xiOrV7so0dsGMp5AVILF1wVuEv8Z1ZhTdRVSDF2A/edit?tab=t.0',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `mailto:dphan89@gmail.com`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a recent Computer Information Systems graduate and YouTube content creator with a strong background in
  digital media. My university coursework and projects gave me a foundation in programming, databases, and
  object-oriented design, including working with variables, methods, and basic application structure.`,
  aboutItems: [
    {label: 'Location', text: 'Houston, Texas, USA', Icon: MapIcon},
    {label: 'Focus', text: 'Content creation and audience growth', Icon: SparklesIcon},
    {label: 'Interests', text: 'Programming and technology', Icon: FlagIcon},
    {label: 'Strengths', text: 'Video editing and content strategy', Icon: CalendarIcon},
    {label: 'Study', text: 'Computer Information Systems', Icon: AcademicCapIcon},
    {label: 'Work', text: 'Self-employed content creator', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Vietnamese',
        level: 5,
      },
      {
        name: 'Zug Zug',
        level: 0,
      },
    ],
  },
  {
    name: 'Video and Image',
    skills: [
      {
        name: 'Adobe Premiere Pro',
        level: 6,
      },
      {
        name: 'DaVinci Resolve',
        level: 7,
      },
      {
        name: 'Adobe Photoshop',
        level: 5,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'C#',
        level: 4,
      },
      {
        name: 'Python',
        level: 3,
      },
    ],
  },
  {
    name: 'Software',
    skills: [
      {
        name: 'Visual Studio Code',
        level: 5,
      },
      {
        name: 'Microsoft Azure',
        level: 3,
      },
      {
        name: 'SQL',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Recent Youtube Example',
    description: 'Example of my more recent content.',
    url: 'https://www.youtube.com/watch?v=k90vw-dVsw4',
    image: '/images/thumbnails/PracticallyUnfair.png',
  },
  {
    title: 'Highest Reach',
    description: 'Example of my content with the highest reach, over half a million views.',
    url: 'https://www.youtube.com/watch?v=tJPi-PMTd9M&t=16s',
    image: '/images/thumbnails/HighestReach.png',
  },
  {
    title: 'Spotify Artist Page',
    description: 'Music covers with over 2 million streams on Spotify.',
    url: 'https://open.spotify.com/artist/6BU71EgsdMc56SqK6Hl4bD',
    image: '/images/thumbnails/Spotify.png',
  },
  /*
  // Projects below are commented out per request — do not delete, can restore later
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
  */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Dec 2025',
    location: 'Texas A&M University–Victoria',
    title: 'B.S. Computer Information Systems — Texas A&M University–Victoria',
    content: (
      <>
        <p>Graduated Magna Cum Laude, 3.7 GPA</p>
        <p>Degree conferred: Dec 2025</p>
      </>
    ),
  },
  {
    date: 'July 2026',
    location: 'Microsoft',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    content: <p>Certification awarded: Microsoft Certified: Azure Fundamentals (AZ-900) — July 2026</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2015–Present — https://www.youtube.com/@darkintegralgaming',
    location: 'DarkIntegralGaming · Self-employed',
    title: 'Content Creator',
    content: (
      <>
        <p>
          Built and managed <strong>DarkIntegralGaming</strong>, a YouTube channel focused on the Pokémon Trading Card
          Game Online, growing it to <strong>70,000+ subscribers and 25M+ views</strong>.
        </p>
        <p>Collaborated with The Pokémon Company on promotional content for Pokémon Trading Card Game Online.</p>
      </>
    ),
  },
  {
    date: '2014–2015',
    location: 'CSAT, formerly Attero',
    title: 'Apple Hardware Technician',
    content: (
      <p>
        Diagnosed hardware and software issues on Apple computers, replaced major components, and tested repaired
        devices before return to customers.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '@ForTheWinTCG',
      text: 'Glad to see you back king',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '@shinjiplay2309',
      text: "I'm new to tcg.  This was suuuuper helpful.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: '@mrgrimm',
      text: 'No joke, your videos always put a smile on my face',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Open to collaborations, technical projects, and content opportunities.',
  items: [
    {
      type: ContactType.Email,
      text: 'dphan89@gmail.com',
      href: 'mailto:dphan89@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Houston, TX',
      href: 'https://www.google.com/maps/place/Houston,+TX',
    },
    {
      type: ContactType.YouTube,
      text: 'https://www.youtube.com/@darkintegralgaming',
      href: 'https://www.youtube.com/@darkintegralgaming',
    },
    {
      type: ContactType.Github,
      text: 'https://github.com/dphan89',
      href: 'https://github.com/dphan89',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dphan89'},
  {label: 'YouTube', Icon: YouTubeIcon, href: 'https://www.youtube.com/@darkintegralgaming'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/donald-phan-90074992/'},
];
