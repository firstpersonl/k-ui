import React, { FC, MouseEvent} from 'react';

import style from './Button.module.scss';

type ButtonType = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
    type?: ButtonType,
    disabled?: boolean,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({ children, type = 'contained', disabled = false, onClick}) => {
    return (
        <button className={`${style.k_button} ${style[type]}`} disabled={disabled} onClick={onClick}>{children}</button>
    );
}

export default Button;