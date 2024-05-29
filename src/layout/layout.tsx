import React, { ReactNode } from "react";
import "./layout.scss";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = (props) => {
  return <div className="__layout">{props.children}</div>;
};

export default Layout;
