'use client'

import React, {useState} from 'react';
import styles from './MobileMenu.module.scss';

import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <Link href="/home" aria-label="Home">
          <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={64} width={128}/>
        </Link>
      </div>
      <div className={styles.MenuIcon}>
        <IconButton
          aria-label="menu-icon" id={'mobile-menu-button'}
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              'aria-labelledby': 'mobile-button',
              sx: {
                p: 0,
              },
            },
            paper: {sx: {p: 0}},
          }}
          className={"PopupMenu"}
        >
          <Link href="/home">
            <MenuItem
              onClick={handleClose}
              disableRipple
            >
              <span className={isActive('/home') ? styles.Active : ''}>Home</span>
            </MenuItem>
          </Link>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div>News</div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/news/photography"
                    style={{marginLeft: '16px'}}
              >
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/news/photography') ? styles.Active : ''}>Photography</span>
                </MenuItem>
              </Link>
              <Link href="/news/paintings"
                    style={{marginLeft: '16px'}}
              >
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/news/paintings') ? styles.Active : ''}>Paintings</span>
                </MenuItem>
              </Link>
              <Link href="/news/fashion" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/news/fashion') ? styles.Active : ''}>
                    Fashion
                  </span>
                </MenuItem>
              </Link>
              <Link href="/news/literature" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/news/literature') ? styles.Active : ''}>
                    Literature
                  </span>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div>Press</div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/press/photography" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/press/photography') ? styles.Active : ''}>
                    Photography
                  </span>
                </MenuItem>
              </Link>
              <Link href="/press/paintings" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/press/paintings') ? styles.Active : ''}>
                    Paintings
                  </span>
                </MenuItem>
              </Link>
              <Link href="/press/fashion" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                <span className={isActive('/press/fashion') ? styles.Active : ''}>
                  Fashion
                </span>
                </MenuItem>
              </Link>
              <Link href="/press/literature" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/press/literature') ? styles.Active : ''}>
                    Literature
                  </span>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>
          <Link href="/gallery/photography">
            <MenuItem onClick={handleClose}>
            <span className={isActive('/gallery/photography') ? styles.Active : ''}>
              Photography
            </span>
            </MenuItem>
          </Link>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div>Paintings</div>
            </AccordionSummary>
            <AccordionDetails>
              <Link href="/gallery/paintings/recent" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/gallery/paintings/recent') ? styles.Active : ''}>
                    Recent Work
                  </span>
                </MenuItem>
              </Link>
              <Link href="/gallery/paintings/previous" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/gallery/paintings/previous') ? styles.Active : ''}>
                    Previous Work
                  </span>
                </MenuItem>
              </Link>
              <Link href="/gallery/paintings/older" style={{marginLeft: '16px'}}>
                <MenuItem onClick={handleClose}>
                  <span className={isActive('/gallery/paintings/older') ? styles.Active : ''}>
                    Older Work
                  </span>
                </MenuItem>
              </Link>
            </AccordionDetails>
          </Accordion>
          <Link href="/gallery/literature">
            <MenuItem onClick={handleClose}>
            <span className={isActive('/gallery/literature') ? styles.Active : ''}>
              Literature
            </span>
            </MenuItem>
          </Link>
          <Link href="/gallery/fashion">
            <MenuItem onClick={handleClose}>
              <span className={isActive('/gallery/fashion') ? styles.Active : ''}>
                Fashion
              </span>
            </MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem onClick={handleClose}>
              <span className={isActive('/contact') ? styles.Active : ''}>
              Contact
            </span>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
