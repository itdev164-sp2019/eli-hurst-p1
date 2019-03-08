import React, { Component } from 'react';
import Image1 from "../../images/glass-10.jpg";
import Image2 from "../../images/glass-14.jpg";
import Image3 from "../../images/glass-13.jpg";
import Image4 from "../../images/glass-7.jpg";
import Image5 from "../../images/glass-8.jpg";
import Image6 from "../../images/glass-9.jpg";

class Beer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerz:0,
            cupz:0,
            cups:[Image1,Image2,Image3],
            beers:[Image4,Image5,Image6],
        };

    }

    render({...props}) {
        return(
            <div style={{position: "center", height:"100px", width:"200px"}}>
                <img src={this.state.beers[this.props.beerz]} alt="" style={{ position: "absolute", right:"15px", zIndex: "1"}}/>
                <img src={this.state.cups[this.props.cupz]} alt="" style={{ position: "absolute", right:"15px", zIndex: "2"}}/> 
                 
            </div>
        );
    }
}

Beer.propTypes = {

};

export default Beer;
