import type { ComponentProps, FC } from "react";

const PageButton: FC<ComponentProps<"button">> = ({ children, ...props }) => {
	const { disabled } = props;

	const classes = `rounded-full bg-purple-400 aspect-square h-9 text-stone-50
    ${disabled ? `opacity-60` : `cursor-pointer`}
    `;

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};

export default PageButton;
