import '@/styles/mario.scss';
import Image from "next/image";
import {MsearchField} from "@/components/UI/MsearchField";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  /** CONSTS **/


  /** RENDER **/
  return (
    <header className={'NavBar'}>
      <div className={'logo'}>
        <Image src={'/logo1080p.png'} alt={'Mario Logo'} height={128} width={256} />
        {/*<Image src={'/next.svg'} alt={'Mario Logo'} fill />*/}
      </div>
      <div className={'menu'}>
        <div className={'entry'}>Home</div>
        <div className={'entry'}>About</div>
        <div className={'entry'}>News</div>
        <div className={'entry'}>Gallery</div>
        <div className={'entry'}>Contact</div>
      </div>
      <div>
        <FormControl variant="filled">
          <MsearchField
            id="input-with-icon-adornment"
            variant={'filled'}
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><InputAdornment position="start">
                  <SearchIcon htmlColor={'var(--mario-bg-color)'} color={'var(--mario-bg-color)'} />
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