
import { Project, Experience } from './types';

export const MARATHI_NAME = "चव्हाणपाटील";
export const FULL_NAME = "Ritesh Chavan Patil";
export const LOCATION = "Parewadi / Future Fields";

// Local image assets
export const PORTRAIT_SIDE = "/me-1.jpg";
export const PORTRAIT_FRONT = "/me-2.jpg";
export const IMAGE_FIELD = "/me-3.jpg";

export const SOCIAL_LINKS = [
    { name: 'Email', url: 'mailto:riteshchavan@duck.com' },
    { name: 'GitHub', url: 'https://github.com/ritz541' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/riteshchavanpatil/' },
    { name: 'X', url: 'https://x.com/ritzchavanpatil' },
    { name: 'Instagram', url: 'https://instagram.com/ritzchavanpatil' }
];

export const YOUTUBE_PLAYLIST_EMBED = "https://www.youtube-nocookie.com/embed/videoseries?list=PLvGJjWinfBG2G4WVlEb7LsyAIpd9jDJi-&modestbranding=1&rel=0";
export const YOUTUBE_PLAYLIST_DIRECT = "https://music.youtube.com/playlist?list=PLvGJjWinfBG2G4WVlEb7LsyAIpd9jDJi-";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Sensory Archives",
        category: "Digital Intimacy",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80",
        description: "Capturing the friction between skin and screen."
    }
];

export const EXPERIENCES: Experience[] = [
    {
        year: "PRESENT",
        role: "Radical Autonomy",
        company: "Private Practice",
        description: "Living in a state of constant desire and digital creation."
    },
    {
        year: "2026",
        role: "Harvester of the Earth",
        company: "The Soil",
        description: "Transitioning from bits to beans. The ultimate return to the land."
    }
];
