import "./header.scss";
import {useState} from "react";
import Drawer from "../drawer/drawer";
import HeaderLink from "./link/header-link";
import IconButton from "../icon/button/icon-button";
import Image from "../image/image";
import HeaderSublink from "./sublink/header-sublink";
import Text from "../text/text";
import {NavLink} from "react-router-dom";
import Row from "../row/row";
import Column from "../column/column";

export interface Props {
  links: { name: string, to: string }[],
  sublinks: { name: string, to: string }[],
}

const Header = (props: Props) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
      <header className="header">
        <Row align="center" justify="space-between">
          <NavLink className="header__logo" to="/">
            <Image src="https://jublawoma.ch/static/media/woma.ab034472385e8e5df883.png" alt="logo" side="height" rounded={false}/>
          </NavLink>
          <IconButton onClick={() => setOpen(!open)} highlight={false}>menu</IconButton>
          <Drawer open={open} setOpen={setOpen} title="Navigation">
            <Column height={true} justify="center">
              <Row gap={4} wrap="reverse">
                <Column gap={1}>
                  <Text type="s" primary={false} mono={true}>Weiteres</Text>
                  {
                    props.sublinks.map((sublink, index) => <HeaderSublink {...sublink} onClick={() => setOpen(false)} key={index}/>)
                  }
                </Column>
                <Column gap={1}>
                  <Text type="s" primary={false} mono={true}>Menu</Text>
                  {
                    props.links.map((link, index) => <HeaderLink {...link} onClick={() => setOpen(false)} key={index}/>)
                  }
                </Column>
              </Row>
            </Column>
          </Drawer>
        </Row>
      </header>
  )
}

export default Header
