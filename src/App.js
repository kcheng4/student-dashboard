import React, {Component} from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';
import StudentCard from './components/StudentCard/StudentCard';

class App extends Component {
  
  state = {
    attendPercent:'',
    studentArray:[]
  }
  

  onInputChange = (attend, studentList) => {
    this.setState({attendPercent: attend});
    this.setState({studentArray:studentList});
    this.forceUpdate();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header
            onInputChange={this.onInputChange}
          />
          <div className='student-cards-list'>{
            this.state.studentArray.map(el=>{
              if(this.state.studentArray.length===0){
                return(<StudentCard/>);
              }
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
