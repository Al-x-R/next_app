import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';

import { HeaderProps } from './Header.props';
import ButtonIcon from '../../components/ButtonIcon';
import Sidebar from '../Sidebar';
import Logo from '../logo.svg';

import styles from './Header.module.css';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: '100%',
        }
    };

  return (
      <header className={clsx(className, styles.header)} {...props}>
          <Logo />
          <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpened(true)} />
          <motion.div
              className={styles.mobileMenu}
              variants={variants}
              initial={'closed'}
              animate={isOpened ? 'opened' : 'closed'}
          >
              <Sidebar />
              <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpened(false)} />
          </motion.div>
      </header>
  );
};

export default Header;
