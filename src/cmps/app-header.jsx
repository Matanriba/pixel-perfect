import logo from '../assets/img/logo.svg';

export function AppHeader() {

    return (
        <nav className="app-header flex space-between">
            <div className="left-nav flex">
                <img className="logo" src={logo} alt="logo" />
                <a href="#">home</a>
                <a href="#">about</a>
            </div>
            <div className="right-btn">
                <button>contact us</button>
            </div>
        </nav>
    )
}