import React from 'react'
import UrgencyTable from '../UrgencyTable/UrgencyTable';
import Problems from '../Problems/Problems'
import './VotePage.css'



class VotePage extends React.Component  {
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

    onInputChange = (id) => {
        let arr =  [];
        let index = 0;
        if(this.state.route === 'Now') {
            arr = this.state.now.slice();
            index = arr.indexOf(id);
            if(index > -1)
                arr.splice(index, 1)
            else 
                arr.push(id);
            this.setState({now:arr});
           
        } 
        else if (this.state.route === 'near') {
            arr = this.state.near.slice()
            index = arr.indexOf(id)
            if(index > -1)
                arr.splice(index, 1)
            else 
                arr.push(id);
            this.setState({near:arr});
        }
        else if (this.state.route === 'far'){
            arr = this.state.far.slice()
            index = arr.indexOf(id)
            if(index > -1)
                arr.splice(index, 1)
            else 
                arr.push(id);
            this.setState({far:arr});
        }
        console.log(arr);

        
            
    }


    votes = () => {
        if(this.state.route === 'Now')
            return this.state.now.length;
        if(this.state.route === 'near')
            return this.state.near.length;
        return this.state.far.length;
    }

    voteButton = () => {    
        if(this.state.now.length === 3 &&
            this.state.near.length === 3 &&
            this.state.far.length === 3)   
            this.props.onRouteChange('result');
        else if(this.state.now.length !== 3)
            this.onRouteChange('Now');
        else if(this.state.near.length !== 3)
            this.onRouteChange('near');
        else
            this.onRouteChange('far');

        
    }

    checked = (num) => {
        if(this.state.route === 'Now')
            return this.state.now.includes(num);
        if(this.state.route === 'near')
            return this.state.near.includes(num);
        return this.state.far.includes(num);
    }

    render(){
        return(
            <div className="VotePage">
                <p className='left'>Choose the top 3 most crucial challenges</p>
                <UrgencyTable 
                    route={this.state.route}
                    onRouteChange={this.onRouteChange}
                    />
                <div className='flexed'>
                    <Problems 
                         onInputChange={this.onInputChange}
                         votes={this.votes()}    
                         checked={this.checked} 
                    />

                    <button 
                        className='vote vote-button'
                        onClick={this.voteButton}
                    >vote</button>
                    
                </div>
                {/* <div className={this.state.route ==="near"?"":"hide"}>
                    <Problems  
                        onInputChange={this.onInputChange}
                        votes={this.state.near.length}
                    />
                </div>
                <div className={this.state.route ==="far"?"":"hide"}>
                    <Problems  
                        onInputChange={this.onInputChange}
                        votes={this.state.far.length}    
                    />
                </div> */}

                
            </div>
                
    
        );
    }
    
}

   

export default VotePage;