import styles from "@/app/home/Home.module.scss";
import './HomeAbout.scss';

export default function HomeAbout() {
  return (
    <div className={styles.aboutContent}>
      <div className={'about-image'}>
        <img
          src="/images/home-about.JPG"
          width={320}
          alt="Picture of the author"
        />
      </div>
      {/*<div className={'about-text'} style={{fontWeight: '600'}}>*/}
      <p>I never took seriously enough my studies in finance and my long career in this field, my solo painting
        exhibitions, the fact that I was once an &apos;almost famous&apos; fashion designer in New York, the experience of
        singing
        opera in ancient amphitheaters, or even my poetry. And then the universe somehow decided it was about time to
        convince me to take myself seriously (enough), or at least my artistic and creative ability. So, one day
        totally
        unexpectedly and without warning, it somehow messed up with my old, ordinary, inexpensive digital camera, and
        it
        simply started capturing images beyond space and time. As simple as that.....</p>
      <p>Our dog who died years ago appeared sitting on my daughter’s shoulder, a woman posing for me appeared with a
        heavy black presence sitting on her lap, another woman’s soul was captured escaping her substance, images that
        cannot be explained in technological terms and modern/ conventional logic.</p>
      <p>Therefore, I embraced the unknown as part of everyday life. At least mine.</p>
      <p>I kept these photographs private for many years, more than ten years… And then prior to a solo painting
        exhibition I decided to print a couple of them on a large scale, just to test if these could be shown along my
        paintings. When the art curator looked at them for the first time, she exclaimed “and what the hell is that?”.
        And when I explained that these were photographs non digitally manipulated, insisted to look at them through my
        digital camera to be convinced. She carefully saw and closely observed all twenty-five, or so, of them. And
        categorically decided that these photographs not only deserved but demanded and had to be shown on their
        own.</p>
      <p>It was there and then I finally got serious about something: my photographic work. Over the next years I took
        more photographs meticulously setting the settings and the mood, and most of the time using my daughter Athena
        as my model. And over time the photographs became more “generous” revealing more and more layers of truth,
        parallel universes or memories from the past, and perhaps echoes from the future.</p>
      {/*</div>*/}
    </div>
  );
}

//TODO: image in line with 1st paragraph like newspaper