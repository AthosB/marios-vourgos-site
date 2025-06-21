"use client"

import React, {useState} from "react";
import '@/styles/mario.scss';
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
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
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
    <header className={'NavBar'}>
      <div className={'logo'}>
        <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={128} width={256} />
      </div>
      <div className={'menu'}>
        <div className={`entry ${isActive(['Home', '']) ? ' active' : ''}`}>Home</div>
        <div className={`entry ${isActive(['About']) ? ' active': ''}`}>About</div>
        <div className={`entry ${isActive(['News']) ? ' active' : ''}`}>News</div>
        <div
          style={{display: 'inline-block'}}
          onMouseEnter={galleryMenuHover}
          onMouseLeave={handleClose}
        >
          <div
            className={`entry${(open || isActive(["Photography", "Paintings"])) ? ' active' : ''}`}
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
            <MenuItem onClick={handleClose}>Photography</MenuItem>
            <MenuItem onClick={handleClose}>Paintings</MenuItem>
            <MenuItem onClick={handleClose}>Literature</MenuItem>
          </Menu>
        </div>
        <div className={'entry'}>Contact</div>
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
    </header>
  )
  ;
}