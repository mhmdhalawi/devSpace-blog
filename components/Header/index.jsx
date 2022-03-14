import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../public/images/logo.png';

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full'>
      <div className='container mx-5 flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <Link href='/'>
          <a className='flex font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src={Logo} alt='logo' width={40} height={40} />
            <span className='ml-3 text-xl'>DevSpace</span>
          </a>
        </Link>
        <nav className='flex flex-wrap items-center'>
          <Link href='/blog'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>Blog</a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
