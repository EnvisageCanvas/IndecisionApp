import React from 'react';

//Add option component to add options to the list
export class AddOptions extends React.Component{
    state = {
      error : undefined
    }

   //Get option from the user and add it to the array
    getOptions = (e)=>{
        //Prevent the whole page from loading
        e.preventDefault();
        const option = e.target.option.value.trim();
        const error = this.props.addOptions(option);
        this.setState(()=>{
          return { error }
        });
        //After adding, make the textbox empty
        if(!error)
          e.target.option.value = '';
    }
  
    render(){
        return(
          <div className = "widget">
            {this.state.error && <p className="addOption__error">{this.state.error}</p>}
            <form className="addOption" onSubmit = {this.getOptions}>
                <input className="addOption__input" type="text" name="option"></input>
                <button
                  className="button"
                >
                  Add Option
                </button>
            </form>
          </div>
        )
    }
}
