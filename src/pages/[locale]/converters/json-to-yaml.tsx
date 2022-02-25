import type { NextPage } from 'next';
import { Container } from '@nextui-org/react';
import { getStaticPaths, makeStaticProps } from '@/libs/getStatic';

const JsonToYamlPage: NextPage = () => {
  return <Container>json-to-yaml</Container>;
};

const getStaticProps = makeStaticProps(['common', 'converters']);
export { getStaticPaths, getStaticProps };

export default JsonToYamlPage;
