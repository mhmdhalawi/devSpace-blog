/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

import Link from 'next/link';
import CategoryLabel from '../../components/CategoryLabel';
import Layout from '../../components/Layout';

export default function PostPage({ frontmatter, content, slug }) {
  const { title, category, date, cover_image, author, author_image } = frontmatter;
  return (
    <Layout title={`DevSpace | ${title}`}>
      <Link href='/blog'>
        <a className='text-gray-500 hover:text-gray-700 ml-3'>&larr; Go Back</a>
      </Link>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt='cover image' className='w-full rounded' />

        <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
            <h4>{author}</h4>
          </div>
          <div className='mr-4'>{date}</div>
        </div>

        <div className='blog-text mt-2'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((file) => {
    const slug = file.replace('.md', '');

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const file = fs.readFileSync(path.join('posts', `${params.slug}.md`), 'utf8');

  const { data: frontmatter, content } = matter(file);

  return {
    props: {
      frontmatter,
      content,
      slug: params.slug,
    },
  };
}
