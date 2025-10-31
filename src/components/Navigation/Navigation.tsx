import type { FC } from "react";
import NavLink from "../NavLink/NavLink";

const Navigation: FC = () => {
	return (
		<nav className='flex gap-3'>
			<NavLink href='/'>Домашняя</NavLink>
			<NavLink href='/create-product'>Создать</NavLink>
		</nav>
	);
};

export default Navigation;
