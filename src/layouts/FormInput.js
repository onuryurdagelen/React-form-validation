import { useState } from "react";

const FormInput = (props) => {
  const {setValues,onChange,Id,labelText,htmlFor,errorMessage,...inputProps} = props;
  const [focused, setFocused] = useState(false) 
  
  const handleFocus = (e) =>{
    setFocused(true)
  }
  return (
    <div key={props.Id} className="form-group">
        <label htmlFor={htmlFor}>{labelText}</label>
      <input
       {...inputProps}
       onBlur={handleFocus}
       onFocus={() =>
        inputProps.name === "passwordConfirm" && setFocused(true)}
        className="form-control"
        onChange={(e) => props.onChange(e)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput