import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css"



const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "003bf91e8cmshe29722ef1770ed5p1d3f2djsn5729e6d0ed5e",
      "X-RapidAPI-Host": "netflix-data.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Movies And Series</h1>
          <div className={styles.card_section}>

          {main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
