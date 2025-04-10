import React from "react"; 
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey!</b> <br />Discover stories, ideas, and insights from around the world — all in one place.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Words That Inspire. Ideas That Resonate.</h1>
          <p className={styles.postDesc}>
            Welcome to a space where every post is more than just words&mdash;it&rsquo;s a window into fresh perspectives, thought-provoking ideas, and creative sparks. Whether you&rsquo;re here to learn something new, get inspired, or simply enjoy a good read, this blog is your companion on a journey of discovery. Explore stories that stir emotion, insights that ignite thought, and content that fuels your curiosity and passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
