import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="home--wrapper">
            <header className="home--header">
                <h1>Ject Communit Bank</h1>
                <Link className="home--header--buttons" id="Link--wrapper--signupButton" to={'signup'}>
                    <button id="signup--button" >Sign Up</button>
                </Link>
                <button className="home--header--buttons" id="login--button">Login</button>
            </header>
            <main className="home--main">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et officia accusantium eaque velit repudiandae quam repellendus enim hic, ut incidunt reiciendis dignissimos nemo! Molestias, rerum iure illo provident non consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, debitis!</main>
            <footer className="home--footer">
                <i className="facebook--link">facebook</i>
                {"|"}
                <i className="twitter--link"> twitter</i>
            </footer>
        </div>
    )
}