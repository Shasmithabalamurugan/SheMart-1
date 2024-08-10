import React, { useState ,handleSubmit} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Register.css';

function Register() {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { customerName, email, password };

    try {
      const response = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/');
      } else {
        alert('Signup failed!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="full">
      <div className="half">
        <img src="loginimg.webp" className="image" alt="Decorative" />
      </div>
      <div className="shalf">
        <img src="newlogo.png" className="image2" alt="Logo" />
        <div className="shalf1">
          <h1 className="c3">Sign Up</h1>
          <br />
          <p className="c4">Please enter your details.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              placeholder="UserName"
              className="form"
              style={{ marginTop: '1em' }}
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="form"
              style={{ marginTop: '1em' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="form"
              style={{ marginTop: '1em' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="form"
              style={{ marginTop: '1em' }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="loginbutton">Signup</button>
          </form>
          <div className="gbutton">
            <button className="ggbutton">
              <img src="googleicon.png" className="gimage" alt="Google" />
              <span className="textg">Sign up using Google</span>
            </button>
          </div>
          <br />
          <p className="no1">Already Have an Account?</p>
          <div className="lastt">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <ToastContainer /> 
    </div>
    </div>
  );
};

export default Register;
