/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Layout from '../components/layouts/MainLayout';
import SEO from '../components/common/Seo';
import Mong from '../components/ui/images/Mong';

const sites = [
  {
    name: 'Financial Services Expo',
    url: 'https://www.financialservicesexpo.co.uk',
    year: '2019',
  },
  {
    name: 'Project Insights',
    url: 'https://www.project-insights.co.uk',
    year: '2019',
  },
  {
    name: 'Front Events',
    url: 'https://www.frontevents.co.uk',
    year: '2017',
  },
];

const items = sites.map(site => <li><a href={site.url} className="text-red-500 hover:text-red-300" target="_blank" rel="noopener noreferrer">{site.name}</a></li>);

const IndexPage = () => (
  <Layout>
    <main className="relative font-serif flex justify-center items-center min-h-screen">
      <SEO title="Home" keywords={['John Croker', 'portfolio', 'website']} />

      <div className="flex flex-col p-5" style={{ maxWidth: '700px' }}>
        <div style={{ width: '300px' }}>
          <Mong />
        </div>

        <h1 className="text-3xl md:text-4xl my-3">Hi, I&apos;m John Croker —</h1>
        <h2 className="mb-3">A full-stack developer who helped make:</h2>

        <ul className="list-disc ml-6 leading-relaxed">
          {items}
        </ul>

        <p className="mt-3 mb-5">
          {'I\'m currently work at '}
          <a href="https://www.barcadiamedia.co.uk/" className="text-red-500 hover:text-red-300">Barcadia Media</a>
          {'. To get in touch, write to '}
          <a href="mailto:jj.croker@gmail.com" className="text-red-500 hover:text-red-300">jj.croker@gmail.com</a>
          {'.'}
        </p>
        <div>
          <a href="https://github.com/johnjoey" className="mr-3 inline-block bg-red-500 hover:bg-red-300 text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Github</a>
          <a href="/JohnCroker.pdf" className="inline-block bg-transparent hover:border-red-300 text-red-500 hover:text-red-300 py-2 px-4 border border-red-500 rounded">Résumé</a>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
