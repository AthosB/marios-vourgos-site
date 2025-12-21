'use client'

import React, {useState} from 'react';
import styles from './MobileMenu.module.scss';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** CONSTS **/

  /**
   * Checks if the current page is active based on the provided page path.
   * @param pagePath {string} - The path of the page to check against the current location.
   */
  const isActive = (pagePath: string) => {
    const path = window.location.pathname;
    // console.log('Checking active page:', pagePath, 'Current page:', path);
    // console.log(' Is Active: ', path === pagePath);
    return path === pagePath;
  }

  /**
   * Handles the close event for the mobile menu.
   */
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
          <MenuItem
            onClick={handleClose}
          >
            <Link href="/home">
              <span className={isActive('/home') ? styles.Active : ''}>Home</span>
            </Link>
          </MenuItem>
          <div style={{display: 'flex', flexDirection: 'column', rowGap: '8px'}}>
            <div className={styles.MenuCategory}>News</div>
            <MenuItem onClick={handleClose}><Link href="/news/photography"
              style={{marginLeft: '16px'}}
            ><span className={isActive('/news/photography') ? styles.Active : ''}>Photography</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/news/paintings"
              style={{marginLeft: '16px'}}
            ><span className={isActive('/news/paintings') ? styles.Active : ''}>Paintings</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/news/fashion" style={{marginLeft: '16px'}}><span className={isActive('/news/fashion') ? styles.Active : ''}>Fashion</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/news/literature" style={{marginLeft: '16px'}}><span className={isActive('/news/literature') ? styles.Active : ''}>Literature</span></Link></MenuItem>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', rowGap: '8px'}}>
            <div className={styles.MenuCategory}>Press</div>
            <MenuItem onClick={handleClose}><Link href="/press/photography"
              style={{marginLeft: '16px'}}
            ><span className={isActive('/press/photography') ? styles.Active : ''}>Photography</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/press/paintings"
              style={{marginLeft: '16px'}}
            ><span className={isActive('/press/paintings') ? styles.Active : ''}>Paintings</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/press/fashion" style={{marginLeft: '16px'}}><span className={isActive('/press/fashion') ? styles.Active : ''}>Fashion</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/press/literature" style={{marginLeft: '16px'}}><span className={isActive('/press/literature') ? styles.Active : ''}>Literature</span></Link></MenuItem>
          </div>
          <MenuItem onClick={handleClose}><Link href="/gallery/photography"><span className={isActive('/gallery/photography') ? styles.Active : ''}>Photography</span></Link></MenuItem>
          <div style={{display: 'flex', flexDirection: 'column', rowGap: '8px'}}>
            <div className={styles.MenuCategory}>Paintings</div>
            <MenuItem onClick={handleClose}><Link href="/gallery/paintings/recent" style={{marginLeft: '16px'}}><span className={isActive('/gallery/paintings/recent') ? styles.Active : ''}>Recent Work</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/gallery/paintings/previous" style={{marginLeft: '16px'}}><span className={isActive('/gallery/paintings/previous') ? styles.Active : ''}>Previous Work</span></Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/gallery/paintings/older" style={{marginLeft: '16px'}}><span className={isActive('/gallery/paintings/older') ? styles.Active : ''}>Older Work</span></Link></MenuItem>
          </div>
          <MenuItem onClick={handleClose}><Link href="/gallery/literature"><span className={isActive('/gallery/literature') ? styles.Active : ''}>Literature</span></Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/gallery/fashion"><span className={isActive('/gallery/fashion') ? styles.Active : ''}>Fashion</span></Link></MenuItem>
          <MenuItem onClick={handleClose}><Link href="/contact"><span className={isActive('/contact') ? styles.Active : ''}>Contact</span></Link></MenuItem>
        </Menu>
      </div>
    </div>
  );
}
