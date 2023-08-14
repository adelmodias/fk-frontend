import { HeaderWrap } from "./style";

import logoSvg from "../../assets/fk-logo.svg";

export function Header() {
    return (
        <HeaderWrap>
            <div className="container">
                <img src={logoSvg} alt="FK Social" />
            </div>
        </HeaderWrap>
    );
}
