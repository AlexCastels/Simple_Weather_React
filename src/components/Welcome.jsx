import { Link } from "react-router-dom";

export function Welcome({username}){
    return (
        <div className="welcome">
            <h2>Grazie per aver scelto la nostra app, {username}!</h2>
            <span>| <Link className='link' to='/'>Go back</Link> |</span>
        </div>
    )
}