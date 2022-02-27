import type { NextPage } from 'next';
import { default as NextLink } from 'next/link';
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
  Collapse,
  useTheme,
  Link,
} from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { map } from 'lodash';
import BoxIcon from '@/components/BoxIcon';
import { getStaticPaths, makeStaticProps } from '@/libs/getStatic';
import type { I18nProps } from '@/types';

import { getStaticRoutes, RouteObject, ROUTES } from '../../routes';
import { sideBarWidth } from '../../theme';

interface HomeProps extends I18nProps {}

const Home: NextPage<HomeProps> = (props) => {
  const router = useRouter();
  const { theme } = useTheme();
  const { t } = useTranslation('common');
  const routes = getStaticRoutes();
  const lang = props._nextI18Next.initialLocale;

  return (
    <Container gap={1}>
      <Row>
        <Col
          span={4}
          id="aside"
          css={{
            position: 'fixed',
            width: sideBarWidth,
            height: '100%',
            p: 10,
            overflowY: 'auto',
          }}
        >
          <Container css={{ display: 'flex', height: 'inherit' }}>
            <Row css={{ flexDirection: 'column' }}>
              <Input
                bordered
                animated={false}
                size="sm"
                placeholder={t('typeToSearch')}
                color="default"
              />
              <Spacer />
              <Text h5>
                <BoxIcon
                  name="home"
                  style={{ marginRight: theme?.space.xs.value }}
                />{' '}
                {t('home')}
              </Text>
              <Spacer y={0.3} />
              <Collapse.Group divider={false} css={{ width: '100%', p: 0 }}>
                {map(ROUTES, (route: RouteObject) => {
                  return (
                    <Collapse
                      key={route.key}
                      title={<Text h5>{t(route.key)}</Text>}
                      contentLeft={
                        <BoxIcon
                          name={route.icon.name}
                          type={route.icon?.type}
                        />
                      }
                      css={{
                        '> div': {
                          pt: 2,
                          pb: 2,
                        },
                      }}
                    >
                      {route.children.map((child) => {
                        return (
                          <NextLink
                            key={child.path}
                            href={`${lang}${child.path}`}
                          >
                            <Text
                              css={{ pt: 0.5, pl: '$xs', cursor: 'pointer' }}
                            >
                              <Link color="text">
                                <BoxIcon
                                  name={child.icon.name}
                                  type={child.icon?.type}
                                  style={{ marginRight: theme?.space.xs.value }}
                                />{' '}
                                {t(child.shortTitle)}
                              </Link>
                            </Text>
                          </NextLink>
                        );
                      })}
                    </Collapse>
                  );
                })}
              </Collapse.Group>
            </Row>
            <Row css={{ mt: 'auto', pb: 2 }}>
              <Text h5>
                <BoxIcon
                  name="cog"
                  style={{ marginRight: theme?.space.xs.value }}
                />{' '}
                {t('settings')}
              </Text>
            </Row>
          </Container>
        </Col>
        <Col id="main" css={{ ml: sideBarWidth, flexGrow: 1 }}>
          <Container>
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
                {map(routes, (route, i) => {
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
                                textAlign: 'center',
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
