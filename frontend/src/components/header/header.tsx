import "./header.scss";
import {useState} from "react";
import Drawer from "../drawer/drawer";
import HeaderLink, {HeaderLinkProps} from "./link/header-link";
import IconButton from "../icon/button/icon-button";
import Image from "../image/image";
import HeaderSublink, {HeaderSublinkProps} from "./sublink/header-sublink";
import Text from "../text/text";

export interface HeaderProps {
  links: HeaderLinkProps[],
  sublinks: HeaderSublinkProps[],
}

const Header = (props: HeaderProps) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
      <header className="header">
        <Image src="https://jublawoma.ch/static/media/woma.ab034472385e8e5df883.png" alt="logo" rounded={false} height={5}/>
        <IconButton onClick={() => setOpen(!open)} highlight={false}>menu</IconButton>
        <Drawer open={open} setOpen={setOpen} title="">
          <div className="header__navigation">
            <Text type="s" primary={false}>Weiteres</Text>
            <Text type="s" primary={false}>Menu</Text>
            <div className="header__navigation__links">
              {
                props.sublinks.map((sublink, index) => <HeaderSublink {...sublink} key={index}/>)
              }
            </div>
            <div className="header__navigation__links">
              {
                props.links.map((link, index) => <HeaderLink {...link} key={index}/>)
              }
            </div>
          </div>
        </Drawer>
      </header>
  )
}

export default Header
