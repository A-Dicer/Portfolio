import React from "react";
import {Row, Col} from "../../components/Grid";
import "./header.css";

const Header = ({info}) => (
    <header>
        <Row>
            <Col size="12">    
                <img src={require("./logo.png")} /> 
            </Col>
            <Col size="12"> 
                <h3>Andrew Dicer</h3> 
               <p> {info.email} | {info.phone} </p>            
            </Col>
        </Row>
    </header>
  );

export default Header;