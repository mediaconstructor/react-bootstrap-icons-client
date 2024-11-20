
"use client";
import React from "react";
import {IconProps, Filter} from "react-bootstrap-icons";

export const CI_Filter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Filter {...props}/>
        </>
    );
}
