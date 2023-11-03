import React from 'react';
import { FooterProps } from './FooterProps';
import styles from './Footer.module.scss';
import { LinkTag, PTag } from '~/components/06_shared';


const Footer = ({ ...props }: FooterProps ): JSX.Element  => {
    return (
        <footer {...props}>
          <PTag >OwlTop © 2020 - 2021 Все права защищены</PTag>
          <LinkTag href='user-agreement' >Пользовательское соглашение</LinkTag>
          <LinkTag href='private-policy' className = {styles.footer__link}>Политика конфиденциальности</LinkTag>
        </footer>
    );
};

export { Footer };
