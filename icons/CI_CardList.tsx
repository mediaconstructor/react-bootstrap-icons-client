
"use client";
import React from "react";
import {IconProps, CardList} from "react-bootstrap-icons";

export const CI_CardList : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CardList {...props}/>
        </>
    );
}
