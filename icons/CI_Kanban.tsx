
"use client";
import React from "react";
import {IconProps, Kanban} from "react-bootstrap-icons";

export const CI_Kanban : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Kanban {...props}/>
        </>
    );
}
