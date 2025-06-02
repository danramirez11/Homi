import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Register.css"

const Register = () => {
  
  return (
    <div className="Register">
      <RegisterForm/>
      <div className="RegisterIMG"
      style={{
        backgroundImage: 'url("https://www.jaramillomora.com/wp-content/uploads/2025/01/origen-galeria-10-scaled.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
      </div>
    </div>
  );
};

export default Register;