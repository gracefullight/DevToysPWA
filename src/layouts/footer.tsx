import type { FC } from 'react';
import { Container, Row, Text, Spacer, Link, CSS } from '@nextui-org/react';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: FC<Props> = ({ css, containerCss }) => {
  const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="footer__container"
      gap={2}
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs'
        },
        ...containerCss
      }}
    >
      <Row justify="center" css={css}>
        <Text
          span
          className="footer__copy"
          css={{
            fontSize: '$xs',
            color: '$accents6',
            '@mdMax': {
              fontSize: '$tiny'
            }
          }}
        >
          &copy;&nbsp;Copyright&nbsp;{year}&nbsp;DevToysPWA
        </Text>
        <Spacer x={0.5} />
        <Text
          span
          className="footer__by"
          css={{
            fontSize: '$xs',
            color: '$accents6',
            '@mdMax': {
              fontSize: '$tiny'
            }
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="https://gracefullight.dev.com" rel="noreferrer" target="_blank">
            Gracefullight
          </Link>
        </Text>
      </Row>
      <Row justify="center" css={css}></Row>
    </Container>
  );
};

export default Footer;