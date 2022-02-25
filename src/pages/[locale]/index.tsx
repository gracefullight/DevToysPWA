import type { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
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
import BoxIcon from '@/components/BoxIcon';
import type { I18nProps } from '@/types';

import { i18n } from '../../../next-i18next.config';
import { getStaticRoutes } from '../../routes';

interface HomeProps extends I18nProps {}

const Home: NextPage<HomeProps> = (props) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const routes = getStaticRoutes();
  const lang = props._nextI18Next.initialLocale;

  return (
    <Container fluid gap={1}>
      <Row>
        <Col span={4}>
          <Container
            direction="row"
            css={{ position: 'fixed', height: '100%', paddingTop: '5px' }}
          >
            <Input
              bordered
              animated={false}
              size="sm"
              placeholder={t('typeToSearch')}
              color="default"
            />
            <Spacer />
            <Text>
              <BoxIcon name="home" /> {t('home')}
            </Text>
            <Spacer y={0.2} />
            <Text>
              <BoxIcon name="transfer-alt" /> {t('converter', { count: 0 })}
            </Text>
            <Text>
              <BoxIcon name="dna" /> {t('encoders')} / {t('decoders')}
            </Text>
            <Text>
              <BoxIcon name="align-left" /> {t('formatters')}
            </Text>
            <Text>
              <BoxIcon name="magic-wand" type="solid" /> {t('generators')}
            </Text>
            <Text>
              <BoxIcon name="text" />
              {t('text')}
            </Text>
            <Text>
              <BoxIcon name="images" /> {t('graphic')}
            </Text>
          </Container>
        </Col>
        <Col>
          <Container as="main">
            <Row
              css={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                background: '$headerBackground',
              }}
            >
              <Text h3>{t('home')}</Text>
            </Row>
            <Spacer />
            <Row>
              <Grid.Container gap={1}>
                {routes.map((route, i) => {
                  return (
                    <Grid xs={6} sm={3} key={i}>
                      <Card
                        hoverable
                        cover
                        onClick={() => router.push(`${lang}${route.path}`)}
                        css={{
                          cursor: 'pointer',
                        }}
                      >
                        <Card.Header
                          css={{ position: 'absolute', zIndex: 1, top: 5, left: 1 }}
                        >
                          <Text h5>{t(route.title)}</Text>
                        </Card.Header>
                        <Card.Body css={{ p: 0 }}>
                          <Card.Image
                            src="https://picsum.photos/200/300"
                            width="100%"
                            height={200}
                          />
                          {/* <Avatar squared /> */}
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
