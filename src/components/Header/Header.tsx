import style from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={style.logo}>
                    <img src={logo} alt='logo img' />
                    <span>Purchases</span>
                </div>
            </div>
        </header>
    )
};

export default Header;