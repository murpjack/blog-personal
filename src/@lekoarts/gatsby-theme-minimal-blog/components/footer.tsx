/** @jsx jsx */
import { jsx, Link, useColorMode } from 'theme-ui';
import useSiteMetadata from '../hooks/use-site-metadata';
import ColorModeToggle from './colormode-toggle';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        button: { paddingLeft: '5px' },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>{siteTitle}。</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>
          <Link
            aria-label="Link to the theme's GitHub repository"
            href='https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog'
          >
            Original Theme
          </Link>
          {' by '}
          <Link
            aria-label="Link to the theme author's website"
            href='https://www.lekoarts.de/en'
          >
            LekoArts
          </Link>
        </p>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </div>
    </footer>
  );
};

export default Footer;
