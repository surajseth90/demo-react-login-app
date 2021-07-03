import React, { Component } from 'react'

export class AddContact extends Component {
    state={
        name:"",
        email:""
         
    }

    save=(event)=>{
        event.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("ALL fields are required");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});

    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.save}>
                    <div className="field">
                        <label>
                            Name
                        </label>
                        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={(event)=>this.setState({name:event.target.value})}/>
                        <label>
                            Name
                        </label>
                        <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={(event)=>this.setState({email:event.target.value})}/>

                    </div>
                    <button className="ui button yellow">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact
