import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { resolve } from '../helpers';
import Layout from '../components/Layout';
import QuoteScene from '../components/Scenes/QuoteScene';
import NavbarScene from '../components/Scenes/NavbarScene';

export default () => (
  <React.Fragment>
    <Head>
      <title>Nextron - POC</title>
    </Head>
    <Layout>
      <NavbarScene />
      <QuoteScene />
    </Layout>
  </React.Fragment>
);
