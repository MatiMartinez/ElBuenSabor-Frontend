import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import contentData from '../utils/contentData';

class Content extends Component {
  render() {
    return (
      <div className="container d-flex flex-column mt-5 align-items-center mb-5">
        <div className="text-center w-50 mb-5">
          <h2 className="mt-5 mb-3">Porque somos los mejores</h2>
          <p className="color-golden">
            Auth0 supports social providers as Facebook, Twitter, Instagram and
            100+, Enterprise providers as Microsoft Office 365, Google Apps,
            Azure, and more. You can also use any OAuth2 Authorization Server.
          </p>
        </div>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={3} className="text-center p-5">
              <h6 className="mb-3">{col.title}</h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
