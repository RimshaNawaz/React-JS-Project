import React, { useState } from 'react'

export default function Forms() {
    let formsubmit = (event) => {
         event.preventDefault();
        let check = validation();
        if (check) {
           alert("Congratultions......... Your Form Is Submit");
           let fullname=document.getElementById("fullname");
           let email=document.getElementById("email");
           let age=document.getElementById("age");
           let password=document.getElementById("password");
           let confirmpassword=document.getElementById("confirmpassword");
           fullname.value=" ";
           age.value=" ";
           password.value="" ;
           confirmpassword.value="";
           email.value="";
           return;
            console.log("rimsha")
        }
        else{
            alert("Your Password Is NOT Accurate according to the Requiemen SO Try Again")
        }
        console.log("helloe")
    }

    let [formdata, setdata] = useState({
        fullname: '',
        email: '',
        age: '',
        password: '',
        confirmpassword: ''
    });

    const handlechange = (evevnt) => {
        let { name, value } = evevnt.target;
        setdata({ ...formdata, [name]: value })
    }

    let validation = () => {
        if (formdata.password.length >= 8) {
            if (formdata.password === formdata.confirmpassword) {
                return true;
            }
        }
        return false;
    }


return (
    <div>
        <div className="container">
            <h2>Sign Up Form</h2>
            <form action="/register" onSubmit={formsubmit}>
                <div className="form-group">
                    <label forhtml="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" pattern="[A-Za-z ]+" value={formdata.fullname} onChange={handlechange} required />
                </div>
                <div className="form-group">
                    <label forhtml="email">Email:</label>
                    <input type="email" id="email" name="email" value={formdata.email} onChange={handlechange} required />
                </div>
                <div className="form-group">
                    <label forhtml="age">Age:</label>
                    <input type="number" id="age" name="age" value={formdata.age} onChange={handlechange} required />
                </div>
                <div className="form-group">
                    <label forhtml="password">Password:</label>
                    <input type="password" id="password" name="password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$" value={formdata.password} onChange={handlechange} required />

                </div>
                <div className="form-group">
                    <label forhtml="confirmpassword">Confirm Password:</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" value={formdata.confirmpassword} onChange={handlechange} required />
                </div>
                <input type="submit"  value="Sign Up" />
            </form>
        </div>
    </div>
)

}