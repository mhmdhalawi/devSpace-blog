import React from 'react';
import Link from 'next/link';

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    PHP: 'purple',
    Python: 'green',
    Ruby: 'red',
  };
  const bgColor = `bg-${colorKey[children]}-600 `;
  return (
    <div className={`py-1 px-2 ${bgColor} text-gray-100 rounded font-bold `}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
