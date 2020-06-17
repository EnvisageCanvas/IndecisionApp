import React from 'react';
import { AddOptions } from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './Modal.js';

//Constants
const appData = {
    title : "Indecision App",
    subtitle : "Add things here",
}

export default class IndecisionApp extends React.Component{
    state = {
      options : [],
      selectedOption: undefined
    }

    //Props can be passed from parent to child and not vice versa   
    //So to manipulate the data present in parent's state, we will pass
    //functions as props, so the children can call them and make changes
    handleDeleteOptions = ()=>{
      this.setState(()=> ({options :[]}))
    }
    
    handleAddOptions = (option)=>{
      if(!option)
        return "This option is not valid. Please enter a valid option."
      else if(this.state.options.indexOf(option)>-1)
        return "This option already exists."
      
      this.setState((prevState)=> ({options : prevState.options.concat([option])}))
    }
    
    handlePickOptions = ()=>{
      const random = Math.floor(Math.random()*this.state.options.length);
      const option = this.state.options[random];

      return this.setState(()=> ({selectedOption: option}))
    }
    
    removeOption = (option)=>{
      this.setState((prevState)=>{
        if(option)
          {
            return prevState.options.splice(prevState.options.indexOf(option),1)
          }
      })
    }
    
    clearSelectedOption = ()=>{
      return this.setState(()=> ({selectedOption: undefined}))
    }

    //Life cycle methods
    //Can only be used with class 
    //Some examples are componentDidMount, componentWillUnmount etc
    componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        if(json)
        {
          const options = JSON.parse(json);
          this.setState(()=> ({options : options}))
        }
      }
      catch(e)
        {
          
        }
    }
    //This will get called whenver a component gets updated
    componentDidUpdate(prevProps, prevState)
    {
      if(prevState.options.length != this.state.options.length)
        {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
    }
  
    render(){
        return (
            <div>
                <Header title={appData.title} subtitle ={appData.subtitle}/>
                <div className="container">
                  <Action 
                    hasOptions ={this.state.options.length > 0}
                    pickOptions ={this.handlePickOptions}
                    />
                  <Options 
                    options={this.state.options} 
                    deleteOptions={this.handleDeleteOptions}
                    deleteOption={this.removeOption}
                  />
                  <AddOptions addOptions={this.handleAddOptions} />
                </div>
                <OptionModal 
                  selectedOption ={this.state.selectedOption}
                  clearSelectedOption = {this.clearSelectedOption}  
                />
            </div>
        );
    }
}
