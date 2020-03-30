import React from 'react'
import './PopularProblems.css'

const PopularProblems = () =>  {
        
    let problems = [];
        for(let i = 0; i < 10 ; i++){
            problems.push(
                 <div key={i} className='popular-problems' >
                    <h2>{i+1}.Corona problem {i+1}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, error minima ut voluptates dolorem velit cumque est ipsa? Rerum dolores deserunt consequatur, suscipit amet maxime nesciunt ullam veniam minima velit.</p>
                </div>
            )
        }

        return(
            <div className='problem-box'>
               {problems}
            </div> 
        )
    }

   

export default PopularProblems;