/** @jsx jsx */
import React from 'react';
import { Global } from '@emotion/react';
import { Box, Container, jsx } from 'theme-ui';
import SEO from './seo';
import Header from './header';
import Footer from './footer';
import CodeStyles from '../styles/code';
import SkipNavLink from './skip-nav';

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme: any) => {
        return {
          '*': {
            boxSizing: `inherit`,
            letterSpacing: '1px',
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          '[hidden]': {
            display: `none`,
          },
          // '::selection': {
          //   backgroundColor: theme.colors.text,
          //   color: theme.colors.background,
          // },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
          h2: {
            marginTop: '0 !important',
          },
          layout: theme.layout,
        };
      }}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      {/* 
      // @ts-ignore */}
      <Box id='skip-nav' sx={{ ...CodeStyles }} className={className}>
        {children}
      </Box>
      <Footer />
    </Container>
  </React.Fragment>
);

export default Layout;
