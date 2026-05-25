import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className='container'>
                <span>&copy; 2026 TwentXL. No-commerce. t is used for personal purposes and is not a product.</span>
            </div>
        </footer>
    )
};

export default Footer;