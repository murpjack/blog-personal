/** @jsx jsx */
import { jsx, Heading, Link as TLink } from 'theme-ui';
import { Link } from 'gatsby';
import Layout from './layout';
import Title from './title';
import Listing from './listing';
import List from './list';
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config';
import replaceSlashes from '../utils/replaceSlashes';
// @ts-ignore
import Hero from '../texts/hero';
// @ts-ignore
import Bottom from '../texts/bottom';
import { Flex } from '@theme-ui/components';

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  return (
    <Layout>
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading variant='styles.h2'></Heading>
      </Flex>
      <Listing posts={posts} showTags={true} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Homepage;
