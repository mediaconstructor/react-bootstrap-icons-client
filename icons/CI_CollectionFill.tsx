
"use client";
import React from "react";
import {IconProps, CollectionFill} from "react-bootstrap-icons";

export const CI_CollectionFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CollectionFill {...props}/>
        </>
    );
}
