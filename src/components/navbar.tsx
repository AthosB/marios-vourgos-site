import '@/styles/mario.scss';
import Image from "next/image";

import {SearchBox} from '@fluentui/react/lib/SearchBox';


export default function NavBar() {
	/** CONSTS **/

	/**
	 * Handle the onSearch event
	 * @param newValue {string} - The new value of the search box
	 */
	const onSearch = (newValue: string) => {
		console.log('value is ' + newValue);
	};

	/** RENDER **/
	return (
		<div className={'NavBar'}>
			<div className={'logo'}>
				<Image src={'/Logo_1080.png'} alt={'Mario Logo'}/>
			</div>
			<div className={'menu'}>
				<div className={'entry'}>Home</div>
				<div className={'entry'}>About</div>
				<div className={'entry'}>News</div>
				<div className={'entry'}>Gallery</div>
				<div className={'entry'}>Contact</div>
			</div>
			<div>
				<SearchBox placeholder="Search" onSearch={onSearch}/>
			</div>
		</div>
	);
}