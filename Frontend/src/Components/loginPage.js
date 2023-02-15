import React, {useState} from 'react'
import '../Css/loginPage.css'
import Button from './Button.js'


function UserLogin(props){
    // const email = useFormInput('')
    // const password = useFormInput('') 
    const email = "random.email"
    const password ="12345"
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const login = () =>{
        setError(null)
        console.log(error)
        setUser("admin")
        console.log(user)
    }

    return(
        <form className='login-form'>
             <h1>Login Page</h1>
            <article>
                <label>Email:</label>
                <input type="text"></input>
            </article>
            <article>
                <label>Password:</label>
                <input type="text"></input>
            </article>
            <article>
                <Button  buttonStyle={"btn--green--solid"} buttonSize={"btn--medium"}>Submit</Button>
            </article>      
        </form>
    );
    
}

export  default UserLogin
