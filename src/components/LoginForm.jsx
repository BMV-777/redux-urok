  import { useDispatch } from "react-redux";
import { LogIn } from "./myValue/userSlice.js";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  
  const handlerSubmit = e => {
   
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(form.elements.login.value);
      dispatch(LogIn(form.elements.login.value));
    form.reset();
    navigate("/dashboard",{replace: true});
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="text" name="login" />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
