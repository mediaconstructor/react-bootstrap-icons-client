
"use client";
import React from "react";
import {IconProps, BagPlus} from "react-bootstrap-icons";

export const CI_BagPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BagPlus {...props}/>
        </>
    );
}
