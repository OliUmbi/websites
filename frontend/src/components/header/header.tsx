import "./header.scss";
import {useState} from "react";
import Drawer from "../drawer/drawer";
import HeaderLink from "./link/header-link";
import IconButton from "../icon/button/icon-button";
import Image from "../image/image";
import HeaderSublink from "./sublink/header-sublink";
import Text from "../text/text";

export interface HeaderProps {
  links: {name: string, to: string}[],
  sublinks: {name: string, to: string}[],
}

const Header = (props: HeaderProps) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
      <header className="header">
        <Image src="https://jublawoma.ch/static/media/woma.ab034472385e8e5df883.png" alt="logo" rounded={false} height={5}/>
        <IconButton onClick={() => setOpen(!open)} highlight={false}>menu</IconButton>
        <Drawer open={open} setOpen={setOpen} title="">
          <div className="header__navigation">
            <div className="header__navigation__links">
              <Text type="s" primary={false}>Weiteres</Text>
              {
                props.sublinks.map((sublink, index) => <HeaderSublink {...sublink} onClick={() => setOpen(false)} key={index}/>)
              }
            </div>
            <div className="header__navigation__links">
              <Text type="s" primary={false}>Menu</Text>
              {
                props.links.map((link, index) => <HeaderLink {...link} onClick={() => setOpen(false)} key={index}/>)
              }
            </div>
          </div>
        </Drawer>
      </header>
  )
}

export default Header
