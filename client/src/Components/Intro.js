import { 
    Link
} from "react-router-dom"

export default function Intro(){
    return(
        <main className="intro--main">
            <div className="welcome--header--buttons">
                <Link  id="Link--wrapper--signupButton" to={'signup'}>
                    <button id="signup--button" >Sign Up</button>
                </Link>
                <Link
                    className="welcome--header--login--button" 
                    to={'login'}
                >
                    <button id="login--button">Login</button>
                </Link>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi debitis voluptatem rerum, voluptate nisi aspernatur! Maxime sint reprehenderit magni, voluptates aspernatur molestiae voluptatibus! Aliquam expedita adipisci odit quia, accusantium optio quidem praesentium nam mollitia et id animi corporis tempore voluptates. Iure quod praesentium at ad ipsa incidunt sed quo.
            </main>
    )
}