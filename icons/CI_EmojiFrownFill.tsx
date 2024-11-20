
"use client";
import React from "react";
import {IconProps, EmojiFrownFill} from "react-bootstrap-icons";

export const CI_EmojiFrownFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EmojiFrownFill {...props}/>
        </>
    );
}
