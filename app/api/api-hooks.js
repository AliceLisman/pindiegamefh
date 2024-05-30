'use client';

import {useState, useEffect} from 'react';
import {getNormalizedGamesDataByCategory} from './api-utils';
import { endpoints } from "./config";
import { CardsList } from '../components/CardsListSection/CardsList'; 
import { Preloader } from '../components/Preloader/Preloader'; 

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
      async function fetchData() {
        const data = await getNormalizedGamesDataByCategory(endpoint, category);
        setData(data);
      }
      fetchData();
    }, []);
    return data;
  };

  export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsList id="new" title="Новые" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }