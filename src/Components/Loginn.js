import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Logginn.css';
import Navbar from './Navbar';

function Loginn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = { email, password };
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setError('');
        const data = await response.json();
  
        // Check if the email and password match the admin credentials
        if (email === 'admin@gmail.com' && password === 'admin') {
          navigate('/users'); // Redirect to /users if admin
        } else {
          navigate('/'); // Redirect to homepage for other users
        }
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Error during Login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };
  


  return (
    <div>
      <Navbar/>
    <div className='fulll'>
      <div className='half'>
        <img src='loginimg.webp' className="image" alt="Login" />
      </div>
      <div className='shalf'>
        <form className='formm' onSubmit={handleSubmit}>
        <img src='newlogo.png' className='image2' alt="Logo" />
        <div className='shalf1'>
          <h1 className='c3'>Login</h1>
          <br />
          <p className='c4'>Welcome back! Please enter your details.</p>
          <input
            type="email"
            placeholder='Email'
            className='form'
            style={{ marginTop: '1em' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            className='form'
            style={{ marginTop: '1em' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="checkbox" className='checkbox' />
          <p className='text'>Remember Me</p>
          <p className='text1'>Forgot Password?</p>
          <button className='loginbutton' onClick={handleSubmit}>Log in</button>

          <div className="gbutton">
            <button className='ggbutton'>
              <img src='googleicon.png' className='gimage' alt="Google Icon" />
              <span className='textg'>Sign up using Google</span>
            </button>
          </div>
          <div className='last'>
            <br />
            <p className='no'>Don't Have an Account?</p>
            <div className='lastt'>
              <Link to="/Register">Sign up</Link>
            </div>
          </div>
        </div>
          </form>
      </div>
      <ToastContainer /> 
    </div>
    </div>
  );
};

export default Loginn;
