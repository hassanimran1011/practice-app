import React from 'react';

const Alert = (props) =>{
    return(
        <div className='conatiner' style={{height:'60px'}}>
        {props.alert &&<div className='container-fluid'>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg}
            </div>
        </div>}
        </div>




    );

}

export default Alert;