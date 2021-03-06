import React from "react";
import styles from "./index.module.scss";

import { Logo } from "@components/atoms/logo";

export const Header: React.FC = () => {
  return (
    <div className={styles.header} data-testid="container">
      <Logo />
    </div>
  );
};
