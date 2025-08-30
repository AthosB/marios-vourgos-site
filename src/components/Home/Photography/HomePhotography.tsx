import styles from "@/app/home/Home.module.scss";
import PhotographyCarousel from "@/components/Home/PhotographyCarousel";

export default function HomePhotography() {
	return <div className={styles.Section + ' ' + styles.Red + ' ' + styles.InLine}>
		<div style={{width:'100%',height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
		<img
			src="/images/home-photography-first.JPG"
			alt="Photography"
			height={720}
			style={{ marginBottom: '16px' }}
		/>
		<PhotographyCarousel></PhotographyCarousel>
		</div>
	</div>;
}