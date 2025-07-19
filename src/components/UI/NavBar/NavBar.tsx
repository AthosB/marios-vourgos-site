"use client"

import React, {useState} from "react";
import styles from './NavBar.module.scss';
import '@/styles/mario.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from "next/image";
import {MsearchField} from "@/components/UI/MsearchField";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  /** HOOKS **/
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  /** CONSTS **/
  const open = Boolean(anchorEl);

  /**
	 * Handles the hover event to open the gallery menu.
	 * @param event {React.MouseEvent<HTMLDivElement>} - The mouse event triggered by hovering over the gallery menu item.
	 */
  const galleryMenuHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
	 * Checks if the current page is active based on the provided pages.
	 * @param pages {string[]} - An array of page names to check against the current path.
	 */
  const isActive = (pages: string[]) => {
    const path = pathname ? pathname?.replace(/^\/+/, '').toLowerCase() : '';
    return pages.some(page => {
      const pageLower = page.toLowerCase();
      return path === pageLower || path.startsWith(pageLower + '/');
    });
  };

  /**
	 * Handles the close event to close the menu.
	 */
  const handleClose = () => {
    setAnchorEl(null);
  };


  /** RENDER **/
  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}>
        <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={128} width={256} />
      </div>
      {/*<div>*/}
      <div className={styles.menu}>
        <div className={`${styles.entry} ${isActive(['Home', '']) ? ' active' : ''}`}><Link href="/home">Home</Link></div>
        <div className={`${styles.entry} ${isActive(['About']) ? ' active' : ''}`}><Link href="/about">About</Link></div>
        <div className={`${styles.entry} ${isActive(['News']) ? ' active' : ''}`}><Link href="/news">News</Link></div>
        <div
          style={{display: 'inline-block'}}
          onMouseEnter={galleryMenuHover}
          onMouseLeave={handleClose}
        >
          <div
            className={`${styles.entry}${(open || isActive(["Photography", "Paintings"])) ? ' ' + styles.active : ''}`}
            id="gallery-menu-item"
          >
            Gallery
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
            className={"PopupMenu"}
          >
            <MenuItem onClick={handleClose}><Link href="/gallery/photography">Photography</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/gallery/paintings">Paintings</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/gallery/literature">Literature</Link></MenuItem>
          </Menu>
        </div>
        <div className={`${styles.entry} ${isActive(['Contact']) ? ' ' + styles.active : ''}`}><Link href="/contact">Contact</Link></div>
      </div>
      <div>
        <FormControl variant="filled">
          <MsearchField
            id="search-field-icon-adornment"
            variant={'filled'}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><InputAdornment position="start">
                  <SearchIcon htmlColor={'var(--mario-bg-color)'} />
                </InputAdornment></InputAdornment>,
              },
            }}
            // sx={{color: '#000', backgroundColor: 'white', borderRadius: '32px'}}
          />
        </FormControl>
      </div>
      {/*</div>*/}
    </header>
  )
  ;
}