import "./Login.css"
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginCarousel from "../../components/LoginCarousel/LoginCarousel";


const Login = () => {
  
  return (
    <div className="Login">
        <LoginForm/>
        <LoginCarousel/>
    </div>
  );
};

export default Login;