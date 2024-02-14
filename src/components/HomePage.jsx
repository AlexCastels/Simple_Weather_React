import { Link } from "react-router-dom";

export function HomePage(){
    return (
        <div className="homepage">
            <div className="title">
                <h1>My Weather web-app!</h1>
            </div>
            <div className="link-container">
                | <Link className="link" to='welcome'>Welcome</Link> | <Link className="link" to='weather'>Weather</Link> |
            </div>
        </div>
    )
}