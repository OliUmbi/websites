import "./breadcrumbs.scss";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import Row from "../row/row";
import Text from "../text/text";

const Breadcrumbs = () => {

  let location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<{name: string, path: string}[]>([])

  useEffect(() => {
    const url = decodeURI(location.pathname).split("/");
    const crumbs: {name: string, path: string}[] = []

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
        <Row width={true} align="center" wrap="wrap">
          {
            breadcrumbs.map((breadcrumb, index) => (
                <Row align="center" wrap="never" key={index}>
                  <Text type="p" primary={false} mono={true}>/</Text>
                  <Link className="breadcrumbs" to={breadcrumb.path}>
                    <Text type="s" primary={breadcrumbs.length - 1 === index} mono={true}>{breadcrumb.name}</Text>
                  </Link>
                </Row>
            ))
          }
        </Row>
      </>
  )
}

export default Breadcrumbs
