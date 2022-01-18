import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        YAZAN <span id="fnt-1">DEEK</span>
                    </a>
                    <div className="itemContainer">

                        <span>445 400 4229</span>
                    </div>
                    <div className="itemContainer">

                        <span id="email">info@yazandeek.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}