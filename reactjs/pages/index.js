import React from 'react';
import fetch from 'isomorphic-unfetch';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from 'reactstrap';

class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch('http://api.giphy.com/v1/gifs/trending?api_key=ovU9KlXS8RtZr0VgRT6X02ZaH02P30qw&limit=12');
    const data = await res.json();

    return {
      gifs: data,
    };
  }

  render() {
    return (
      <div className="giphy-gallery">
        <Container>
          <Row>
            {this.props.gifs.data.map((gif) => (
              <Col sm="12" md="6" lg="4">
                <Card>
                  <CardImg
                    width="100"
                    top
                    src={gif.images.original.url}
                  />
                  <CardBody>
                    <CardTitle>
                      {gif.title}
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page;
