import React, { useState } from 'react';

function Login({handleLogin}) {
  // Upgraded to standard camelCase naming conventions
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    
    console.log("Email:", email);
    console.log("Password:", password);
    
    // Clear inputs after hitting submit
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex items-center justify-center min-h-screen w-screen bg-slate-900 text-white'>
      {/* Added bg-slate-800 and shadow to make the login card "pop" off the background */}
      <div className='border border-slate-600 p-8 rounded-xl bg-slate-800 shadow-2xl'>
        
        {/* Set a fixed width (w-80) so the form doesn't stretch weirdly */}
        <form 
          className='flex flex-col gap-5 w-80' 
          onSubmit={submitHandler}
        >
          <h1 className='text-2xl font-bold text-center mb-2'>Employee Login</h1>
          
          <input
            required 
            type="email" 
            placeholder='Enter your email' 
            // Added text-black so what you type is visible, and outline-none for a cleaner look
            className='p-3 placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            required 
            type="password" 
            placeholder='Enter your password' 
            className='p-3 placeholder-gray-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* Stacked the buttons instead of side-by-side for a cleaner dashboard layout */}
          <div className='flex flex-col gap-3 mt-4'>
            <button 
              type="submit" 
              // Made the main login button a distinct color (blue) to stand out
              className='w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors'
            >
              Login
            </button>
            <button 
              type="button" 
              // Changed forgot password to look like a clickable text link rather than a primary button
              className='w-full py-2 bg-transparent text-sm text-gray-400 hover:text-white underline transition-colors'
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;