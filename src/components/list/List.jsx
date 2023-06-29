import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COLORS } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'
import ChangeStatus from '../ChangeStatus/ChangeStatus'

const List = props => {
	const {type, title, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

	return (
		<div>
			<div className={css.list}>
				<h2 className={css.listTitle}>{title}</h2>
				{tasks.length? 
					tasks.map(task => 
						<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
							<div className={css.task} style={{background: LIST_COLORS[task.status]}}>{task.title}</div>
						</Link>
				) : 
					<p>No tasks added yet</p>
				}
				{type === LIST_TYPES.BACKLOG && <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>}
				{type === LIST_TYPES.BACKLOG && isFormVisible && (
					<FormAddNewTask formSubmit={formSubmit} />
				)}
				{type === LIST_TYPES.READY && <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>}
				{type === LIST_TYPES.READY && isFormVisible && (
					<ChangeStatus formSubmit={formSubmit} />
				)}
				{type === LIST_TYPES.IN_PROGRESS && <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>}
				{type === LIST_TYPES.IN_PROGRESS && isFormVisible && (
					<ChangeStatus formSubmit={formSubmit} />
				)}
				{type === LIST_TYPES.DONE && <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>}
				{type === LIST_TYPES.DONE && isFormVisible && (
					<ChangeStatus formSubmit={formSubmit} />
				)}
			
			</div>
		</div>
	)
}

export default List
