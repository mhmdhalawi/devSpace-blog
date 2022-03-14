import Head from 'next/head';

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to Dev Space',
  keywords: 'development,coding,programming',
  description: 'The best info and news for developers',
};
