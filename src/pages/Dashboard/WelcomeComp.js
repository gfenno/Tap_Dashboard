import React, {useEffect, useState} from 'react';

import {Row, Col, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import profileImg from "../../assets/images/profile-img.png";

const WelcomeComp = (props) => {

  const [name, setName] = useState();

  useEffect(() => {
    if(props.user) {
        setName(`${props.user.firstName} ${props.user.lastName}`)
    }
  }, [props.user])

  return (<React.Fragment>
    <Card className="overflow-hidden">
      <div className="bg-soft-primary">
        <Row>
          <Col xs="7">
            <div className="text-primary p-3">
              <h5 className="text-primary">Welcome Back !</h5>
              <p>Tap Systems</p>
            </div>
          </Col>
          <Col xs="5" className="align-self-end">
            <img src={profileImg} alt="" className="img-fluid"/>
          </Col>
        </Row>
      </div>
      <CardBody className="pt-0">
        <Row>
          <Col sm="4" className="mt-4">
            <h5 className="font-size-15 text-truncate">{name}</h5>
            <p className="text-muted mb-0 text-truncate">Administrator</p>
          </Col>

          <Col sm="8">
            <div className="mt-4">
              <Link to="" className="btn btn-primary waves-effect waves-light btn-sm">View Profile
                <i className="mdi mdi-arrow-right ml-1"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </React.Fragment>);
}
export default WelcomeComp;
