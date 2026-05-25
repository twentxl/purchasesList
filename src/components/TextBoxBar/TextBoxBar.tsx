import { useState } from 'react';
import style from './TextBoxBar.module.css';

interface TextBoxBarProps {
    onAddItem: (text: string) => void;
}
const TextBoxBar: React.FC<TextBoxBarProps> = ({ onAddItem }) => {
    const [inputText, setInputText] = useState<string>('');

    const addClick = () => {
        if (inputText.trim()) {
            onAddItem(inputText);
            setInputText('');
        }
    }

    return (
        <div className={style.textBoxBar}>
            <input type='text' className={style.textBox} placeholder='Введите текст' value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ paddingRight: '50px' }} />
            <button className={`${style.button} ${style.addBtn}`} onClick={addClick}>
                +
            </button>
        </div>
    )
};

export default TextBoxBar;