import type { FC, PropsWithChildren } from 'react';
import { default as NextLink } from 'next/link';
import {
  Container,
  Text,
  Row,
  Col,
  Input,
  Spacer,
  Collapse,
  useTheme,
  Link,
} from '@nextui-org/react';
import { useTranslation } from 'next-i18next';
import { map } from 'lodash';
import BoxIcon from '@/components/BoxIcon';

import { RouteObject, ROUTES } from '../routes';
import { sideBarWidth } from '../theme';

import Header from './header';

interface LayoutProps {
  title: string;
  lang: string;
}

const DefaultLayout: FC<PropsWithChildren<LayoutProps>> = ({
  children,
  title,
  lang,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <Container gap={1}>
      <Header title={title}/>
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
                            href={`/${lang}${child.path}`}
                            passHref
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
              <Text h3>{title}</Text>
            </Row>
            <Spacer />
            <Row>{children}</Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultLayout;
