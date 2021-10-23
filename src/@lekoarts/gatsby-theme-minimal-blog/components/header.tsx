/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import Navigation from './navigation';
import HeaderTitle from './header-title';
import HeaderExternalLinks from './header-external-links';

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig();

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex
        sx={{
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <HeaderTitle />
        <div
          sx={{
            boxSizing: `border-box`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            mt: 3,
            color: `secondary`,
            a: { color: `secondary`, ':hover': { color: `heading` } },
            flexFlow: `wrap`,
          }}
        >
          <Navigation nav={nav} />
          <HeaderExternalLinks />
        </div>
      </Flex>
    </header>
  );
};

export default Header;
