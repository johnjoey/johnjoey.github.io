/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Layout from '../components/layouts/MainLayout';
import SEO from '../components/common/Seo';
import Me from '../components/ui/images/Me';

const sites = [
  {
    name: 'Andsome',
    url: 'https://www.weareandsome.co.uk/',
  },
  {
    name: 'Project Insights',
    url: 'https://www.project-insights.co.uk',
  },
  {
    name: 'Financial Reporter',
    url: 'https://www.financialreporter.co.uk/',
  },
];

const items = sites.map(site => (
  <li>
    <a
      href={site.url}
      className="text-red-500 hover:text-red-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {site.name}
    </a>
  </li>
));

const IndexPage = () => (
  <Layout>
    <main className="relative font-serif flex justify-center items-center min-h-screen">
      <SEO title="" keywords={['John Croker', 'portfolio', 'website']} />

      <div className="flex flex-col p-5" style={{ maxWidth: '700px' }}>
        <div style={{ width: '300px' }}>
          <Me />
        </div>

        <h1 className="text-3xl md:text-4xl my-3">
          Hi, I&apos;m John Croker —
        </h1>
        <h2 className="mb-3">A full-stack software engineer who helped make:</h2>

        <ul className="list-disc ml-6 leading-relaxed">{items}</ul>

        <p className="mt-3 mb-5">
          {'I currently work at '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://magmadigital.co.uk/"
            className="text-red-500 hover:text-red-300"
          >
            Magma Digital Ltd.
          </a>
          {'. To get in touch, write to '}
          <a
            href="mailto:jj.croker@gmail.com"
            className="text-red-500 hover:text-red-300"
          >
            jj.croker@gmail.com
          </a>
          .
        </p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/johnjoey"
            className="mr-3 inline-block bg-red-500 hover:bg-red-300 text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/JohnCrokerCV.pdf"
            className="inline-block bg-transparent hover:border-red-300 text-red-500 hover:text-red-300 py-2 px-4 border border-red-500 rounded"
          >
            Résumé
          </a>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
