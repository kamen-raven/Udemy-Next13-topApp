import React from 'react';
import { SidebarProps } from './SidebarProps';
import styles from './Sidebar.module.scss';


const Sidebar = ({ ...props }: SidebarProps ): JSX.Element => {
    return (
        <div {...props}>
          Sidebar
        </div>
    );
};

export {Sidebar};
