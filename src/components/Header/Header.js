import React, { Component } from 'react';
import './Header.css';

import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

//Header component that contains the logo, the attendance percent slider and the button to send the http request
class Header extends Component {

    constructor() {
      super();
      this.state = {
        attendPercent:90
      }
    }
    
    //Function that runs when button is pressed. It sends out a http request to our back-end endpoint
    //and updates the parent state asynchronously with the parent onInputChange function
    getStudents = () =>{
        fetch(`https://fierce-savannah-53167.herokuapp.com/${this.state.attendPercent}`,{
            method:'get',
            headers:{'Content-Type':'application/json'},
        })
        .then(res=>{
            return res.json();
        })
        .then(response=>{
            this.props.onInputChange(this.state.attendPercent, response);
        });
        
    }

    //Renders the header along with a Slider and Button component taken from Material UI libraries
    render() {
        return(
            <div>
                <header className="App-header">
                    <h1 id="title">VIS</h1>
                    <p id="subtitle">Attendance Tracker</p>
                    
                    <div>
                    <Slider 
                        id='slider'
                        defaultValue={90}
                        aria-labelledby="discrete-slider-always"
                        step={1}
                        valueLabelDisplay="on"
                        marks={[{value: 50}]}
                        onChangeCommitted={ (e, val) => {this.setState({attendPercent:val});} }
                    />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className='attendance-button'
                        onClick={this.getStudents}
                    >
                    Attendance Percentage
                    </Button>
                    </div>
                </header>
            </div>
        );
    }

}

export default Header;