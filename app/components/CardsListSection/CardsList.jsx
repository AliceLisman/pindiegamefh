import { CardsListSlider } from "./CardListSlider";
import { CardsListSection } from "./CardsListSection";
import Styles from "./CardListSlider.module.css";

export const CardsList = (props) => {
  return (
<section className={Styles["list-section"]}>
<h2 className={Styles["list-section__title"]} id={props.id}>
  {props.title}
</h2>
{props.isSlider ? (
     <CardsListSlider {...props}/> 
) : ( 
     <CardsListSection {...props}/>
)}
</section>
);
  };