import type { GetStaticPropsContext, NextPage } from 'next';
import {
  Container,
  Text,
  Row,
  Col,
  Input,
  Spacer,
  Grid,
  Card,
} from '@nextui-org/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Children } from 'react';
import {
  VscHome,
  VscArrowSwap,
  VscFileBinary,
  VscListSelection,
  VscWand,
  VscTextSize,
  VscSymbolMisc,
} from 'react-icons/vsc';

import { i18n } from '../../../next-i18next.config';
import { getRoutes } from '../../routes';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const routes = getRoutes();

  return (
    <Container fluid gap={1}>
      <Row>
        <Col span={4}>
          <Container direction="row" css={{ paddingTop: '5px;' }}>
            <Input
              bordered
              animated={false}
              size="sm"
              placeholder="Type to search for tools..."
              color="default"
            />
            <Spacer />
            <Text>
              <VscHome /> {t('home')}
            </Text>
            <Text>
              <VscArrowSwap /> {t('converter', { count: 0 })}
            </Text>
            <Text>
              <VscFileBinary /> {t('encoders')} / {t('decoders')}
            </Text>
            <Text>
              <VscListSelection /> {t('formatters')}
            </Text>
            <Text>
              <VscWand /> {t('generators')}
            </Text>
            <Text>
              <VscTextSize /> {t('text')}
            </Text>
            <Text>
              <VscSymbolMisc /> {t('graphic')}
            </Text>
          </Container>
        </Col>
        <Col>
          <Container as="main">
            <Row>
              <Text h3>{t('home')}</Text>
            </Row>
            <Spacer />
            <Row>
              <Grid.Container gap={1}>
                {routes.map((route, i) => {
                  return (
                    <Grid xs={6} sm={3} key={i}>
                      <Card hoverable cover>
                        <Card.Header
                          css={{ position: 'absolute', zIndex: 1, top: 5 }}
                        >
                          <Text h5>
                            {t(route.title)}
                          </Text>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                          <Card.Image
                            src="https://picsum.photos/200/300"
                            width="100%"
                            height={200}
                          />
                        </Card.Body>
                        <Card.Footer>
                          <Text small>
                            {t(`${route.shortTitle}.description`)}
                          </Text>
                        </Card.Footer>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid.Container>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticPaths() {
  return {
    paths: i18n.locales.map((locale) => ({ params: { locale } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const locale = context.params?.locale || i18n.defaultLocale;
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
}

export default Home;
