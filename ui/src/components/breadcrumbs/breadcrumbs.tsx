import "./breadcrumbs.scss";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Text from "../text/text";
import Flex from "../flex/flex";

const Breadcrumbs = () => {

  let location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<{ name: string, path: string }[]>([])

  useEffect(() => {
    const url = decodeURI(location.pathname).split("/");
    const crumbs: { name: string, path: string }[] = []

    crumbs.push({
      name: "home",
      path: "/"
    })

    for (let i = 1; i < url.length; i++) {

      let name = url[i]

      if (!name) {
        continue;
      }

      if (name.length > 16) {
        name = name.substring(0, 14) + "..."
      }

      crumbs.push({
        name: name,
        path: url.slice(0, i + 1).join("/")
      })
    }

    setBreadcrumbs(crumbs)
  }, [location]);

  return (
      <>
        <Flex xl={{width: true, direction: "row", align: "center", wrap: "always"}}>
          {
            breadcrumbs.map((breadcrumb, index) => (
                <Flex xl={{direction: "row", align: "center", wrap: "never"}} key={index}>
                  <Text type="p" mono={true}>/</Text>
                  <Link className="breadcrumbs" to={breadcrumb.path}>
                    <Text type="s" primary={breadcrumbs.length - 1 === index} mono={true}>{breadcrumb.name}</Text>
                  </Link>
                </Flex>
            ))
          }
        </Flex>
      </>
  )
}

export default Breadcrumbs
