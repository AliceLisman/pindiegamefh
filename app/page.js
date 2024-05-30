"use client";
import { getGamesByCategory } from "./data/data-utils";
import { Banner } from "./components/Banner/Banner";
import { CardsList } from "./components/CardsListSection/CardsList"; 
import { Promo } from "./components/Promo/Promo";
import { useEffect } from "react";
import { Preloader } from "./components/Preloader/Preloader";

export default async function Home() {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);

  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      {popularGames && newGames? (
      <>
       <CardsList 
       id="popular"
        title="Популярные" 
        data={popularGames} 
        isSlider={true}
      /> 
      <CardsList id="new"  title="Новинки" data={newGames} isSlider={true} />
      </>
      ) : (
        <Preloader />
      )}
      <Promo />
    </main>
  );
};