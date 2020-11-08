import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import './Person.css';

const StyledDiv = styled.div`
width:60%;
margin: 20px auto;
border: 1px solid #eee;
padding:16px;
`

const person = (props) => {
  //  const style= {
    //    '@media (min-width:500px)': {
      //      width: '400px',
        //    backgroundColor: 'blue'
     //  }
  //  };
return( 
//<div className='Person' style={style}>
<StyledDiv>
    <p onClick={props.click} >{props.name} tet nummer {props.age}</p><p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} />
</StyledDiv>
    )
};

export default person;