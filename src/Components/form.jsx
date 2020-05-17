import React, { Component } from 'react';

 
class NameForm extends Component {
    state = { value :"",selValue:""  }
    //feed the input to state var
    handleChange = (e) => {        
            this.setState({value: e.target.value});         
    }
    //feed the input to state var
    handleSelChange = (e) => {        
        this.setState({selValue: e.target.value});         
    }
   //fetch the state and display it
    handleSubmit =(e)=> {
      alert(`${this.state.value} ${this.state.selValue}`);
      e.preventDefault();
    }
   

    render() { 
        return ( 
         
    <form onSubmit={this.handleSubmit}>
        <div className="form-row">
            <div className="col-md-4 mb-3">
            <label for="exampleInputEmail1">
                Name:</label>
                <input type="text"  className="form-control" id="exampleInputEmail1" name="textInput" value={this.state.value} onChange={this.handleChange} />
            
            </div>
            <div className="col-md-4 mb-3">
            <label for="exampleselect2">
            Fav:</label>
            <select id="exampleselect2" value={this.state.selValue} onChange={this.handleSelChange} name="textSelect" className="form-control">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>            
            </div>
        </div>                
        <input type="submit" value="Submit"   className="btn btn-primary" />                    
    </form>
         );
    }
}
 
export default NameForm;

