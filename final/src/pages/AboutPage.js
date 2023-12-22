import styles from "./pages.module.css";
import cx from "classnames";

export default function AboutPage({ isModalOpen }) {
  const aboutPageCX = cx(styles.aboutPage, {
    [styles.blurred]: isModalOpen,
  });

  return (
    <div className={aboutPageCX}>
      <p>This is a show-and-tell site made for sharing digital "curios".</p>
      <p>
        This site is typeset in Selectric Mono by Leonard Mabille, Copyright (c)
        2015.
      </p>
      <p>
        Created by{" "}
        <a href="https://joannesuk.com/" target="_blank" rel="noopener">
          Jo Suk
        </a>{" "}
        in 2023.
      </p>
    </div>
  );
}
