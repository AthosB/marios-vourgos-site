'use client'

import React, {useState} from 'react';
import styles from './MobileMenu.module.scss';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** CONSTS **/

  const handleClose = () => {
    setAnchorEl(null);
  };

  /** RENDER **/
  return (
    <div className={styles.MobileMenu}>
      <div className={styles.Logo}>
        <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={64} width={128} />
      </div>
      <div className={styles.MenuIcon}>
        <IconButton
          aria-label="menu-icon" id={'mobile-menu-button'}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'mobile-button',
            },
          }}
          className={"PopupMenu"}
        >
          <MenuItem onClick={handleClose}><Link href="/home">Home</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/gallery/photography">Photography</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/gallery/paintings">Paintings</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/gallery/literature">Literature</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/gallery/fashion">Fashion</Link></MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}><Link href="/about">About</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/contact">Contact</Link></MenuItem>
        </Menu>
      </div>
    </div>
  );
}