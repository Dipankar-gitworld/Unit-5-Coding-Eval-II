import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
            <h1>WHO ARE YOU</h1> <br />

            <Link to="/client_login" ><button>Client</button></Link>

            <Link to="/company_login" ><button>Company</button></Link>
            
        </div>
    )
}

export default Home;