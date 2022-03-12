import React from "react";
import { FC } from "react";

import style from './Card.module.scss';

const Card: FC<{}> = ({children}) => {
    return (
        <div className={style.k_card}>{children}</div>
    )
}

export default Card;