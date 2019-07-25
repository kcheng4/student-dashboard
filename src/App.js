import React, {Component} from 'react';
import Header from './components/Header/Header';
import './App.css';
import StudentCard from './components/StudentCard/StudentCard';

//App Component that provides the basis for the entire web application.
//Houses the Header and Student Components.
class App extends Component {
  
  //State consists of the attendance percentage you want to filter on as well as the array of students received
  //based on the filter
  state = {
    attendPercent:'',
    studentArray:[]
  }
  
  //Child component calls this function that updates the parent component's state
  onInputChange = (attendance, studentList) => {
    this.setState({attendPercent: attendance});
    this.setState({studentArray:studentList});
  }

  //Renders Header with logo, attendance and button and also creates a StudentCard for each element in the 
  //student array, using the map function
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header
            onInputChange={this.onInputChange}
          />
          <div className='student-cards-list'>
          {
            this.state.studentArray.map(el=>{
              return(
                <StudentCard
                  key={el.studentId}
                  firstName={el.firstName}
                  lastName={el.lastName}
                  email={el.email}
                  grade={el.grade}
                  attendancePercentage={el.attendancePercentage}
                  advisor={el.advisor}
                  guidanceCounselor={el.guidanceCounselor}
                  schoolName={el.schoolName}
                  totalCreditsEarned={el.totalCreditsEarned}
                  homePhoneNumber={el.homePhoneNumber}
                />
              )
            })
          }
          </div>
        </header>
      </div>
    );
  }

}

export default App;
