import styles from "../../styles/Home.module.css";
import Image from "next/image";
import topPick from "../../public/box-spring-bed-with-tall-head-and-footboards-13-600x450.jpg";

export default function TopImage() {
  return (
    <div className={styles.centeredImage}>
      <h1>Welcome to my testing website!</h1>
      <Image src={topPick} alt="example pick" />
      <h3>
        This is a testing website. It needs some improvement, of course. This
        includes styles. I will try to spiff it up later.
      </h3>
    </div>
  );
}
