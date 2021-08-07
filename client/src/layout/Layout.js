import React from 'react';
import { Layout } from 'antd';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './styles.css';

const RootLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default RootLayout;
