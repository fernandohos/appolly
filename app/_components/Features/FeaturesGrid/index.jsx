import styles from "./styles.module.css";
import featuresPhone from "@public/features-phone.png";
import chatIcon from "@public/chat-icon.svg";
import siteIcon from "@public/site-icon.svg";
import penIcon from "@public/pen-icon.svg";
import phoneIcon from "@public/phone-icon.svg";
import retinaIcon from "@public/retina-icon.svg";
import supportIcon from "@public/support-icon.svg";
import Image from "next/image";
import { Card } from "../Card";

export function FeaturesGrid() {
  return (
    <div className={styles.container}>
      <Card
        icon={chatIcon}
        title="FULL FREE CHAT"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.chat}
      />
      <Card
        icon={siteIcon}
        title="UNLIMITED FEATURES"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.feature}
      />
      <Card
        icon={penIcon}
        title="AWESOME UI DESIGN"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.design}
      />
      <Card
        icon={phoneIcon}
        title="IOS & ANDROID VERSION"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.android}
      />
      <Card
        icon={retinaIcon}
        title="RETINA READY GRAPHICS"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.retina}
      />
      <Card
        icon={supportIcon}
        title="24/7 SUPPORT BY REAL PEOPLE"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        className={styles.support}
      />
      <div className={styles.phoneImage}>
        <Image
          src={featuresPhone}
          alt="phone with banking app open showing charts with income and expenses"
          fill
          sizes="575px 1012px"
        />
      </div>
    </div>
  );
}
