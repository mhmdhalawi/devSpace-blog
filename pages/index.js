import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { sortByDate } from '../utils';

export default function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-4xl border-b-4 p-5 font-bold'>Latest Posts</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
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
      posts: posts.sort(sortByDate).slice(0, 6),
    },
  };
}
