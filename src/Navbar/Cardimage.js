import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Leaft from './Leaft'
const Example = (props) => {
  return (
<div> 
     <Row>
      <Col sm="6">
        <Card body style={{ backgroundRepeat: 'no-repeat',backgroundImage: `url(${"https://www.maiia.com/static/images/running-prat.svg"}) `} } >
          <CardTitle>Les praticiens de Docavenue </CardTitle>
          <CardText>et RDVmedicaux arrivent sur Maiia !</CardText>
          
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
        <Leaft/>
        </Card>
      </Col>
      </Row>
      </div>
   
  );
};

export default Example;