"use client"

import React, {useState} from "react";
import styles from './NavBar.module.scss';
import '@/styles/mario.scss';
import {usePathname} from 'next/navigation';
import Link from 'next/link'
import Image from "next/image";
// import {MsearchField} from "@/components/UI/MsearchField";
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  /** HOOKS **/
  const [galleryAnchorEl, setGalleryAnchorEl] = useState<null | HTMLElement>(null);
  const [newsAnchorEl, setNewsAnchorEl] = useState<null | HTMLElement>(null);
  const pathname = usePathname();

  /** CONSTS **/
  const galleryOpen = Boolean(galleryAnchorEl);
  const newsOpen = Boolean(newsAnchorEl);

  /**
   * Handles the hover event to open the news menu.
   * @param event {React.MouseEvent<HTMLDivElement>} - The mouse event triggered by hovering over the news menu item.
   */
  const newsMenuHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setNewsAnchorEl(event.currentTarget);
  };

  /**
   * Handles the hover event to open the gallery menu.
   * @param event {React.MouseEvent<HTMLDivElement>} - The mouse event triggered by hovering over the gallery menu item.
   */
  const galleryMenuHover = (event: React.MouseEvent<HTMLDivElement>) => {
    setGalleryAnchorEl(event.currentTarget);
  };

  /**
   * Checks if the current page is active based on the provided pages.
   * @param pages {string[]} - An array of page names to check against the current path.
   */
  const isActive = (pages: string[]) => {
    const path = pathname ? pathname?.replace(/^\/+/, '').toLowerCase() : '';
    // console.log('Checking active pages:', pages);
    return pages.some(page => {
      const pageLower = page.toLowerCase();
      return path === pageLower || path?.includes(pageLower);
    });
  };

  /**
   * Handles the close event to close the news menu.
   */
  const handleNewsClose = () => {
    setNewsAnchorEl(null);
  };

  /**
   * Handles the close event to close the gallery menu.
   */
  const handleGalleryClose = () => {
    setGalleryAnchorEl(null);
  };


  /** RENDER **/
  return (
    <header className={styles.NavBar}>
      <div className={styles.logo}>
        <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={128} width={256} />
      </div>
      {/*<div>*/}
      <div className={styles.menu}>
        <div className={`${styles.entry} ${isActive(['Home']) ? ' ' + styles.active : ''}`}><Link
          href="/home"
        >Home</Link></div>
        <div
          className={`${styles.entry} ${isActive(['news/photography', 'news/paintings', 'news/literature']) ? ' ' + styles.active : ''}`}
          id="news-menu-item"
          onMouseEnter={newsMenuHover}
          // onMouseLeave={handleClose}
          onClick={newsMenuHover}
          aria-controls={galleryOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={galleryOpen ? 'true' : undefined}
        >
          News
        </div>
        <Menu
          id="news-menu"
          anchorEl={newsAnchorEl}
          open={newsOpen}
          onClose={handleNewsClose}
          slotProps={{
            list: {
              'aria-labelledby': 'gallery-menu-item',
            },
          }}
          className={"PopupMenu"}
        >
          <MenuItem onClick={handleGalleryClose}><Link href="/news/photography">Photography</Link></MenuItem>
          <MenuItem onClick={handleGalleryClose}><Link href="/news/paintings">Paintings</Link></MenuItem>
          <MenuItem onClick={handleGalleryClose}><Link href="/news/fashion">Fashion</Link></MenuItem>
          <MenuItem onClick={handleGalleryClose}><Link href="/news/literature">Literature</Link></MenuItem>
        </Menu>
        <div className={`${styles.entry} ${isActive(['Press']) ? ' ' + styles.active : ''}`}><Link
          href="/press"
        >Press</Link></div>

        <div
          className={`${styles.entry} ${isActive(['gallery/photography', 'gallery/paintings', 'gallery/literature']) ? ' ' + styles.active : ''}`}
          id="gallery-menu-item"
          onMouseEnter={galleryMenuHover}
          onClick={galleryMenuHover}
          aria-controls={galleryOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={galleryOpen ? 'true' : undefined}
        >
          Gallery
        </div>
        <Menu
          id="gallery-menu"
          anchorEl={galleryAnchorEl}
          open={galleryOpen}
          onClose={handleGalleryClose}
          slotProps={{
            list: {
              'aria-labelledby': 'gallery-menu-item',
            },
          }}
          className={"PopupMenu"}
        >
          <MenuItem onClick={handleGalleryClose}><Link href="/gallery/photography">Photography</Link></MenuItem>
          <MenuItem
            onClick={handleGalleryClose}
            style={{flexDirection: 'column', alignItems: 'start'}}
          >
            {/*<Link href="/gallery/paintings">Paintings</Link>*/}
            <div className={'menu-sub-header'}>Paintings</div>
            <ul>
              <li><Link href={"/gallery/paintings/recent"}>Recent Work</Link></li>
              <li><Link href={"/gallery/paintings/previous"}>Previous Work</Link></li>
              <li><Link href={"/gallery/paintings/older"}>Older Work</Link></li>
            </ul>
          </MenuItem>
          <MenuItem onClick={handleGalleryClose}><Link href="/gallery/literature">Literature</Link></MenuItem>
          <MenuItem onClick={handleGalleryClose}><Link href="/gallery/fashion">Fashion</Link></MenuItem>
        </Menu>
        <div className={`${styles.entry} ${isActive(['Contact']) ? ' ' + styles.active : ''}`}><Link
          href="/contact"
        >Contact</Link></div>
      </div>
      {/*<div>*/}
      {/*  <FormControl variant="filled">*/}
      {/*    <MsearchField*/}
      {/*      id="search-field-icon-adornment"*/}
      {/*      variant={'filled'}*/}
      {/*      slotProps={{*/}
      {/*        input: {*/}
      {/*          startAdornment: <InputAdornment position="start"><InputAdornment position="start">*/}
      {/*            <SearchIcon htmlColor={'var(--mario-bg-color)'} />*/}
      {/*          </InputAdornment></InputAdornment>,*/}
      {/*        },*/}
      {/*      }}*/}
      {/*      // sx={{color: '#000', backgroundColor: 'white', borderRadius: '32px'}}*/}
      {/*    />*/}
      {/*  </FormControl>*/}
      {/*</div>*/}
      {/*</div>*/}
    </header>
  );
}