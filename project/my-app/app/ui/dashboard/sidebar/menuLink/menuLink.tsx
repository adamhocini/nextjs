import React, { ReactNode } from 'react';
import Link from 'next/link'
import styles from "./menuLink.module.css"


interface MenuLinkProps {
    item: {
      path: string;
      icon: React.ReactNode; // Remplacez par le type correct de votre icône
      title: string;
    };
  }

const MenuLink: React.FC<MenuLinkProps> = ({item}) => {
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    )
  }
  
export default MenuLink