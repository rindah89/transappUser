'use client'

import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Image from 'next/image';
import bg from "../../assets/images/maintenance-bg.png";

const ResetHelper: React.FC = () => {
  return (
    <React.Fragment>
      <div className="my-5 pt-sm-5">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="text-center">
                <Row className="justify-content-center">
                  <Col sm={4}>
                    <div className="maintenance-img">
                      <Image src={bg} alt="Reset" className="img-fluid mx-auto d-block" width={400} height={300} />
                    </div>
                  </Col>
                </Row>
                <p>Please check your email for your password reset link.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ResetHelper;
