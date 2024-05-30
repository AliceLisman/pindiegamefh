"use client";

import { endpoints } from '../api/config'
import { useGetDataByCategory } from '../api/api-hooks'
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/Preloader';

  export default function runner() { 
    const runnerGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
        {runnerGames ? <CardsListSection id='runner' title='ранеры' data={runnerGames} /> : <Preloader />}
      </main>
    );
	}