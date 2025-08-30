import styles from "@/app/home/Home.module.scss";

export default function HomeVideo() {
	return <div className={styles.Section}>
		<div style={{
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center'
		}}
		>
			<div className={'LargeTitle'}>VIDEO HERE</div>
		</div>
	</div>;
}