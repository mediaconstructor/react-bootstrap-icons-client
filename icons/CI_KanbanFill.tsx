
"use client";
import React from "react";
import {IconProps, KanbanFill} from "react-bootstrap-icons";

export const CI_KanbanFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <KanbanFill {...props}/>
        </>
    );
}
