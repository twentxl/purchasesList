import style from './Toast.module.css';

interface ToastProps {
    text: string;
    variant: string;
}
const Toast: React.FC<ToastProps> = ({ text, variant }) => {
    return (
        <div className={style.toast} data-variant={variant}>
            {text}
        </div>
    )
};

export default Toast;