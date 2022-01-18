import "./topbar.scss";


export default function Topbar() {
    return (
        <div className="topbar active">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        YAZAN DEEK
                    </a>
                    <div className="itemContainer">

                        <span>+44 924 12 74</span>
                    </div>
                    <div className="itemContainer">

                        <span>info@yazandeek.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>

                </div>
            </div>
        </div>

    );
}