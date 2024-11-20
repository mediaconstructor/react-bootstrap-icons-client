
"use client";
import React from "react";
import {IconProps, Upc} from "react-bootstrap-icons";

export const CI_Upc : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Upc {...props}/>
        </>
    );
}
