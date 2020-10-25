import React, { Component } from 'react';
export default class Signup extends Component {

    constructor(){
        super();
        this.state = {
            submitStatus : 0,
            isSignupSuccess : false,
            name : '',
            password : '',
            con_password : '',
            mobile : '',
            email :'',
            errors :{
                name : '',
                password : '',
                con_password : '',
                mobile : '',
                email :'',
            }
        }
    }

    

    nameChangeHandler = (e) =>{
        this.setState({name : e.target.value});

        let regex_name = /^[A-Za-z0-9 ]{5,20}$/;
        if(!regex_name.test(this.state.name)){
            this.setState({errors : {name : 'Name must contain min 6 character'}});
            
        }else{
            this.setState({errors : {name : ''}})
        }
        
    }

    
    emailChangeHandler = (e) =>{
        this.setState({email : e.target.value})

        let regex_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if(!regex_email.test(this.state.email)){
            this.setState({errors : {email : 'Not a valid email'}})
            
        }else{
            this.setState({errors : {email : ''}})
        }
    }

    passwordChangeHandler = (e) =>{
        this.setState({password : e.target.value})

        let regex_pass =/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
        if(!regex_pass.test(this.state.password)){
            this.setState({errors : {password : 'Password mst contain Uppercase, Lowercase, Numbers and Symbol'}})
            
        }else{
            this.setState({errors : {password : ''}})
        }
    }

    mobileChangeHandler = (e) =>{
        this.setState({mobile : e.target.value})

        if(!this.state.mobile.match(/^(\+\d{1,3}[- ]?)?\d{9}$/) && ! (this.state.mobile.match(/0{5,}/)) ){
            this.setState({errors : {mobile : 'Enter 10 Digit mobile number'}})
            
        }else{
            this.setState({errors : {mobile : ''}})
        }
    }

    submitButton = (e) => {
        alert("Form Submitted");
        e.preventDefault();
    }


    render() {
        return (
            <div className="signup-container">
                <form className="form" onSubmit={this.submitButton}>
                    <h2>Signup</h2>
                    <label>
                        Name 
                    </label>
                    <input type="text" value={this.state.name}  onChange={this.nameChangeHandler}/>
                    <span>{this.state.errors.name}</span>
                    
                    <label>
                        email 
                    </label>
                    <input type="text" value={this.state.email} onChange={this.emailChangeHandler}/>
                    <span>{this.state.errors.email}</span>
                    
                    <label>
                        password
                    </label>
                    <input type="text" value={this.state.password} onChange={this.passwordChangeHandler}/>
                    <span>{this.state.errors.password}</span>

                    <label>
                        mobile
                    </label>
                    <input type="text" value={this.state.mobile} onChange={this.mobileChangeHandler}/>
                    <span>{this.state.errors.mobile}</span>
                    
                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        )
    }
}
