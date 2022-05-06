import { FC } from "react";

type props = {
  fname: string;
  size: number;
};

const Image: FC<props> = (props) => {
  let fname = "./" + props.fname;
  let size = props.size + "px";
  return <img alt="" src={fname} style={{ width: size, border: 1 }} />;
};

export default Image;
