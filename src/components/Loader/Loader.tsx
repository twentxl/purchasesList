import style from './Loader.module.css';

interface LoaderProps {
    visible: boolean;
}
const Loader: React.FC<LoaderProps> = ({ visible }) => {
    return visible ? (
        <div className={style.loader}>
            <div className={style.circle} />
            <span className={style.text}>Loading...</span>
        </div>
    ) : null;
};

export default Loader;