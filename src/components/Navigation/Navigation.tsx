import type { FC } from "react";
import NavLink from "../NavLink/NavLink";

const Navigation: FC = () => {
	return (
		<nav className='flex gap-3'>
			<NavLink href='/'>Домашняя</NavLink>
		</nav>
	);
};

export default Navigation;
