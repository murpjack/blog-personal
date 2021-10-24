/** @jsx jsx */
import { jsx, Heading } from 'theme-ui';
import { Flex } from '@theme-ui/components';
import Layout from './layout';
import Listing from './listing';
import SEO from './seo';

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

const Blog = ({ posts }: PostsProps) => {
  return (
    <Layout>
      <SEO title='Blog' />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading variant='styles.h2'>博客</Heading>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Blog;
