import React from 'react';
import VotePage from './Components/VotePage/VotePage'
import ResultPage from './Components/ResultPage/ResultPage'

import problems from './problems.json'

import './App.css';


class App extends React.Component {
    
  constructor(){
    super()
    this.state = {
      route: "vote"
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render(){
    return (
      <div className="App">




        {/* component 1 */}
        {
          this.state.route === "vote"
            ? <VotePage onRouteChange={this.onRouteChange}/>
            :<ResultPage onRouteChange={this.onRouteChange}/>
        }
      

        {/* component 2 */}
        {/* <div className="voting">
          <button className='vote'>vote</button>
          <button className='share'>share</button>
        </div>
        <p className='left'>View the most crucial challenges</p>
        <UrgencyTable />
        <PopularProblems /> */}
        
        

      </div>
    );
      }
}

export default App;
