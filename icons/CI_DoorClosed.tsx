
"use client";
import React from "react";
import {IconProps, DoorClosed} from "react-bootstrap-icons";

export const CI_DoorClosed : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DoorClosed {...props}/>
        </>
    );
}
