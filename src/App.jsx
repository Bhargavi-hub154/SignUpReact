import './App.css';

export default function App(){
  return(
    <div className= "page" >
      <div className= "container">

        <div className= " left">
          <h1>Welcome :)</h1>
          <p>
            Create a free account to access all feautures!
            <br/>
            Join our community and start your journey with us.
            <br/>
            Sign up now and be part of something amazing!
          </p>
        </div>

        <div className= " right">
          
            <h2>Sign Up</h2>
            <form>
              <input type = "text" placeholder = "Full Name" required />
              <input type = "email" placeholder = "Email Address" required />
              <input type = "password" placeholder = "Password" required />
              <input type = "password" placeholder = "Confirm Password" required />
              <button className= "button" type = "submit">Create Account</button>
            </form>
          
        </div>

      </div>
    </div>

  );
}