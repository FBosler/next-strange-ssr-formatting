import React from "react";
import Link from "next/link";
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter sticky="bottom">
            <div style={{ float: "left" }}>© 2020 Copyright: Fabian Bosler</div>
            <div style={{ float: "right", marginLeft: "auto" }}>
                <Link href="/about">
                    <a>About</a>
                </Link>
                {" "} 
                <Link href="/impressum">
                    <a>Impressum</a>
                </Link>
            </div>
        </StyledFooter>
    );
};

export default Footer;
