import type { NextPage } from 'next';
import { Container, Text, Row, Col, Input, Spacer } from '@nextui-org/react';
import { CgHomeAlt, CgSync, CgKeyhole, CgFormatJustify, CgImage, CgTranscript, CgFormatText } from 'react-icons/cg';

const Home: NextPage = () => {
  return (
    <Container fluid gap={1}>
      <Row>
        <Col span={4}>
          <Container direction="row" css={{ paddingTop: '5px;'}}>
            <Input bordered size="sm" placeholder="Type to search for tools..." color="default"  />
            <Spacer />
            <Text><CgHomeAlt /> Home</Text>
            <Text><CgSync /> Converter</Text>
            <Text><CgKeyhole /> Encoders / Decoders</Text>
            <Text><CgFormatJustify /> Formatters</Text>
            <Text><CgTranscript /> Generators</Text>
            <Text><CgFormatText /> Text</Text>
            <Text><CgImage /> Graphic</Text>
          </Container>
        </Col>
        <Col>
          <Container>
            <Row>
              <Text>Title</Text>
            </Row>
            <Row>
              <Text>Content</Text>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
