import logo from '../assets/img/logo.svg';
import facebook from '../assets/img/icon-facebook.svg';
import pinterest from '../assets/img/icon-pinterest.svg';
import twitter from '../assets/img/icon-twitter.svg';

export function AppFooter() {

    return (
        <section>
            <div className="left-nav">
                <img src={logo} alt="" />
                <div className="nav-container">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                </div>
            </div>
            <div className="details">
                <p>987  Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p>
            </div>
            <div className="social">
                <img src={facebook} alt="" />
                <img src={pinterest} alt="" />
                <img src={twitter} alt="" />
                <small>Copyright 2020. All Rights Reserved</small>
            </div>
        </section>
    )
}