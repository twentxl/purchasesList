import React from 'react';
import style from './Item.module.css';
import { FaTrashCan } from "react-icons/fa6";

interface ItemProps {
    id: string,
    text: string;
    onDelete: (id: string) => void;
}
const Item: React.FC<ItemProps> = ({ id, text, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm('Удалить элемент?')) {
        await onDelete(id);
        }
    };

    return (
        <li className={style.item} id={id}>
            <div>
                <span>{text}</span>
            </div>

            <button className={style.deleteBtn} onClick={handleDelete} aria-label="Delete item">
                <FaTrashCan size={20}/>
            </button>
        </li>
    )
};

export default Item;