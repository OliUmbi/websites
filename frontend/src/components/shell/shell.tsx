import "./shell.scss";
import Image from "../image/image";
import Text from "../text/text";
import {ReactNode, useState} from "react";
import {Link} from "react-router-dom";
import Drawer from "../drawer/drawer";
import Column from "../column/column";
import Row from "../row/row";
import IconButton from "../icon/button/icon-button";
import ShellLink from "./link/shell-link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

interface Props {
  children: ReactNode
  title: string
  links: { name: string, to: string, primary: boolean }[]
  side: boolean
  logo?: string
}

const Shell = (props: Props) => {

  const [open, setOpen] = useState<boolean>(false)

  return (
      <div className="shell">
        <div className="shell__head">
          <Link className="shell__head__logo" to="/">
            {
              props.logo ? (
                  <Image src={props.logo} alt={props.title} side="height" rounded={false}/>
              ) : (
                  <Text type="h3" primary={true} mono={false}>{props.title}</Text>
              )
            }
          </Link>
          <div className="shell__head__navigation" data-side={props.side}>
            <IconButton onClick={() => setOpen(!open)} highlight={false}>menu</IconButton>
            <Drawer open={open} setOpen={setOpen} title="Navigation">
              <Column height={true} justify="center">
                <Row gap={4} wrap="reverse">
                  <Column gap={1}>
                    <Text type="s" primary={false} mono={true}>Weiteres</Text>
                    {
                      props.links.filter(value => !value.primary).map((link, index) => <ShellLink {...link} onClick={() => setOpen(false)} key={index}/>)
                    }
                  </Column>
                  <Column gap={1}>
                    <Text type="s" primary={false} mono={true}>Menu</Text>
                    {
                      props.links.filter(value => value.primary).map((link, index) => <ShellLink {...link} onClick={() => setOpen(false)} key={index}/>)
                    }
                  </Column>
                </Row>
              </Column>
            </Drawer>
          </div>
        </div>
        <div className="shell__body">
          {
            props.side ? (
                <div className="shell__body__side">
                  <Column gap={4}>
                    <Column gap={1}>
                      {
                        props.links.filter(value => value.primary).map((link, index) => <ShellLink {...link} onClick={() => setOpen(false)} key={index}/>)
                      }
                    </Column>
                    <Column gap={1}>
                      {
                        props.links.filter(value => !value.primary).map((link, index) => <ShellLink {...link} onClick={() => setOpen(false)} key={index}/>)
                      }
                    </Column>
                  </Column>
                </div>
            ) : ""
          }
          <div className="shell__body__content">
            {props.children}
          </div>
        </div>
      </div>
  )
}

export default Shell
