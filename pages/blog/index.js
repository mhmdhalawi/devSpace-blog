import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Post from '../../components/Post';
import { sortByDate } from '../../utils';

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <h1 className='text-4xl border-b-4 p-5 font-bold'>Blog</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join('posts', file), 'utf8');

    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
