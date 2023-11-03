import React from 'react';
import { HeaderProps } from './HeaderProps';
import styles from './Header.module.scss';


const Header = ({ ...props }: HeaderProps ): JSX.Element  => {
    return (
        <div {...props} >
          Header
        </div>
    );
};

export { Header };
