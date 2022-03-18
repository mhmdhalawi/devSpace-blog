import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

const files = fs.readdirSync(path.join('posts'));

export function getPosts() {
  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join('posts', file), 'utf8');

    const { data: frontmatter } = matter(content);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}
