
"use client";
import React from "react";
import {IconProps, Link} from "react-bootstrap-icons";

export const CI_Link : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Link {...props}/>
        </>
    );
}
