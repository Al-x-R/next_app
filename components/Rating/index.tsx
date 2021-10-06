import React, { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';
import clsx from 'clsx';

import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = forwardRef(({ isEditable = false, rating, setRating, error, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (r === i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

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
          aria-invalid={error ? true : false}
          aria-valuenow={rating}
          aria-valuemax={5}
          aria-label={isEditable ? 'Укажите рейтинг' : ('рейтинг' + rating)}
          aria-valuemin={1}
          ref={r => ratingArrayRef.current?.push(r)}
          tabIndex={computeFocus(rating, i)}
          onKeyDown={handleKey}
          role={isEditable ? 'slider' : ''}
        >
          <StarIcon />
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

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div {...props} ref={ref} className={clsx(styles.ratingWrapper, {
      [styles.error]: error
    })}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});

export default Rating;
