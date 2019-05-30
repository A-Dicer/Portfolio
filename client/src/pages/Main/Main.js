import React, { Component } from "react";
import {Container, Row, Col} from "../../components/Grid";
import Icon from "../../components/Icon";
import Projects from "../../components/Projects";
import "./main.css";

class Main extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            contactInfo: {
                email: "andrew.dicer@gmail.com",
                phone: "314.556.7361",
                linkdIn: "linkedin.com/in/a-dicer",
                gitHub: "github.com/A-Dicer"
            }
        }
    }

// ------------------------------------------ Frontend Code ------------------------------------------------
    render() {
        return (
            <Container >
                <header>
                    <Row>
                        <Col size="12">    
                            <img src={require("./logo.png")} alt=""/> 
                        </Col>
                        <Col size="12"> 
                            <h3>Andrew Dicer</h3> 
                        <p> {this.state.contactInfo.email} | <a href={require("./Andrew.Dicer.Resume.pdf")} download> <Icon id="fas fa-file-download" /> Resume </a> </p>            
                        </Col>
                    </Row>
                </header>
                <main>
                    <Row>
                        <Col size="12">
                            <Projects />  
                        </Col> 
                        <Col size="12 sm-6">
                            <Row input="about">
                                <Col size="12">
                                    <img src={require("./profilePic.jpg")} alt=""/>
                                    <p>
                                        I recently relocated from Florida to Chicago and am seeking 
                                        a new career opportunity. I worked 
                                        for the Walt Disney Company within their Consumer Insight Department, but I have 
                                        since started down a new path. 
                                    </p>	
                                    <p>
                                        In the Fall of 2017 I graduated from the University 
                                        of Central Florida coding boot camp. I have coded for almost 15 years but felt it 
                                        necessary to polish my existing skills and learn some new things along the way to 
                                        prepare for a professional career in software and web development. 
                                    </p>
                                    <p>
                                        My Full-stack Web Development program coupled with years of experience at a top 
                                        Fortune 500 company makes me an ideal candidate to join your team. 
                                        I would love to further discuss how my skill-sets will be of great value. 
                                        I look forward to hearing from you!
                                    </p>	
                                </Col>
                            </Row>
                        </Col>
                        <Col size="12 sm-6">
                            <Row input="reference">
                                <Col size="12">
                                    <p>
                                        "I have known Andrew for more than 10 years. His skillset is a balanced mix of being 
                                        creative and detailed/process oriented. He is hardworking and I always felt like I could 
                                        depend on him to get things done both in the right manner and on time."  
                                    </p>
                                    <h4>Sam Chen</h4>
                                    <h5>Sr. Product Manager</h5>
                                    <h5>Subscriptions at Twitch</h5>
                                </Col>
                                <Col size="12">
                                    <p>
                                        "I know Andrew from a web development bootcamp where I was a Teaching Assistant. 
                                        I found Andrew to have a great eye for front end design, layout, and development. 
                                        His work was consistently superior, and I always looked forward to seeing how he'd 
                                        improve on his assignments every week." 
                                    </p>
                                    <h4>Ali Zaidi</h4>
                                    <h5>Cubic Corporation</h5>
                                    <h5>Associate Software Engineer</h5>            
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </main>
                <footer>
                    <Row>         
                        <Col size="12">    
                            <h5>Contact Info</h5>
                            <Icon id="fas fa-envelope-square" /> {this.state.contactInfo.email} <br />
                            <Icon id="fas fa-phone-square" /> {this.state.contactInfo.phone} <br />                            
                            <Icon id="fab fa-linkedin" /> linkedIn: <a href={`https://${this.state.contactInfo.linkdIn}`} target="new">{this.state.contactInfo.linkdIn}</a>  <br />
                            <Icon id="fab fa-github-square"/> GitHub: <a href={`https://${this.state.contactInfo.gitHub}`} target="new">{this.state.contactInfo.gitHub}</a>   
                        </Col>
                    </Row>
                </footer>
            </Container>         
        );
    }
}

export default Main;
