import type { NextPage } from 'next';
import { Container, Text } from '@nextui-org/react';
import { getStaticPaths, makeStaticProps } from '@/libs/getStatic';
import DefaultLayout from '@/layouts/default';
import type { I18nProps } from '@/types';
import { useTranslation } from 'next-i18next';

interface PageProps extends I18nProps {}

const JsonToYamlPage: NextPage<PageProps> = (props) => {
  const { t } = useTranslation('common');
  const lang = props._nextI18Next.initialLocale;

  return (
    <DefaultLayout lang={lang} title={t('json-to-yaml')}>
      <Container>
        <Text h3>json-to-yaml</Text>
      </Container>
    </DefaultLayout>
  );
};

const getStaticProps = makeStaticProps(['common', 'converters']);
export { getStaticPaths, getStaticProps };

export default JsonToYamlPage;
