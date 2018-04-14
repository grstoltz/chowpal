import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
 <Footer color="stylish-color" className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#1b5e20'}}>
                    <Container className="text-left">
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us!</h6>
                            </Col>

                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="4" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Chow Pal</strong></h6>
                            <hr className="light-green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>We are a team of bootcamp students working on this project like it's our full time job. Any amount of feedback would help support and continue development on this project and is greatly appreciated.</p>
                        </Col>

                        <Col md="4" lg="4" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact With Us</strong></h6>
                            <hr className="light-green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">Alan Drake</a></p>
                            <p><a href="#!">David Rodriguez</a></p>
                            <p><a href="#!">Trish Mederos</a></p>
                            <p><a href="#!">Grant Stolz</a></p>
                             <p><a href="#!">Abby Thoresen</a></p>
                        </Col>
                        <Col md="4" lg="4" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Technologies Used</strong></h6>
                            <hr className="light-green accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <span class="badge badge-pill green">React</span>
                            <span class="badge badge-pill green">MySql</span>
                            <span class="badge badge-pill green">MD Bootstrap</span>
                            <span class="badge badge-pill green">JavaScript</span>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://powerful-meadow-34290.herokuapp.com/"> Chow Pal </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
