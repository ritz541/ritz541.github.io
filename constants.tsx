export const NAME = "Ritesh Chavan Patil";
export const LOCATION = "Parewadi";
export const EMAIL = "riteshchavan@duck.com";

export const SOCIAL_LINKS = [
    { name: 'X → @ritzchavanpatil', url: 'https://x.com/ritzchavanpatil' },
    { name: 'Instagram → ritzchavanpatil', url: 'https://instagram.com/ritzchavanpatil' },
    { name: 'LinkedIn → riteshchavanpatil', url: 'https://www.linkedin.com/in/riteshchavanpatil/' },
    { name: 'GitHub → ritz541', url: 'https://github.com/ritz541' },
    { name: 'Medium → @riteshshivajichavan', url: 'https://medium.com/@riteshshivajichavan' },
    { name: 'Email → riteshchavan@duck.com', url: 'mailto:riteshchavan@duck.com' }
];

export const PROJECTS = [
    { name: 'Dreamli → share your deepest secrets', url: 'https://dreamli.app' },
    { name: 'Human API → i built this human', url: 'https://human.chavanpatil.com' }
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
