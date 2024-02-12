import { 
  Form, 
  Link,
  redirect,
  useActionData
} from "react-router-dom";

export const action = async({ request })=>{

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  
  const query = {
    email,
    password
  }
  
  const url = 'http://localhost:9000/validlogin'
  const response = await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })

  const message = await response.json();
  if(message.email & message.password){
    return redirect('home');
  }
  
  return message;

}

export default function Login({ loginClick}) {

  const actionResult = useActionData();
  return (
    <>
      <p className="login--button" onClick={loginClick}>
        Login
      </p>
      <Form method="post" className="login--form" replace>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login--form--elements"
          />
          {actionResult && (actionResult.email === false?<p>Account not Found <br />click on <i>Register</i></p>:'') }
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login--form--elements"
          />
          {actionResult && (actionResult.password === false?<p>Incorrect password</p>:'') }
        <button
          type="submit"
          name="button" 
          id="login--submit"
          className="login--form--elements"
          >Login</button>
        <p className="login--form--elements" id="dont-have-an-accout">
          Don't have an account?
        </p>
        <Link
          onClick={loginClick}
          to={"register"}
          className="login--register--option"
        >
          Register
        </Link>
      </Form>
    </>
  );
}
