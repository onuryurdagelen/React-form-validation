import { Link } from 'react-router-dom'
import { SignupContainer } from '../styled/Register.styled'
import { ButtonWrapper, Utilities } from '../styled/Utils'
import FormInput from '../layouts/FormInput'
import { useRef, useState } from 'react'



export const Register = () => {
    const [values, setValues] = useState({
      username: "",
      email: "",
      date: "",
      password: "",
      passwordConfirm: ""
    });
    // const userNameref = useRef()
    // console.log(userNameref.current())
 
    const inputs = [
      {
        Id: 1,
        type: "text",
        name: "username",
        htmlFor: "username",
        id:"username",
        labelText: "User Name",
        placeholder: "Please enter your username...",
        required: true,
        pattern: "^[A-Za-z0-9]{3,16}$",
        errorMessage: "Username should be 3-16 characters and should't include any special character!"
      },
      {
        Id: 2,
        type: "email",
        name: "email",
        htmlFor: "email",
        id:"email",
        required: true,
        labelText: "Email Address",
        placeholder: "Please enter your Email Address...",
        errorMessage: "It should be a valid email address!"
      },
      {
        Id: 3,
        type: "date",
        name: "date",
        htmlFor: "date",
        id:"date",
        labelText: "Date",
        placeholder: "Please enter your date...",
        errorMessage: ""
      },
      {
        Id: 4,
        name: "password",
        type: "password",
        htmlFor: "password",
        id:"password",
        labelText: "Password",
        pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$",
        required: true,
        placeholder: "Please enter your password...",
        errorMessage: "Password should be At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character and only contains symbols from the alphabet, numbers and chosen special characters",
        
      },
      {
        Id: 5,
        type: "password",
        name: "passwordConfirm",
        htmlFor: "passwordConfirm",
        id:"passwordConfirm",
        labelText: "Password Confirm",
        placeholder: "Please Confirm your password...",
        errorMessage: "Password don't match",
        pattern: values.password,
        required: true,
      },

    ]
    const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("girdi")
      const data = new FormData(e.target);
      console.log(data.entries())
      console.log(Object.fromEntries(data.entries()));
    }
    const onChange = (e) =>{
      setValues({...values,[e.target.name]:e.target.value})
    }
  return (
    <SignupContainer>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input,index) =>{
          return <FormInput
          
          value={values[input.name]}
         {...input}
          setValues={setValues}
          onChange={onChange}
        />
        })}
        <div style={{textAlign: "center"}}>
        <ButtonWrapper
        fontSize="1.5rem"
        type='submit'
        margin="0 auto"
        onClick={handleSubmit}
        bgColor={Utilities.colors.clr_green_dark}
        color={Utilities.colors.clr_white}
        marginTop="1rem"
        width="70%"
      >
        Sign Up
      </ButtonWrapper>
        </div>
      </form>
      
      <div className="login-router">
        <span>Already have an account?</span> <Link to="/login">Login</Link>
      </div>
    </SignupContainer>
  )
}
