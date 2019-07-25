import React, { Component } from 'react';
import './Header.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

class Header extends Component {

    constructor() {
      super();
      this.state = {
        attendPercent:90,
        studentArray:[]
      }
    }

    handleAtten = () =>{
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
        
        this.forceUpdate();

    }

    render() {
        //const {onInputChange} = this.props;
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
                    onClick={this.handleAtten}
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