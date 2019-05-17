/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Layout from '../components/layouts/MainLayout';
import SEO from '../components/common/Seo';
import Landing from '../components/sections/Landing/Landing';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['John Croker', 'portfolio', 'website']} />

    <Landing />
  </Layout>
);

export default IndexPage;
