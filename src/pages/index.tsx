import type { NextPage } from 'next';
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
import {
  VscHome,
  VscArrowSwap,
  VscFileBinary,
  VscListSelection,
  VscWand,
  VscTextSize,
  VscSymbolMisc,
} from 'react-icons/vsc';

const Home: NextPage = () => {
  return (
    <Container fluid gap={1}>
      <Row>
        <Col span={4}>
          <Container direction="row" css={{ paddingTop: '5px;' }}>
            <Input
              bordered
              size="sm"
              placeholder="Type to search for tools..."
              color="default"
            />
            <Spacer />
            <Text>
              <VscHome /> Home
            </Text>
            <Text>
              <VscArrowSwap /> Converter
            </Text>
            <Text>
              <VscFileBinary /> Encoders / Decoders
            </Text>
            <Text>
              <VscListSelection /> Formatters
            </Text>
            <Text>
              <VscWand /> Generators
            </Text>
            <Text>
              <VscTextSize /> Text
            </Text>
            <Text>
              <VscSymbolMisc /> Graphic
            </Text>
          </Container>
        </Col>
        <Col>
          <Container>
            <Row>
              <Text h3>Home</Text>
            </Row>
            <Spacer />
            <Row>
              <Grid.Container gap={1}>
                <Grid xs={6} sm={3}>
                  <Card hoverable cover>
                    <Card.Header
                      css={{ position: 'absolute', zIndex: 1, top: 5 }}
                    >
                      <Text h5>JSON ↔ YAML Converter</Text>
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
                        Convert Json data to Yaml and vice versa
                      </Text>
                    </Card.Footer>
                  </Card>
                </Grid>
              </Grid.Container>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
