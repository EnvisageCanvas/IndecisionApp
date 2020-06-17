import React from 'react';

const Action = (props)=> (
  <div>
      <button 
        className="big-button"
        disabled={!props.hasOptions} 
        onClick={props.pickOptions}
      >
        Which task to do?
      </button>
  </div>
)

export default Action;
