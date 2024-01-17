import AirbnbLogo from "../assets/airbnb-logo.png"

export default function Navbar(){
    return (
        <header className="navbar">
            <nav className="nav">
                <img src={AirbnbLogo} alt="Airbnb Logo" />
            </nav>
        </header>
    )
}