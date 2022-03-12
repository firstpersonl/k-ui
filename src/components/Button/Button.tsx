import React, { FC } from 'react';

import style from './Button.module.scss';

export interface ButtonProps {
    label: string
}

const Button: FC<ButtonProps> = ({label}) => {
    return (
        <button className={style.k_button}>{label}</button>
    );
}

export default Button;