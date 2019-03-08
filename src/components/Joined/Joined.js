import React, { Component } from 'react';
import DropdownExampleSimple from '../dropDowns/DropdownExampleSimple';
import Beer from '../theBeers/Beer';

const beerType = [{ key: 1, text: 'Pilsner', value: 1 },
                  { key: 2, text: 'IPA', value: 2 },
                  { key: 3, text: 'Stout', value: 3 }]

const glassType = [{ key: 1, text: 'Snifter', value: 1 },
                   { key: 2, text: 'Pint', value: 2 },
                   { key: 3, text: 'Mug', value: 3 }]

const abvType = [{ key: 1, text: 'Low', value: 1 },
                 { key: 2, text: 'Medium', value: 2 },
                 { key: 3, text: 'High', value: 3 }]


class Joined extends Component {
    constructor(props) {
        super(props);

        

        this.state = {
            beerImage:0,
            cupImage:0,
        };

    }

    beerzImage(pos){

        this.setState({
            beerImage:pos
        });

    };

    cupzImage(pos){
        this.setState({
            cupImage:pos
        });
    };

    abvType(arg1, arg2){
        this.setState({
            beerImage:arg1,
            cupImage:arg2,

        });
    }



    render() {
        return(
            <div>

                <text>Beer Style</text>
                <DropdownExampleSimple size="lg" whichSelector="BeerType" options= {beerType} handleClick={(arg1=0) => this.beerzImage(arg1)}/>
               
                <text>Glassware</text>
                <DropdownExampleSimple size="lg" whichSelector="GlassType" options= {glassType} handleClick={(arg1=0) => this.cupzImage(arg1)}/>
              
                <text >Stress Level</text>
                <DropdownExampleSimple size="lg" whichSelector="AbvType" options= {abvType} handleClick={(arg1=0, arg2=0) => this.abvType(arg1, arg2)}/>
                
                <Beer beerz={this.state.beerImage} cupz={this.state.cupImage}/>

            </div>
        );
    }
}

Joined.propTypes = {

};

export default Joined;




