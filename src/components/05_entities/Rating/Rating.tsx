import { useEffect, useState, KeyboardEvent } from "react";

import { RatingProps } from "./Rating.props";
import styles from './Rating.module.scss';

import StarIcon from '~svg/star-rating.svg';

const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props }: RatingProps): JSX.Element => {

  // стейт массива иконок рейтинга
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  // функция для формирования и заполнения рейтинга
  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((element, index) => {

      const fill = index < currentRating ? styles.filled : ''; // условие для заполнения иконок в зависимости от рейтинга
      const editable = isEditable ? styles.filled_editable : ''; // условие для реализации наведения при изменении

      return (
        <span className={`${styles.star} ${fill} ${editable} `}
              key={ index }
              onMouseEnter={() => {
                hoverIcon(index + 1);
                }
              } // при наведении мыши - отображение рейтинга меняется
              onMouseLeave={() => hoverIcon(rating)} // при убирании мыши - возвращается на прежнее значение
              onClick={() => onClick(index + 1)}
              >
          <StarIcon tabIndex={isEditable ? 0 : -1}
          />
        </span>
        );
    });
    setRatingArray(updatedArray);
  };

  // проверяем, есть ли возможность редактирования рейтинга
  const hoverIcon = (index: number) => {
    if (!isEditable) {
      return; // если нет, то ничего не делаем
    } // и если да - при наведении отображаем новый рейтинг
    constructRating(index);
  };

  // проверяем есть ли возможность задать новый рейтинг
  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return; // если нет, то ничего не делаем
    } //
    setRating(index);
  };

  // эффект отображения рейтинга
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  // возвращаем массив корректно заполненных в зависимости от рейтинга иконок
  return (
    <div  className={styles.ratingContainer} {...props}>
      {ratingArray.map((element, index) => (
        <>
          { element }
        </>
      ))}
    </div>
  );
};

export { Rating };
