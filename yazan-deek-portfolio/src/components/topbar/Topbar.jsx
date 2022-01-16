import "./topbar.scss"
import from { Person, Mail } from "@materail-ui/icons"


function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    < a href="#intro" className="logo">YAZAN DEEK.</a> </div>

                <div className="itemContainer">
                    <Person />
                    <span>+44 425 66 7</span>
                </div>

                <div className="right"></div>
            </div>
        </div>
    )
}

export default Topbar
