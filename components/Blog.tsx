import React from 'react';
import { BLOG_POSTS } from '../constants';
import type { BlogPost } from '../constants';

interface BlogProps {
    onBack: () => void;
}

const Blog: React.FC<BlogProps> = ({ onBack }) => {
    const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

    if (selectedPost) {
        return (
            <div className="container">
                <button 
                    onClick={() => setSelectedPost(null)}
                    className="btn-link"
                >
                    ← Back to posts
                </button>
                
                <article style={{ marginTop: '3rem' }}>
                    <h1>{selectedPost.title}</h1>
                    <p className="text-muted text-small" style={{ marginBottom: '3rem' }}>{selectedPost.date}</p>
                    
                    <div style={{ 
                        whiteSpace: 'pre-line', 
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        fontSize: '1.1rem'
                    }}>
                        {selectedPost.content}
                    </div>
                    
                    <div 
                        className="border-t"
                        style={{ 
                            marginTop: '3rem', 
                            paddingTop: '2rem' 
                        }}
                    >
                        {selectedPost.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="tag"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="container">
            <button 
                onClick={onBack}
                className="btn-link"
            >
                ← Back home
            </button>

            <h1 style={{ marginBottom: '3rem' }}>Blog</h1>

            {BLOG_POSTS.map((post) => (
                <article 
                    key={post.id} 
                    className="border-b"
                    style={{ 
                        marginBottom: '3rem', 
                        paddingBottom: '3rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedPost(post)}
                >
                    <h2>{post.title}</h2>
                    <p className="text-muted text-small" style={{ marginBottom: '1rem' }}>{post.date}</p>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {post.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="tag"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Blog;
