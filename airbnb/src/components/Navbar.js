import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <div>
            <nav>
                <img className="nav--logo" src={airbnbLogo} alt="Airbnb logo"/>
            </nav>
        </div>
    );
}