import { Link } from "react-router-dom";

import Login from "./Login";

export default function Intro() {
  return (
    <div className="intro--wrapper">
      <Login />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        blanditiis rem quia perferendis, dicta alias excepturi repudiandae sunt
        quasi iusto optio eligendi, quam incidunt aperiam iste dolor fugiat
        reiciendis repellat nobis corporis temporibus, quisquam earum vero
        maiores. Ullam eligendi error tempore exercitationem? Dolorem qui totam
        soluta, exercitationem architecto temporibus nihil fugiat, explicabo
        laudantium magnam deserunt iste pariatur? Cumque repellendus fugit nemo.
        Aperiam optio, dicta eaque, ea excepturi qui aspernatur iure, deleniti
        consequuntur doloribus quibusdam velit nobis id! Dolorum ex, quisquam
        distinctio ipsa nisi nihil corporis dolores. Dolorem ducimus quo sed,
        maxime quibusdam voluptatem quasi cum! Vero non deserunt impedit
        dolores!
      </p>
      <Link to={"/register"} className="register--link">
        Register
      </Link>
    </div>
  );
}
