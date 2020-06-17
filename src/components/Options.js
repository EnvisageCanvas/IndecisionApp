import React from 'react';
import Option from './Option'

const Options = (props)=>(
    <div className="widget">
        <div className="widget-header ">
          <h3 className="widget-header__title">Your Options</h3>
          <button 
            onClick={props.deleteOptions}
            className ="button button--link"
          >
              Remove All
          </button>
        </div>
        {props.options.length == 0 && <p className="widget-option__message">Please add an option to get started.</p>}
        {props.options.map((element, index)=> (
      <Option 
        key={element}    
        option={element}
        count={index+1}
        deleteOption = {props.deleteOption}
       />
    ))}
    </div>
);
export default Options;
