export const NAME = "Ritesh Chavan Patil";
export const LOCATION = "Parewadi";
export const EMAIL = "riteshchavan@duck.com";
export const EMAIL_PRIVATE = "ritzchavan@proton.me";

export const SOCIAL_LINKS = [
    { name: 'X (@ritzchavanpatil)', url: 'https://x.com/ritzchavanpatil' },
    { name: 'Instagram (ritzchavanpatil)', url: 'https://instagram.com/ritzchavanpatil' },
    { name: 'LinkedIn (riteshchavanpatil)', url: 'https://www.linkedin.com/in/riteshchavanpatil/' },
    { name: 'GitHub (ritz541)', url: 'https://github.com/ritz541' },
    { name: 'Medium (@riteshshivajichavan)', url: 'https://medium.com/@riteshshivajichavan' },
    { name: 'Email (riteshchavan@duck.com)', url: 'mailto:riteshchavan@duck.com' }
];

export const PROJECTS = [
    { 
        name: 'Dreamli', 
        byline: 'a mobile feed that doesn\'t make you want to throw your phone.',
        description: 'Mobile feed UI design. Smooth gestures, clean transitions, doesn\'t look like it was designed in 2015. The kind of app UI you actually want to scroll through.',
        url: 'https://dreamli.app',
        tags: ['Design', 'UI/UX', 'Mobile']
    },
    { 
        name: 'TheFlower.xyz', 
        byline: 'all the news that\'s fit to fabricate.',
        description: 'A satirical newsroom that publishes completely made-up stories with the straight face of a real broadsheet. Yesterday\'s headline: "COFFEE MACHINE ACQUIRES SENTIENCE, IMMEDIATELY REQUESTS ANNUAL LEAVE." The whole thing runs on n8n. No backend. I just connected boxes until articles started appearing.',
        url: 'https://theflower.xyz',
        tags: ['Satire', 'News', 'n8n']
    },
    { 
        name: 'Human API', 
        byline: 'we taught a machine empathy. it\'s still learning.',
        description: 'AI chat interface for conversations that actually go somewhere. Not another ChatGPT wrapper. Mostly. It talks like a person sometimes, which is either impressive or concerning.',
        url: 'https://human.chavanpatil.com',
        tags: ['AI', 'Chat', 'Interactive']
    }
];

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "Hello World",
        date: "December 26, 2025",
        excerpt: "Welcome to my personal website. Here I'll share my thoughts and experiences.",
        content: "Welcome to my personal website.\n\nThis is where I'll be sharing my thoughts, experiences, and projects. Feel free to explore.",
        tags: ["intro", "personal"]
    },
    {
        id: "2", 
        title: "Thinking About Design",
        date: "December 25, 2025",
        excerpt: "Some thoughts on simplicity in design.",
        content: "I've been thinking a lot about design lately.\n\nSimple is better. Less is more.",
        tags: ["design", "thoughts"]
    }
];
