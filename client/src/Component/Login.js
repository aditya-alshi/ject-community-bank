import { Form, Link } from "react-router-dom";

export default function Login({ loginClick }) {
  return (
    <>
      <p className="login--button" onClick={loginClick}>
        Login
      </p>
      <Form method="post" className="login--form">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="login--form--elements"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="login--form--elements"
        />
        <input
          onClick={loginClick}
          value="Login"
          type="submit"
          name="submit"
          id="login--submit"
          className="login--form--elements"
        />
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
