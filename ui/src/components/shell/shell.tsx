import "./shell.scss";
import Image from "../image/image";
import Text from "../text/text";
import {ReactNode, useState} from "react";
import {Link} from "react-router-dom";
import Drawer from "../drawer/drawer";
import IconButton from "../icon/button/icon-button";
import ShellLink from "./link/shell-link";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Flex from "../flex/flex";

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
      <div className="shell" data-side={props.side}>
        <Link className="shell__logo" to="/">
          {
            props.logo ? (
                <Image src={props.logo} alt={props.title} side="height" rounded={false}/>
            ) : (
                <Text type="h3" primary={true}>{props.title}</Text>
            )
          }
        </Link>
        <div className="shell__breadcrumbs">
          <Breadcrumbs/>
        </div>
        <div className="shell__navigation" data-side={props.side}>
          <IconButton onClick={() => setOpen(!open)} highlight={false}>menu</IconButton>
          <Drawer open={open} setOpen={setOpen} title="Navigation">
            <Flex xl={{direction: "column", height: true, justify: "center"}}>
              <Flex xl={{direction: "row", gap: 4, wrap: "reverse"}}>
                <Flex xl={{direction: "column", gap: 1}}>
                  <Text type="s" mono={true}>Weiteres</Text>
                  {
                    props.links.filter(value => !value.primary).map((link, index) => <ShellLink {...link}
                                                                                                onClick={() => setOpen(false)}
                                                                                                key={index}/>)
                  }
                </Flex>
                <Flex xl={{direction: "column", gap: 1}}>
                  <Text type="s" mono={true}>Menu</Text>
                  {
                    props.links.filter(value => value.primary).map((link, index) => <ShellLink {...link}
                                                                                               onClick={() => setOpen(false)}
                                                                                               key={index}/>)
                  }
                </Flex>
              </Flex>
            </Flex>
          </Drawer>
        </div>
        <div className="shell__side" data-side={props.side}>
          <Flex xl={{direction: "column", gap: 4}}>
            <Flex xl={{direction: "column", gap: 1}}>
              {
                props.links.filter(value => value.primary).map((link, index) => <ShellLink {...link}
                                                                                           onClick={() => setOpen(false)}
                                                                                           key={index}/>)
              }
            </Flex>
            <Flex xl={{direction: "column", gap: 1}}>
              {
                props.links.filter(value => !value.primary).map((link, index) => <ShellLink {...link}
                                                                                            onClick={() => setOpen(false)}
                                                                                            key={index}/>)
              }
            </Flex>
          </Flex>
        </div>
        <div className="shell__body" data-side={props.side}>
          {props.children}
        </div>
      </div>
  )
}

export default Shell
