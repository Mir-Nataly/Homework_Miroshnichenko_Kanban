
import css from './Header.module.css'
/* import UserMenu from '../../assets/user-menu.svg' */

import Dropdown from '../dropdown/Dropdown'

function Header() {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.foto}>
				{/* <button className={css.btn}>
					<img src={UserMenu} alt=''/> */}
					{/* <select>
						<option></option>
            			<option>Profile</option>
            			<option>Log out</option>
          			</select> */}
				{/* </button> */}
				<Dropdown />
			</div>
		</header>
	)
}

export default Header