
"use client";
import React from "react";
import {IconProps, GenderTrans} from "react-bootstrap-icons";

export const CI_GenderTrans : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GenderTrans {...props}/>
        </>
    );
}
