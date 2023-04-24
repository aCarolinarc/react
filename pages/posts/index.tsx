import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get<Post[]>(
        'http://localhost:1337/api/posts',
        {
          headers: {
            Authorization:
              'Bearer b989d89fc3ccc2c65d45c6b039ffd6d0004ef5948f7eb02c0670c4e56cd972ddd88b18a37b0fd8c5d3e29b5c238773fbd97f023912af60e4b9f3dcc9e7a8bf8b4c453a928a6221074bf416fbf4cc070928aabdf235ea151fa8f17f834a8bb7c90402d3d999df42857ccd3d5879c651460f300e691d74a1a532023106878c9e46',
          },
        }
      );
      // setPosts(response.data.map(post => post.attributes.Title));
      setPosts(response.data.data);
      console.log(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <section>
      <h1>Posts</h1>
      {posts.map(post => (
        <p key={post.id}>{post.attributes.Title}</p>
      ))}
    </section>
  );
}
