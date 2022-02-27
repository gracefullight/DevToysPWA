import type { NextPage } from 'next';
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
import { useTranslation } from 'next-i18next';
import BoxIcon from '@/components/BoxIcon';
import { getStaticPaths, makeStaticProps } from '@/libs/getStatic';
import type { I18nProps } from '@/types';

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
                        <Card.Body>
                          <Row
                            css={{
                              pt: 20,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Col
                              css={{
                                w: 100,
                                h: '100%',
                                pt: 25,
                                pb: 25,
                                bg: '$accents2',
                                borderRadius: 7,
                                verticalAlign: 'middle',
                                textAlign: 'center',
                                lineHeight: '100%',
                              }}
                            >
                              <BoxIcon
                                name={route.icon.name}
                                type={route.icon?.type}
                                size="md"
                              />
                            </Col>
                          </Row>
                        </Card.Body>
                        <Card.Footer>
                          <Row css={{ flexDirection: 'column' }}>
                            <Text b>{t(route.title)}</Text>
                            <Text small>
                              {t(`${route.shortTitle}.description`)}
                            </Text>
                          </Row>
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

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Home;
