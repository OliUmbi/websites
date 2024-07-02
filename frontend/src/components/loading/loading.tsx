import "./loading.scss";
import Text from "../text/text";
import {useEffect, useState} from "react";
import Row from "../row/row";
import Column from "../column/column";

const loading = () => {
  const chars = "---___...,,,:::;;;///\\\|||$£!?^~?=&%*#@+¦§{}[]()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const [text, setText] = useState<string>("-");

  useEffect(() => {
    const interval = setInterval(() => {

      setText((prevState) =>
          Array
          .from(Array(prevState.length > 50 ? 1 : prevState.length + 1))
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
          <Text type="p" primary={true} mono={true}>{text}</Text>
        </Column>
      </Row>
  )
}

export default loading
