
"use client";
import React from "react";
import {IconProps, Joystick} from "react-bootstrap-icons";

export const CI_Joystick : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Joystick {...props}/>
        </>
    );
}
