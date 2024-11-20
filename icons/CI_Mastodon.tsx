
"use client";
import React from "react";
import {IconProps, Mastodon} from "react-bootstrap-icons";

export const CI_Mastodon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Mastodon {...props}/>
        </>
    );
}
