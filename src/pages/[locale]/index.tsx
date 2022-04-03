import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Text, Row, Col, Grid, Card, useTheme } from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { map } from 'lodash';
import BoxIcon from '@/components/BoxIcon';
import { getStaticPaths, makeStaticProps } from '@/libs/getStatic';
import type { I18nProps } from '@/types';

import { getStaticRoutes } from '../../routes';
import DefaultLayout from '@/layouts/default';

interface HomeProps extends I18nProps {}

const Home: NextPage<HomeProps> = (props) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const routes = getStaticRoutes();
  const lang = props._nextI18Next.initialLocale;

  return (
    <DefaultLayout lang={lang} title='home'>
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
                    <Text small>{t(`${route.shortTitle}.description`)}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </DefaultLayout>
  );
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Home;
