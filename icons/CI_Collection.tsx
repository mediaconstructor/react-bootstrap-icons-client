
"use client";
import React from "react";
import {IconProps, Collection} from "react-bootstrap-icons";

export const CI_Collection : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Collection {...props}/>
        </>
    );
}
