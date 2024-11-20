
"use client";
import React from "react";
import {IconProps, DoorOpen} from "react-bootstrap-icons";

export const CI_DoorOpen : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DoorOpen {...props}/>
        </>
    );
}
