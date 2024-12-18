import { Trash2 } from 'react-feather';
import "./TodoListItem.css";

const TodoListItem = ({item, updateTodo, deleteTodo}) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        deleteTodo()
    }

    return (
        <div className="listitemWrapper" onClick={updateTodo}>
            <div className='itemContainer'>
                <div className="listItem">
                    <input type='checkbox' className='checkBox' checked={item.completed} value={item.completed} onChange={updateTodo} />
                    <div className={item.completed ? 'completedItem' : ''}>{item.todo}</div>
                </div>
                <div className='deleteIcon' onClick={handleDelete}><Trash2 /></div>
            </div>
        </div>
    )
}

export default TodoListItem;