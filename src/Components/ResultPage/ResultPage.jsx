import React from 'react'
import UrgencyTable from '../UrgencyTable/UrgencyTable';

import PopularProblems from '../PopularProblems/PopularProblems'


class ResultPage extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            route:"Now",
            now: [],
            near: [],
            far: []
        }
    }

    onRouteChange = (route) => {
        this.setState({route:route})
    }




    render(){
        return(
  
  
            <div>
                <div className="voting">
                    <button className='vote' onClick={() => this.props.onRouteChange('vote')}>vote again</button>
                    <button className='share'>share</button>
                </div>
                <p className='left'>View the most crucial challenges</p>
                <UrgencyTable 
                    onRouteChange={this.onRouteChange}
                    route={this.state.route}    
                />
                <PopularProblems />
            </div>
                
    
        );
    }
    
}

   

export default ResultPage;