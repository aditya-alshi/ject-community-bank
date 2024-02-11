import { Outlet, Link } from "react-router-dom";
import Login from "./Login";

import { FaBars } from "react-icons/fa6";

export default function Welcome() {
  
  return (
    <div className="welcome--main--wrapper">
      <header className="welcome--header">
        <Link className="welcome--header--main--heading" to={''}>Ject Community Bank</Link>
        <FaBars className="options--dropdown" />
      </header>
      <main className="welcome--main">
        <Outlet />
      </main>
      <footer className="welcome--footer"></footer>
    </div>
  );
}
