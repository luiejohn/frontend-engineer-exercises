import { Divider, Heading } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/react';
import Card from '@components/card/card';
import Layout from '@components/Layout';
import Pagination from '@components/pagination/pagination';
import { FC } from 'react';

const mockData = [
  {
    title: 'Sample Title',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt error, autem ad aut doloribus ipsam vero quidem recusandae tempora aspernatur maiores ut velit nihil sint nobis? Delectus, perferendis nobis.',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },

  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
  {
    title: 'Sample Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque laboriosam blanditiis doloremque ad odit! Iure illum, dolorem officiis molestiae adipisci eveniet commodi laboriosam suscipit velit fugit necessitatibus, porro voluptates eum!',
  },
];

const Products: FC = () => (
  <Layout>
    <Heading mt={39} mb={5}>
      Products
    </Heading>
    <Divider mb={13} />

    <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap={5} mb={10}>
      {mockData.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </Grid>
    <Pagination />
  </Layout>
);

export default Products;
