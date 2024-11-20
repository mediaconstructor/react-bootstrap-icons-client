
"use client";
import React from "react";
import {IconProps, PiggyBank} from "react-bootstrap-icons";

export const CI_PiggyBank : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PiggyBank {...props}/>
        </>
    );
}
