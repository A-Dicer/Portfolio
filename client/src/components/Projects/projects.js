import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Col} from "../../components/Grid";
import Icon from "../../components/Icon";
import YouTube from 'react-youtube';
import Videos from "./vids";
import Images from "./imgs";
import "./projects.css"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[{title: '', disc: '', lang: '', links: ['0', '1']}],
            data: 0,
            opacity: {opacity: 0},
            selection: 0,
            loop: 0,
            class: ['','','codeKeeper','','sftg'],
            yt: {
                height: '250',
                // width: '250',
                playerVars: {
                  autoplay: 0,
                  loop: 1,
                  controls: 0,
                  showinfo: 0,
                //   end: 5,
                  playlist: "",
                  modestbranding: 1
                },
            }
        }
    }
  
    componentDidMount(){
        this.getProjects(); this.scroll()
        this.interval = setInterval(() => this.scroll() , 15000);  
    }
    componentWillUnmount(){clearInterval(this.interval)}
    
// ------------------------------------------- getProjects -------------------------------------------------
//Get all projects
    getProjects = () => {
        API.getProjects()
            .then(res => {this.setState({projects: res.data.results, opacity: {opacity: 1}})}
        ).catch(err => console.log(err));
    };

// --------------------------------------------- scroll ----------------------------------------------------
    scroll = () => { 
    // eslint-disable-next-line
        
        this.state.loop === this.state.projects.length -1
            ?this.setState({loop: 0})
            :this.setState({loop: this.state.loop+1}); this.fade(this.state.loop)
    }

// ---------------------------------------------- fade  ----------------------------------------------------
    fade = (name) => {
        let yt = Object.assign({}, this.state.yt)
        yt.playerVars.playlist = Videos[name]
    
        this.setState({opacity: {opacity: 0}, selection: parseInt(name, 10)})
       
        setTimeout(function(){
            this.setState({data: parseInt(name, 10), opacity: {opacity: 1}, yt: yt})
            
        }.bind(this),300)
    }

// ------------------------------------------ projectSelect ------------------------------------------------
    projectSelect = (event) => {
        event.preventDefault()
        clearInterval(this.interval)
        const {value} = event.target;
        this.fade(value)
    }

// ------------------------------------------ Frontend Code ------------------------------------------------
    render() {
        return (
            <Row>
                <Col size="12">
                    <Row input="projectDisplay">
                        <Col size="12 sm-5">
                            { this.state.yt.playerVars.playlist === Videos[this.state.data]
                                ?<YouTube
                                videoId={Videos[this.state.data]}     
                                opts={this.state.yt}
                                onReady={this._onReady}
                            />
                                :null
                            }
                            <img src={Images[this.state.data]} width="100px" name={0} alt=""/> 
                            <div className="curve" >
                                <div className="links"> 
                                    {this.state.projects.map((project, i)=>(
                                        i === this.state.selection
                                        ? <button className="far fa-dot-circle"  key={i} value={i}></button>
                                        : <button className="far fa-circle" onClick={this.projectSelect} key={i} value={i}></button>
                                    ))}
                                </div>   
                            </div>
                              
                        </Col>
                        <Col size="12 sm-7">               
                            <Row>
                                <div className="col-12" style={this.state.opacity}>
                                    <h3 className={this.state.class[this.state.data]}>{this.state.projects[this.state.data].title}</h3>
                                    <h5>{this.state.projects[this.state.data].lang}</h5>
                                    <hr />
                                    <p>{this.state.projects[this.state.data].disc}</p>
                                    <a href={this.state.projects[this.state.data].links[0]} target="new"> <Icon id="fab fa-github" /> Github Repository </a> <br />
                                    { 
                                    this.state.projects[this.state.data].links[1]
                                    ? <a href={this.state.projects[this.state.data].links[1]} target="new"> <Icon id="fab fa-chrome" /> {this.state.projects[this.state.data].links[1]}</a>       
                                    : null 
                                    }
                                </div>
                            </Row>     
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}
    
export default Projects;