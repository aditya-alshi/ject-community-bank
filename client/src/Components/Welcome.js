import { 
    Outlet 
} from "react-router-dom"

export default function Welcome(){
    return(
        <div className="welcome--wrapper">
            <header className="welcome--header">
                <h1>Ject Communit Bank</h1>
                
            </header>
            <div className="welcome--main">
                <Outlet />
            </div>
            <footer className="welcome--footer">
                <i className="facebook--link">facebook</i>
                {"|"}
                <i className="twitter--link"> twitter</i>
            </footer>
        </div>
    )
}