import React from 'react'
import './Problems.css'

const Problems = (props) =>  {
        let problems = [];
        for(let i = 0; i < 10 ; i++){
            problems.push(
                 <div key={i} className='problems'>
                    <input 
                        onChange={() =>props.onInputChange(i)} 
                        type="checkbox" 
                        checked={props.checked(i)} >
                    </input><p>corona problem {i+1}</p>
                </div>
            )
        }


        let message =''

        message = props.votes < 3 
            ? 'Please enter ' + ( 3- props.votes) + ' more'
            : props.votes > 3 
            ? 'you can only enter 3 votes'
            : '';
            

        return(
            <div className='problem-box'>
               {problems}

               <div className="voter">
                    <p>{message}</p>
                    
                </div>
            </div>
        )
    }

   

export default Problems;