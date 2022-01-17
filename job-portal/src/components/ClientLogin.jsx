import {Link} from "react-router-dom";

function ClientLogin(){
    const handleChange = ()=>{}
    const handleSubmit = ()=>{}
    return (
        <div>
            <h1>CLIENT LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={handleChange} />
                <input type="text" name="password" placeholder="password" onChange={handleChange} />
                <Link to="/client_dashboard"> <input type="submit" value="login" /> </Link>  
            </form>
        </div>
    )

}

export default ClientLogin;