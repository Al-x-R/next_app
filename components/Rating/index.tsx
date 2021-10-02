import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';
import clsx from 'clsx';

import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = forwardRef(({ isEditable = false, rating, setRating, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={clsx(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplayRating(i + 1)}
          onMouseLeave={() => changeDisplayRating(rating)}
          onClick={() => changeRating(i)}
          ref={r => ratingArrayRef.current?.push(r)}
        >
          <StarIcon

            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(e, i)}
          />
        </span>

      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplayRating = (i: number) => {
    if (!isEditable)
      return;

    constructRating(i);
  };

  const changeRating = (i: number) => {
    if (!isEditable || !setRating)
      return;

    setRating(i + 1);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
    if (e.code !== 'Space' || !setRating)
      return;

    setRating(i + 1);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
});

export default Rating;
