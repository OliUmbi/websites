import "./loading.scss";
import Text from "../text/text";
import {useEffect, useState} from "react";
import Flex from "../flex/flex";
import {c} from "vite/dist/node/types.d-aGj9QkWt";

const loading = () => {
 // const chars = "---___...,,,:::;;;///\\\|||!?=&%#@{}[]()0123456789";
  const chars = ":;/\|!?&#{}[]()";

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
      <Flex xl={{width: true, direction: "row", align: "center"}}>
        <Flex xl={{direction: "column"}}>
          <Text type="s">Loading</Text>
          <Text type="p" primary={true} mono={true}>{text1}</Text>
          <Text type="p" primary={true} mono={true}>{text2}</Text>
          <Text type="p" primary={true} mono={true}>{text3}</Text>
        </Flex>
      </Flex>
  )
}

export default loading
