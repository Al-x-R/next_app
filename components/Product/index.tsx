import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

// import { Card } from '../Card/Card';
// import { Rating } from '../Rating/Rating';
// import { Tag } from '../Tag/Tag';
// import { Button } from '../Button/Button';
// import { declOfNum, priceRu } from '../../helpers/helpers';
// import { Divider } from '../Divider/Divider';
// import { Review } from '../Review/Review';
// import { ReviewForm } from '../ReviewForm/ReviewForm';
// import { motion } from 'framer-motion';
import { ProductProps } from './Product.props';

import styles from './Product.module.css';

const Product = ({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div>
            {product.title}
        </div>
    );
};

export default Product;
