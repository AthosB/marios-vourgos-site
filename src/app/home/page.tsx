import styles from './Home.module.scss'

export default function HomePage() {
  return (
    <div className={'HomePage ' + styles.Home}>
      <div className={styles.Section}>
        <div style={{height:'100%', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center'}}>
          <div className={'LargeTitle'}>VIDEO HERE</div>
        </div>
      </div>
      <div className={styles.Section + ' ' + styles.Purple + ' ' + styles.InLine}>
        <div style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
          <div className="LargeTitle">Title</div>
          <div className="LargeSubtitle">Subtitle</div>
        </div>
        <div style={{width: '50%'}}>
          <div style={{height: '600px', width:'900px', backgroundColor: '#FFFFFF'}}>TEST</div>
        </div>
      </div>
    </div>
  );
}