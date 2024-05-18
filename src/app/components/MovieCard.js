import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt="hello"
            width={260}
            height={200}
          />
          <div className={styles.card_data}>
            <h2>{title.substring(0,18)}</h2>
            <p>`{synopsis.substring(0,68)} ...`</p>
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
