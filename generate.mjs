import * as Icons from "react-bootstrap-icons";
import fs from "node:fs";

const template = (iconName) => 
`
"use client";
import React from "react";
import {IconProps, ${iconName}} from "react-bootstrap-icons";

export const CI_${iconName} : React.FC<IconProps> = (props) => {
    return (
        <>
            <${iconName} {...props}/>
        </>
    );
}
`;

function generate() {

    const iconNames = Object.keys(Icons).filter(name => name !== "__esModule" && name !== "default");
    if(!fs.existsSync("icons/")) {
        fs.mkdir("icons")
    }
        
    iconNames.forEach(icon => {
        fs.writeFileSync("icons/CI_"+icon+".tsx", template(icon));
    })
    
}

generate();