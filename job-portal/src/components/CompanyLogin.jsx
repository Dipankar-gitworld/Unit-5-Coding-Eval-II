import {Link} from "react-router-dom";
function CompanyLogin(){
    const handleSubmit = (e)=>{
        e.preventdefault();
    }
    return (
        <div>
            <h1>COMPANY LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username"  />
                <input type="text" name="password" placeholder="password"  />
               <Link to="/company_dashboard"> <input type="submit" value="login" /></Link>
            </form>
        </div>
    )

}

export default CompanyLogin;