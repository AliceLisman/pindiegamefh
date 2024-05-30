"use client";

import { endpoints } from "../api/config"
import {useGetDataByCategory} from "../api/api-hooks"
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

  export default function popular() { 
   const popularGames = useGetDataByCategory(endpoints.games, "popular");
   return (
     <main className="main-inner">
       {popularGames ? <CardsListSection id="popular" title="Попульрные" data={popularGames} /> : <Preloader />}
     </main>
   );
      }