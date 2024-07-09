import "./loading.scss";
import Text from "../text/text";
import {useEffect, useState} from "react";
import Row from "../row/row";
import Column from "../column/column";

const loading = () => {
  const chars = "---___...,,,:::;;;///\\\|||!?=&%#@{}[]()0123456789";

  const [text1, setText1] = useState<string>("::::::::");
  const [text2, setText2] = useState<string>(":");
  const [text3, setText3] = useState<string>(":::::::::::::::");

  useEffect(() => {
    const interval = setInterval(() => {

      setText1((prevState) =>
          Array
          .from(Array(prevState.length > 21 ? 1 : prevState.length + 1))
          .map(() => chars[Math.floor(Math.random() * (chars.length - 1))])
          .join("")
      )

      setText2((prevState) =>
          Array
          .from(Array(prevState.length > 21 ? 1 : prevState.length + 1))
          .map(() => chars[Math.floor(Math.random() * (chars.length - 1))])
          .join("")
      )

      setText3((prevState) =>
          Array
          .from(Array(prevState.length > 21? 1 : prevState.length + 1))
          .map(() => chars[Math.floor(Math.random() * (chars.length - 1))])
          .join("")
      )
    }, 50)

    return () => clearInterval(interval)
  }, []);

  return (
      <Row width={true} align="center">
        <Column>
          <Text type="s" primary={false} mono={false}>Loading</Text>
          <Text type="p" primary={true} mono={true}>{text1}</Text>
          <Text type="p" primary={true} mono={true}>{text2}</Text>
          <Text type="p" primary={true} mono={true}>{text3}</Text>
        </Column>
      </Row>
  )
}

export default loading
