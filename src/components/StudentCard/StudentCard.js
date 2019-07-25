import './StudentCard.css';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import placeholder from './placeholder.jpg';

//StudentCard component that displays the all the student info received from the GET request
class StudentCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //A lot of variables like firstName are passed as props from the parent and these props populate the card
    //Style is helped formatted using tachyons
    render() {
        const {firstName,lastName,email,grade,attendancePercentage,advisor,guidanceCounselor,schoolName,totalCreditsEarned,homePhoneNumber} = this.props;
        return(
            <div className='tc br3 pa3 ma2 dib bw2f1 w-third shadow-1 student-cards'>
                <div className='fl w-40 pa2'>
                    <img src={placeholder} alt='pic' height='250' width='250'></img>
                </div>
                <div className='fl w-60 pa2'>
                    <div className='student-card-sec'>
                        <h4 className='student-card'>Name: {lastName}, {firstName}</h4>
                        <p className='student-card'>Grade: {grade}</p>
                        <p className='student-card'>Credits: {totalCreditsEarned}</p>
                        <p className='student-card'>School: {schoolName}</p>
                        <p className='student-card'>Advisor: <Button><span title='Email'>{advisor}</span></Button></p>  
                        <p className='student-card'>Counselor: <Button><span title='Email'>{guidanceCounselor}</span></Button></p>
                        <p className='student-card'>Attendance Percent: <font color='red'>{attendancePercentage}</font></p>
                    </div>
                </div>
                <div>
                    <div className='student-card'>
                        <Button 
                        className='student-card'
                        variant="contained" 
                        color="primary" 
                        >Email: {email}</Button>
                    </div>
                    <div>
                        <Button
                        variant="contained" 
                        color="primary" 
                        >Text Phone: {homePhoneNumber}</Button>
                    </div>
                    </div>
            </div>
        )
    }
  
}

export default StudentCard;