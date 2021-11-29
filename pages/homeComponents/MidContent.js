import styles from "../../styles/Home.module.css";
import firstImage from "../../public/box-spring-bed-with-tall-head-and-footboards-13-600x450.jpg";
import secondImage from "../../public/bunk-bed-with-6-drawers-and-sloped-stairs-platform-base-6-600x450.jpg";
import Image from "next/image";

export default function MidContent() {
  return (
    <div>
      <div className={styles.leftImage}>
        <Image src={firstImage} alt="albert weand pumpkin picture" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra
          in massa at pellentesque. Vestibulum quis ultricies sapien. Nunc
          viverra gravida viverra. Integer porttitor nibh eget pulvinar mollis.
          Phasellus porta imperdiet molestie. Cras pulvinar facilisis justo,
          sagittis placerat enim interdum ut. Morbi congue massa quis iaculis
          dignissim. Cras vel porttitor ante. Nulla facilisi. Mauris nec lacinia
          sem. Mauris varius leo ipsum. Sed ac tristique neque, eget mollis
          tellus.{" "}
        </h2>
      </div>
      <div className={styles.rightImage}>
        <Image src={secondImage} alt="adrian bush joyride comp. picture" />
        <h2>
          Aenean placerat lorem non aliquam volutpat. Nunc nec auctor ipsum.
          Cras mattis euismod arcu non tincidunt. Cras non velit et augue
          egestas commodo. Ut eros nunc, dictum non facilisis eget, tempus
          ultricies nulla. Mauris eu vehicula massa. Quisque lacus libero,
          accumsan at fringilla mattis, vestibulum a enim. Etiam posuere tortor
          tortor, et volutpat nisl aliquet sed. Mauris elementum aliquet purus,
          nec tempor risus gravida a. Suspendisse pharetra odio nisi, sed
          hendrerit dolor mollis ut. Ut tristique ligula vitae nunc tempus
          tempor.{" "}
        </h2>
      </div>
    </div>
  );
}
