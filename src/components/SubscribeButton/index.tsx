import React from "react";
import style from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button type="button" className={style.subscribeButton}>
      Subscribe now
    </button>
  );
};

export default SubscribeButton;
