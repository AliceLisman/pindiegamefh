"use client";

import { endpoints } from '../api/config'
import {useGetDataByCategory } from '../api/api-hooks'
import { CardsListSection } from '../components/CardsListSection/CardsListSection';
import { Preloader } from '../components/Preloader/Preloader';

export default  function shooters() {
	const shooterGames = useGetDataByCategory(endpoints.games, 'shooter')
	return (
		<main className={'main-inner'}>
			{ shooterGames ? <CardsListSection id='shooter' title='шутеры' data={shooterGames} />  : <Preloader /> }
		</main>
	);
};
