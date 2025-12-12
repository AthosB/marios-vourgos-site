import {GenericItemType} from "@/Types/types";

export const aboutText = 'I never took seriously enough my studies in finance and my long career in this\n' +
  'field, my solo painting exhibitions, the fact that I was once an "almost famous"\n' +
  'fashion designer in New York, the experience of singing opera in ancient\n' +
  'amphitheaters, or even my poetry. And then the universe somehow decided it\n' +
  'was news time to convince me to take myself seriously (enough), or at least\n' +
  'my artistic and creative ability. So, one day totally unexpectedly and without\n' +
  'warning, it somehow messed up with my old, ordinary, inexpensive digital\n' +
  'camera, and it simply started capturing images beyond space and time. As\n' +
  'simple as that…..\n' +
  'Our dog who died years ago appeared sitting on my daughter’s shoulder, a\n' +
  'woman posing for me appeared with a heavy black presence sitting on her lap,\n' +
  'another woman’s soul was captured escaping her substance, images that\n' +
  'cannot be explained in technological terms and modern/conventional logic.\n' +
  'Therefore, I embraced the unknown as part of everyday life. At least mine.\n' +
  'I kept these photographs private for many years, more than ten years… And\n' +
  'then prior to a solo painting exhibition I decided to print a couple of them on a\n' +
  'large scale, just to test if these could be shown along my paintings. When the\n' +
  'art curator looked at them for the first time, she exclaimed “and what the hell\n' +
  'is that?”. And when I explained that these were photographs non digitally\n' +
  'manipulated insisted to look at them through my digital camera to be\n' +
  'convinced. She carefully saw and closely observed all twenty-five, or so, of\n' +
  'them. And categorically decided that these photographs not only deserved but\n' +
  'demanded and had to be shown on their own.\n' +
  'It was there and then I finally got serious news something: my photographic\n' +
  'work. Over the next years I took more photographs meticulously setting the\n' +
  'settings and the mood, and most of the time using my daughter Athena as my\n' +
  'model. And over time the photographs became more “generous” revealing\n' +
  'more and more layers of truth, parallel universes or memories from the past,\n' +
  'and perhaps echoes from the future.';

type imageType = {
  position?: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export const photoFilenames = [
  {
    position: 0,
    src: "/images/photography/001.JPG",
    alt: "Img 1",
    title: 'Nocturnal Contemplations of Hope',
    description: "100 cm x 80 cm"
  },
  {
    position: 2,
    src: "/images/photography/002.JPG",
    alt: "Img 2",
    title: "Remembering herself",
    description: "100 cm x 80 cm"
  },
  {
    position: 3,
    src: "/images/photography/003.JPG",
    alt: "Img 3",
    title: "The ecstatic recollection of self",
    description: "100 cm x 80 cm"
  },
  {
    position: 4,
    src: "/images/photography/004.JPG",
    alt: "Img 4",
    title: "The triumph of Illusions",
    description: "100 cm x 80 cm"
  },
  {
    position: 5,
    src: "/images/photography/005.JPG",
    alt: "Img 5",
    title: 'The Ecstatic Recollection of Time',
    description: "100 cm x 80 cm"
  },
  {
    position: 6,
    src: "/images/photography/006.JPG",
    alt: "Img 6",
    title: "The escape of thoughts to come",
    description: "100 cm x 80 cm"
  },
  {
    position: 7,
    src: "/images/photography/007.JPG",
    alt: "Img 7",
    title: "The stare of silence",
    description: "100 cm x 80 cm"
  },
  {
    position: 8,
    src: "/images/photography/008.JPG",
    alt: "Img 8",
    title: "… fade so soon, oh flower…( The Sleepwalker)",
    description: "100 cm x 80 cm"
  },
  {
    position: 9,
    src: "/images/photography/009.JPG",
    alt: "Img 9",
    title: "The illusion of space",
    description: "100 cm x 80 cm"
  },
  {
    position: 10,
    src: "/images/photography/010.JPG",
    alt: "Img 10",
    title: "The illusion of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 11,
    src: "/images/photography/011.JPG",
    alt: "Img 11",
    title: "The shadow of light",
    description: "100 cm x 80 cm"
  },
  {
    position: 12,
    src: "/images/photography/012.JPG",
    alt: "Img 11",
    title: "Echo of Eternity",
    description: "215 cm x 80 cm"
  },
  {
    position: 13,
    src: "/images/photography/013.JPG",
    alt: "Img 12",
    title: "Contemplating herself I",
    description: "100 cm x 80 cm"
  },
  {
    position: 14,
    src: "/images/photography/014.JPG",
    alt: "Img 13",
    title: "Contemplating herself II",
    description: "100 cm x 80 cm"
  },
  {
    position: 15,
    src: "/images/photography/015.JPG",
    alt: "Img 14",
    title: "infinite visions of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 16,
    src: "/images/photography/016.JPG",
    alt: "Img 15",
    title: "The flower that fell in live with a woman",
    description: "100 cm x 80 cm"
  },
  {
    position: 17,
    src: "/images/photography/017.JPG",
    alt: "Img 16",
    title: "Contemplating herself III",
    description: "100 cm x 80 cm"
  },
  {
    position: 18,
    src: "/images/photography/018.JPG",
    alt: "Img 17",
    title: "Contemplating herself IV",
    description: "100 cm x 80 cm"
  },
  {
    position: 19,
    src: "/images/photography/019.JPG",
    alt: "Img 18",
    title: "Contemplating herself V",
    description: "100 cm x 80 cm"
  },
  // {position: 20, src: "/images/photography/020.JPG", alt: "Img 19", title: '', description: ""},
  {
    position: 21,
    src: "/images/photography/020.JPG",
    alt: "Img 20",
    title: "in an artists's head",
    description: "100 cm x 80 cm"
  },
  {
    position: 22,
    src: "/images/photography/021.JPG",
    alt: "Img 21",
    title: 'The Achronic Remembrance of Self',
    description: "100 cm x 80 cm"
  },
  {position: 23, src: "/images/photography/022.JPG", alt: "Img 22", title: 'Parapraxis', description: "100 cm x 80 cm"},
  {position: 24, src: "/images/photography/023.JPG", alt: "Img 23", title: 'Epigraph', description: "100 cm x 80 cm"},
  {
    position: 25,
    src: "/images/photography/024.JPG",
    alt: "Img 24",
    title: 'The essence of Dreams to Come',
    description: "100 cm x 80 cm"
  },
  {
    position: 26,
    src: "/images/photography/025.JPG",
    alt: "Img 25",
    title: 'Perpetual Juliet',
    description: "100 cm x 80 cm"
  },
  {
    position: 27,
    src: "/images/photography/026.JPG",
    alt: "Img 26",
    title: 'Indigo Dreams of Blue',
    description: "100 cm x 80 cm"
  },
  {
    position: 28,
    src: "/images/photography/027.JPG",
    alt: "Img 27",
    title: 'Spring Awaiting Summer in the Fall',
    description: "100 cm x 80 cm"
  },
  {position: 29, src: "/images/photography/028.JPG", alt: "Img 28", title: 'Euphoria', description: "100 cm x 80 cm"},
  {
    position: 30,
    src: "/images/photography/029.JPG",
    alt: "Img 29",
    title: 'Awaiting Hope',
    description: "100 cm x 80 cm"
  },
  {
    position: 31,
    src: "/images/photography/030.JPG",
    alt: "Img 30",
    title: 'The Stare of Things to Come',
    description: "100 cm x 80 cm"
  },
  {
    position: 32,
    src: "/images/photography/033.JPG",
    alt: "Img 33",
    title: 'Hope is a glance at Infinity',
    description: "100 cm x 80 cm"
  },
  {position: 33, src: "/images/photography/032.JPG", alt: "Img 32", title: '', description: ""},
  {
    position: 35,
    src: "/images/photography/035.JPG",
    alt: "Img 35",
    title: "still life? I",
    description: "100 cm x 80 cm"
  },
  {
    position: 36,
    src: "/images/photography/036.JPG",
    alt: "Img 36",
    title: "still life? II",
    description: "100 cm x 80 cm"
  },
  {
    position: 37,
    src: "/images/photography/037.JPG",
    alt: "Img 37",
    title: "still life? III",
    description: "100 cm x 80 cm"
  },
  {
    position: 38,
    src: "/images/photography/038.JPG",
    alt: "Img 38",
    title: "Victorian memories of a flower",
    description: "100 cm x 80 cm"
  },
  {
    position: 39,
    src: "/images/photography/039.JPG",
    alt: "Img 39",
    title: "The scream os silence",
    description: "100 cm x 80 cm"
  },
  {
    position: 40,
    src: "/images/photography/040.JPG",
    alt: "Img 40",
    title: 'Sardonic Smile',
    description: "100 cm x 80 cm"
  },
  {
    position: 41,
    src: "/images/photography/041.JPG",
    alt: "Img 41",
    title: "thoughts of future days gone by I",
    description: "100 cm x 80 cm"
  },
  {
    position: 42,
    src: "/images/photography/040.JPG",
    alt: "Img 42",
    title: "thoughts of future days gone by II",
    description: "100 cm x 80 cm"
  },
  {
    position: 43,
    src: "/images/photography/041.JPG",
    alt: "Img 43",
    title: "time revealing the future today",
    description: "100 cm x 80 cm"
  },
  {
    position: 44,
    src: "/images/photography/042.JPG",
    alt: "Img 44",
    title: "…and her thoughts defined  the universe",
    description: "100 cm x 80 cm"
  },
  {
    position: 45,
    src: "/images/photography/043.JPG",
    alt: "Img 45",
    title: "nocturnal whispers of hope",
    description: "100 cm x 80 cm"
  },
  {
    position: 46,
    src: "/images/photography/044.JPG",
    alt: "Img 46",
    title: "the maiden and the shadow",
    description: "100 cm x 80 cm"
  },
  {
    position: 47,
    src: "/images/photography/045.JPG",
    alt: "Img 47",
    title: "anticipating hope",
    description: "100 cm x 80 cm"
  },
  {
    position: 48,
    src: "/images/photography/046.JPG",
    alt: "Img 48",
    title: "The eternal struggle",
    description: "100 cm x 80 cm"
  },
  {position: 49, src: "/images/photography/047.JPG", alt: "Img 49", title: '', description: "100 cm x 80 cm"},
  {
    position: 50,
    src: "/images/photography/048.JPG",
    alt: "Img 50",
    title: "sweet melancholia of  timeless being",
    description: "100 cm x 80 cm"
  },
  {
    position: 51,
    src: "/images/photography/049.JPG",
    alt: "Img 51",
    title: "…and birds announced her substance",
    description: "100 cm x 80 cm"
  },
  {position: 52, src: "/images/photography/050.JPG", alt: "Img 52", title: "rapture", description: "100 cm x 80 cm"},
  {
    position: 53,
    src: "/images/photography/051.JPG",
    alt: "Img 53",
    title: "The ecstatic renaissance of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 54,
    src: "/images/photography/052.JPG",
    alt: "Img 54",
    title: "The apparition of dreams to come",
    description: "100 cm x 80 cm"
  },
  {
    position: 55,
    src: "/images/photography/053.JPG",
    alt: "Img 55",
    title: "The escape of dreams",
    description: "100 cm x 80 cm"
  },
  {
    position: 56,
    src: "/images/photography/054.JPG",
    alt: "Img 56",
    title: "whispering secrets to space beyond time",
    description: "100 cm x 80 cm"
  },
  {
    position: 57,
    src: "/images/photography/055.JPG",
    alt: "Img 57",
    title: "The Infinite visions of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 58,
    src: "/images/photography/056.JPG",
    alt: "Img 58",
    title: 'Eternal struggle',
    description: "160 cm x 100 cm"
  },
  {
    position: 59,
    src: "/images/photography/057.JPG",
    alt: "Img 59",
    title: 'The maiden and the shadow',
    description: "100 cm x 80 cm"
  },
] as imageType[];

export const photographyCarouselFilenames = [
  {
    position: 1,
    src: '/images/photography/carousel/ph-ca-06.JPG',
    alt: 'Sardonic Smile',
    title: 'Sardonic Smile',
    description: '100 cm x 80 cm'
  },
  {
    position: 2,
    src: '/images/photography/carousel/ph-ca-02.JPG',
    alt: 'Epigraph',
    title: 'Epigraph',
    description: '100 cm x 80 cm'
  },
  {
    position: 3,
    src: '/images/photography/carousel/ph-ca-03.JPG',
    alt: 'The triumph of Illusions',
    title: 'The triumph of Illusions',
    description: '100 cm x 80 cm'
  },
  {
    position: 4,
    src: '/images/photography/carousel/ph-ca-04.JPG',
    alt: 'The Achronic Remembrance of Self',
    title: 'The Achronic Remembrance of Self',
    description: '100 cm x 80 cm'
  },
  {
    position: 5,
    src: '/images/photography/carousel/ph-ca-05.JPG',
    alt: 'Nocturnal Contemplations of Hope',
    title: 'Nocturnal Contemplations of Hope',
    description: '100 cm x 80 cm'
  },
  {
    position: 6,
    src: '/images/photography/carousel/ph-ca-01.JPG',
    alt: 'The escape of dreams',
    title: 'The escape of dreams',
    description: '100 cm x 80 cm'
  },
  {
    position: 7,
    src: '/images/photography/carousel/ph-ca-07.JPG',
    alt: 'The Eternal Struggle',
    title: 'The Eternal Struggle',
    description: '100 cm x 160 cm'
  },
  {
    position: 8,
    src: '/images/photography/carousel/ph-ca-08.JPG',
    alt: 'Perpetual Juliet',
    title: 'Perpetual Juliet',
    description: '100 cm x 80 cm'
  },
  {
    position: 9,
    src: '/images/photography/carousel/ph-ca-17.JPG',
    alt: 'The ecstatic recollection of self',
    title: 'The ecstatic recollection of self',
    description: '100 cm x 80 cm'
  },
  {
    position: 17,
    src: '/images/photography/carousel/ph-ca-25.JPG',
    alt: 'The Sweet Melancholia of Timeless Being',
    title: 'The Sweet Melancholia of Timeless Being',
    description: '100 cm x 80 cm'
  },
  {
    position: 25,
    src: '/images/photography/carousel/ph-ca-09.JPG',
    alt: 'Euphoria',
    title: 'Euphoria',
    description: '100 cm x 80 cm'
  },
  {
    position: 10,
    src: '/images/photography/carousel/ph-ca-10.JPG',
    alt: 'Infinite Parapraxis',
    title: 'Infinite Parapraxis',
    description: 'Non digitally manipulated photo repeated printing 67 cm x 150 cm'
  },
  {
    position: 10.5,
    src: '/images/photography/carousel/ph-ca-27.JPG',
    alt: 'The Apparition of Dreams to come',
    title: 'The Apparition of Dreams to come',
    description: '100 cm x 80 cm'
  },
  {
    position: 11,
    src: '/images/photography/carousel/ph-ca-11.JPG',
    alt: 'The Escape of Dreams',
    title: 'The Escape of Dreams',
    description: '100 cm x 80 cm'
  },
  {
    position: 12,
    src: '/images/photography/carousel/ph-ca-12.JPG',
    alt: 'The Ecstatic Recollection of Time',
    title: 'The Ecstatic Recollection of Time',
    description: '100 cm x 80 cm'
  },
  {
    position: 13,
    src: '/images/photography/carousel/ph-ca-13.JPG',
    alt: 'Nocturnal whispers of hope ',
    title: 'Nocturnal whispers of hope ',
    description: '80 cm x 100 cm'
  },
  {
    position: 14,
    src: '/images/photography/carousel/ph-ca-14.JPG',
    alt: 'In an Artists\'s Head ',
    title: 'in an Artists\'s Head ',
    description: '100 cm x 80 cm'
  },
  {
    position: 15,
    src: '/images/photography/carousel/ph-ca-15.JPG',
    alt: 'A Brief History of Light',
    title: 'A Brief History of Light',
    description: '215 cm x 80 cm'
  },
  {
    position: 16,
    src: '/images/photography/carousel/ph-ca-16.JPG',
    alt: 'Rapture',
    title: 'Rapture',
    description: '100 cm x 80 cm'
  },
  // DUPLICATE
  // {
  //   position: 17,
  //   src: '/images/photography/carousel/ph-ca-17.JPG',
  //   alt: 'The ecstatic recollection of self',
  //   title: 'The ecstatic recollection of self',
  //   description: '100 cm x 80 cm'
  // },
  {
    position: 18,
    src: '/images/photography/carousel/ph-ca-18.JPG',
    alt: 'Spring Awaiting Summer in the Fall',
    title: 'Spring Awaiting Summer in the Fall',
    description: '100 cm x 80 cm'
  },
  {
    position: 19,
    src: '/images/photography/carousel/ph-ca-19.JPG',
    alt: 'The scream of silence',
    title: 'The scream of silence',
    description: '100 cm x 80 cm'
  },
  {
    position: 20,
    src: '/images/photography/carousel/ph-ca-20.JPG',
    alt: 'Hope is a glance at Infinity',
    title: 'Hope is a glance at Infinity',
    description: '100 cm x 80 cm'
  },
  {
    position: 21,
    src: '/images/photography/carousel/ph-ca-21.JPG',
    alt: 'The Entanglement of Hope',
    title: 'The Entanglement of Hope',
    description: '80 cm x 100 cm'
  },
  {
    position: 22,
    src: '/images/photography/carousel/ph-ca-22.JPG',
    alt: '…and her thoughts defined  the universe ',
    title: '…and her thoughts defined  the universe ',
    description: '100 cm x 80 cm'
  },
  {
    position: 23,
    src: '/images/photography/carousel/ph-ca-23.JPG',
    alt: 'thoughts of future days gone by I',
    title: 'thoughts of future days gone by I',
    description: '100 cm x 80 cm'
  },
  {
    position: 24,
    src: '/images/photography/carousel/ph-ca-24.JPG',
    alt: 'The Maiden and the Shadow',
    title: 'The Maiden and the Shadow',
    description: '100 cm x 80 cm'
  },
  {
    position: 26,
    src: '/images/photography/carousel/ph-ca-26.JPG',
    alt: '…and birds announced her substance',
    title: '…and birds announced her substance',
    description: '100 cm x 80 cm'
  },
  {
    position: 28,
    src: '/images/photography/carousel/ph-ca-28.JPG',
    alt: 'Remembrances of Thoughts to come',
    title: 'Remembrances of Thoughts to come',
    description: '100 cm x 80 cm'
  }
].sort((a, b) => a.position! - b.position!) as GenericItemType[];

export const recentPaintingsCarouselEntries = [
  {
    position: 10,
    src: '/images/paintings/carousel/pa-ca-01c.jpg',
    alt: 'An orange state of red',
    title: 'An orange state of red',
    description: 'Acrylics on canvas - 150 cm x 115 cm'
  },
  {
    position: 20,
    src: '/images/paintings/carousel/pa-ca-05b.jpg',
    alt: 'The Achronic Remembrances of Time',
    title: 'The Achronic Remembrances of Time',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
  {
    position: 30,
    src: '/images/paintings/carousel/pa-ca-06.jpg',
    alt: 'Athena in Paris',
    title: 'Athena in Paris',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
  {
    position: 40,
    src: '/images/paintings/carousel/pa-ca-01.jpg',
    alt: 'Eudaimonia',
    title: 'Eudaimonia',
    description: 'Acrylics on canvas - 147 cm x 105 cm'
  },
  {
    position: 50,
    src: '/images/paintings/carousel/pa-ca-02.jpg',
    alt: 'The illusion of time (Triptych)',
    title: 'The illusion of time (Triptych)',
    description: 'Acrylics on canvas - 118 cm x 83 cm (individual painting)'
  },
  {
    position: 60,
    src: '/images/paintings/carousel/pa-ca-03.jpg',
    alt: 'Morning Promises',
    title: 'Morning Promises',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 70,
    src: '/images/paintings/carousel/pa-ca-04.jpg',
    alt: 'Afternoon escape',
    title: 'Afternoon escape',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 80,
    src: '/images/paintings/carousel/pa-ca-05.jpg',
    alt: 'Evening reminiscing of day',
    title: 'Evening reminiscing of day',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },{
    position: 90,
    src: '/images/paintings/carousel/pa-ca-10.jpg',
    alt: 'The Stare of things to come... (Demian)',
    title: 'The Stare of things to come... (Demian)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 95,
    src: '/images/paintings/carousel/pa-ca-11.jpg',
    alt: '...remembering himself',
    title: '...remembering himself',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 100,
    src: '/images/paintings/carousel/pa-ca-12.jpg',
    alt: 'Zero is infinity reversed to time (cosmos)',
    title: 'Zero is infinity reversed to time (cosmos)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 110,
    src: '/images/paintings/carousel/pa-ca-07.jpg',
    alt: 'The deception of Spring (Portrait of Tamara De Lempika)',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  {
    position: 120,
    src: '/images/paintings/carousel/pa-ca-05c.jpg',
    alt: 'Innocent Memories of Red',
    title: 'Innocent Memories of Red',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
]

export const previousPaintingsCarouselEntries = [
  {
    position: 10,
    src: '/images/paintings/img-002.jpg',
    alt: 'The ecstatic renaissance of life',
    title: 'The ecstatic renaissance of life',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 20,
    src: '/images/paintings/img-011.jpg',
    alt: 'Conception II',
    title: 'Conception II',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 30,
    src: '/images/paintings/img-010.jpg',
    alt: 'Life ',
    title: 'Life ',
    description: 'Acrylics on canvas - 160 cm x 120 cm'
  },
  {
    position: 40,
    src: '/images/paintings/img-029.jpg',
    alt: 'The future awaits" said the flower',
    title: 'The future awaits" said the flower',
    description: 'Oil, acrylics & pastels on canvas - 162 cm x 113 cm'
  },
  {
    position: 50,
    src: '/images/paintings/img-004.jpg',
    alt: 'The future awaits" said the bird',
    title: 'The future awaits" said the bird',
    description: 'Acrylics on canvas - 115 cm x 95 cm'
  },
  {
    position: 60,
    src: '/images/paintings/img-001.jpg',
    alt: 'Eternity',
    title: 'Eternity',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 70,
    src: '/images/paintings/img-013.jpg',
    alt: 'The temptation of innocence',
    title: 'The temptation of innocence',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 80,
    src: '/images/paintings/img-003.jpg',
    alt: 'The seduction of spring',
    title: 'The seduction of spring',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 90,
    src: '/images/paintings/img-005.jpg',
    alt: 'Zen in the garden of roses',
    title: 'Zen in the garden of roses',
    description: 'Acrylics on canvas - 118 cm x 84 cm'
  },
  {
    position: 100,
    src: '/images/paintings/img-006.jpg',
    alt: 'Awaiting hope',
    title: 'Awaiting hope',
    description: 'Acrylics on canvas - 115 cm x 80 cm'
  },
  {
    position: 110,
    src: '/images/paintings/img-007.jpg',
    alt: 'Unconscious memories of self I',
    title: 'Unconscious memories of self I',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 120,
    src: '/images/paintings/img-008.jpg',
    alt: 'Unconscious memories of self II',
    title: 'Unconscious memories of self II',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 130,
    src: '/images/paintings/img-009.jpg',
    alt: 'The protection II',
    title: 'The protection II',
    description: 'Acrylics & crayons on canvas - 160 cm x 120 cm'
  },
  {
    position: 140,
    src: '/images/paintings/img-012.jpg',
    alt: 'Summer is a glance at infinity',
    title: 'Summer is a glance at infinity',
    description: 'Acrylics on canvas - 120 cm x 90 cm'
  },
  {
    position: 150,
    src: '/images/paintings/img-014.jpg',
    alt: 'Spring is a glance at the future I',
    title: 'Spring is a glance at the future I',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 160,
    src: '/images/paintings/img-015.jpg',
    alt: 'Spring is a glance at the future II',
    title: 'Spring is a glance at the future II',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 170,
    src: '/images/paintings/img-016.jpg',
    alt: 'Reflections of the future',
    title: 'Reflections of the future',
    description: 'Acrylics on canvas - 120 cm x 90 cm'
  },
  {
    position: 180,
    src: '/images/paintings/img-017.jpg',
    alt: 'Wisdom',
    title: 'Wisdom',
    description: 'Oil, acrylics & pastels on canvas - 145 cm x 96 cm'
  },
  {
    position: 190,
    src: '/images/paintings/img-018.jpg',
    alt: 'Dreaming of daylight through the night',
    title: 'Dreaming of daylight through the night',
    description: 'Acrylics on canvas - 146 cm x 114 cm'
  },
  {
    position: 200,
    src: '/images/paintings/img-019.jpg',
    alt: 'Venus in Paris II',
    title: 'Venus in Paris II',
    description: 'Acrylics on canvas - 100 cm diameter'
  },
  {
    position: 210,
    src: '/images/paintings/img-020.jpg',
    alt: 'The whispering of dreams to come',
    title: 'The whispering of dreams to come',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 220,
    src: '/images/paintings/img-035.jpg',
    alt: 'Infinity',
    title: 'Infinity',
    description: 'Acrylics & pastels on canvas - 120 cm x 90 cm'
  },
  {
    position: 230,
    src: '/images/paintings/img-021.jpg',
    alt: 'Life II',
    title: 'Life II',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 240,
    src: '/images/paintings/img-022.jpg',
    alt: 'Conception II',
    title: 'Conception II',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 250,
    src: '/images/paintings/img-023.jpg',
    alt: 'Contemplating herself',
    title: 'Contemplating herself',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 260,
    src: '/images/paintings/img-024.jpg',
    alt: 'Whispering hope',
    title: 'Whispering hope',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 270,
    src: '/images/paintings/img-025.jpg',
    alt: 'Temptation',
    title: 'Temptation',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  }
]

export const olderPaintingsCarouselEntries = [
  {
    position: 10,
    src: '/images/paintings/img-026.jpg',
    alt: 'Infinity II',
    title: 'Infinity II',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 20,
    src: '/images/paintings/img-027.jpg',
    alt: 'Athena',
    title: 'Athena',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 30,
    src: '/images/paintings/img-028.jpg',
    alt: 'The bird and the spider',
    title: 'The bird and the spider',
    description: 'Oil, acrylics & pastels on canvas - 160 cm x 120 cm'
  },
  {
    position: 40,
    src: '/images/paintings/img-036.jpg',
    alt: 'Memories of a summer gone by',
    title: 'Memories of a summer gone by',
    description: 'Oil & acrylics on canvas - 130 cm x 96 cm'
  },
  {
    position: 50,
    src: '/images/paintings/img-046.jpg',
    alt: 'Venus in Paris',
    title: 'Venus in Paris',
    description: 'Oil, acrylics & pastels on canvas - 130 cm x 96 cm'
  },
  {
    position: 60,
    src: '/images/paintings/img-030.jpg',
    alt: '...remembering herself',
    title: '...remembering herself',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 70,
    src: '/images/paintings/img-031.jpg',
    alt: 'Euphoria',
    title: 'Euphoria',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 80,
    src: '/images/paintings/img-032.jpg',
    alt: 'Romeo and Juliet',
    title: 'Romeo and Juliet',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 90,
    src: '/images/paintings/img-033.jpg',
    alt: 'Always summer',
    title: 'Always summer',
    description: 'Mixed media on canvas - 120 cm x 100 cm'
  },
  {
    position: 100,
    src: '/images/paintings/img-034.jpg',
    alt: 'The flower that fell in love with a woman',
    title: 'The flower that fell in love with a woman',
    description: 'Oil on canvas - 77 cm x 51 cm'
  },
  {
    position: 110,
    src: '/images/paintings/img-037.jpg',
    alt: 'Epiphany',
    title: 'Epiphany',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 120,
    src: '/images/paintings/img-038.jpg',
    alt: 'The torture of spring',
    title: 'The torture of spring',
    description: 'Oil, acrylics & watercolours on canvas - 46 cm x 36 cm'
  },
  {
    position: 130,
    src: '/images/paintings/img-039.jpg',
    alt: 'The triumph of illusions',
    title: 'The triumph of illusions',
    description: 'Acrylics on canvas - 55 cm x 45 cm'
  },
  {
    position: 140,
    src: '/images/paintings/img-040.jpg',
    alt: 'The falling angel',
    title: 'The falling angel',
    description: 'Oil on canvas - 77 cm x 61 cm'
  },
  {
    position: 150,
    src: '/images/paintings/img-041.jpg',
    alt: 'Epigraph',
    title: 'Epigraph',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 160,
    src: '/images/paintings/img-042.jpg',
    alt: 'Apollo and Daphne',
    title: 'Apollo and Daphne',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 170,
    src: '/images/paintings/img-043.jpg',
    alt: 'Angels remembering themselves',
    title: 'Angels remembering themselves',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 180,
    src: '/images/paintings/img-044.jpg',
    alt: 'The instinct of rebirth',
    title: 'The instinct of rebirth',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 190,
    src: '/images/paintings/img-045.jpg',
    alt: 'The rock that started to feel',
    title: 'The rock that started to feel',
    description: 'Burned oil on canvas - 61 cm x 46 cm'
  },
  {
    position: 200,
    src: '/images/paintings/img-047.jpg',
    alt: 'Venus in winter thinking of summer',
    title: 'Venus in winter thinking of summer',
    description: 'Oil & acrylics on canvas - 75 cm x 40 cm'
  },
  {
    position: 210,
    src: '/images/paintings/img-048.jpg',
    alt: 'The endless struggle',
    title: 'The endless struggle',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 220,
    src: '/images/paintings/img-053.jpg',
    alt: 'The escape of dreams',
    title: 'The escape of dreams',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 230,
    src: '/images/paintings/img-049.jpg',
    alt: 'Together we view the world as one',
    title: 'Together we view the world as one',
    description: 'Acrylics & watercolors on canvas - 50 cm x 50 cm'
  },
  {
    position: 240,
    src: '/images/paintings/img-050.jpg',
    alt: 'In the web of stability',
    title: 'In the web of stability',
    description: 'Oil & acrylics on canvas - 92 cm x 67 cm'
  },
  {
    position: 250,
    src: '/images/paintings/img-051.jpg',
    alt: 'The secret life of plants',
    title: 'The secret life of plants',
    description: 'Oil & acrylics on canvas - 120 cm x 87 cm'
  },
  {
    position: 260,
    src: '/images/paintings/img-052.jpg',
    alt: 'The tree and the spirit',
    title: 'The tree and the spirit',
    description: 'Oil & acrylics on canvas - 60 cm x 50 cm'
  },
  {
    position: 270,
    src: '/images/paintings/img-054.jpg',
    alt: 'The woman that fell in love with a flower',
    title: 'The woman that fell in love with a flower',
    description: 'Oil on canvas - 46 cm x 36 cm'
  },
  {
    position: 280,
    src: '/images/paintings/img-055.jpg',
    alt: 'The Archangel of regret',
    title: 'The Archangel of regret',
    description: 'Oil on canvas - 102 cm x 76 cm'
  },
  {
    position: 290,
    src: '/images/paintings/img-056.jpg',
    alt: 'The Archangel of silence',
    title: 'The Archangel of silence',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 300,
    src: '/images/paintings/img-057.jpg',
    alt: 'Conception',
    title: 'Conception',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
]

export const paintingsEntries = [
  {
    position: 1,
    src: '/images/paintings/img-001.jpg',
    alt: 'Painting 1',
    title: 'Eternity',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-002.jpg',
    alt: 'Painting 2',
    title: 'The ecstatic renaissance of life',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-003.jpg',
    alt: 'Painting 3',
    title: 'The seduction of spring',
    description: 'Acrylics on canvas - 118 cm x 84cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-004.jpg',
    alt: 'Painting 4',
    title: '"The future awaits" said the bird',
    description: 'Acrylics on canvas - 115 cm x 95 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-005.jpg',
    alt: 'Painting 5',
    title: 'Zen in the garden of roses',
    description: 'Acrylics on canvas - 118 cm x 84cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-006.jpg',
    alt: 'Painting 6',
    title: 'Awaiting hope',
    description: 'Acrylics on canvas - 115 cm x 80cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-007.jpg',
    alt: 'Painting 7',
    title: 'Unconscious memories of self I',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-008.jpg',
    alt: 'Painting 8',
    title: 'Unconscious memories of self II',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-009.jpg',
    alt: 'Painting 9',
    title: 'The protection II',
    description: 'Acrylics on canvas - 160 cm x 120 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-010.jpg',
    alt: 'Painting 10',
    title: 'Life',
    description: 'Acrylics & crayons on canvas - 160 cm x 120 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-011.jpg',
    alt: 'Painting 11',
    title: 'Conception II',
    description: 'Acrylics on canvas - 148 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-012.jpg',
    alt: 'Painting 12',
    title: 'Summer is a glance at infinity',
    description: 'Acrylics on canvas - 120 cm x 90 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-013.jpg',
    alt: 'Painting 13',
    title: 'The temptation of innocence',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-014.jpg',
    alt: 'Painting 14',
    title: 'Spring is a glance at the future I',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-015.jpg',
    alt: 'Painting 15',
    title: 'Spring is a glance at the future II',
    description: 'Acrylics on canvas - 80 cm x 60 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-016.jpg',
    alt: 'Painting 16',
    title: 'Reflections of the future',
    description: 'Acrylics on canvas - 120 cm x 90 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-017.jpg',
    alt: 'Painting 17',
    title: 'Wisdom',
    description: 'Oil, acrylics, & pastels on canvas - 145 cm x 96 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-018.jpg',
    alt: 'Painting 18',
    title: 'Dreaming of daylight through the night',
    description: 'Acrylics & pastels on canvas - 146 cm x 114cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-019.jpg',
    alt: 'Painting 19',
    title: 'Venus in Paris II',
    description: 'Acrylics on canvas - 100 cm diameter'
  },
  {
    position: 1,
    src: '/images/paintings/img-020.jpg',
    alt: 'Painting 20',
    title: 'The whispering of dreams to come',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-021.jpg',
    alt: 'Painting 21',
    title: 'Life II',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-022.jpg',
    alt: 'Painting 22',
    title: 'Conception II',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-023.jpg',
    alt: 'Painting 23',
    title: 'Contemplating herself',
    description: 'Acrylics on canvas - 130 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-024.jpg',
    alt: 'Painting 24',
    title: 'Whispering hope',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-025.jpg',
    alt: 'Painting 25',
    title: 'Temptation',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-026.jpg',
    alt: 'Painting 26',
    title: 'Infinity II',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-027.jpg',
    alt: 'Painting 27',
    title: 'Athena',
    description: 'Acrylics on canvas - 135 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-028.jpg',
    alt: 'Painting 28',
    title: 'The bird and the spider',
    description: 'Oil, acrylics & pastels on canvas - 160 cm x 120 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-029.jpg',
    alt: 'Painting 29',
    title: '"The future awaits" said the flower',
    description: 'Oil, acrylics & pastels on canvas - 162 cm x 113 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-030.jpg',
    alt: 'Painting 30',
    title: '...remembering herself',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-031.jpg',
    alt: 'Painting 31',
    title: 'Euphoria',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-032.jpg',
    alt: 'Painting 32',
    title: 'Romeo and Juliet',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-033.jpg',
    alt: 'Painting 33',
    title: 'Always summer',
    description: 'Mixed media on canvas - 120 cm x 100 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-034.jpg',
    alt: 'Painting 34',
    title: 'The flower that fell in love with a woman',
    description: 'Oil on canvas - 77 cm x 51 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-035.jpg',
    alt: 'Painting 35',
    title: 'Infinity',
    description: 'Acrylics & pastels on canvas - 120 cm x 90 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-036.jpg',
    alt: 'Painting 36',
    title: 'Memories of a summer gone by',
    description: 'Oil & acrylics on canvas - 130 cm x 96 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-037.jpg',
    alt: 'Painting 37',
    title: 'Epiphany',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-038.jpg',
    alt: 'Painting 38',
    title: 'The torture of spring',
    description: 'Oil, acrylics @ watercolours on canvas - 46 cm x 36 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-039.jpg',
    alt: 'Painting 39',
    title: 'The triumph of illusions',
    description: 'Acrylics on canvas - 55 cm x 45 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-040.jpg',
    alt: 'Painting 40',
    title: 'The falling angel',
    description: 'Oil on canvas - 77 cm x 61 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-041.jpg',
    alt: 'Painting 41',
    title: 'Epigraph',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-042.jpg',
    alt: 'Painting 42',
    title: 'Apollo and Daphne',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-043.jpg',
    alt: 'Painting 43',
    title: 'Angels remembering themselves',
    description: 'Oil & acrylics on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-044.jpg',
    alt: 'Painting 44',
    title: 'The instinct of rebirth',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-045.jpg',
    alt: 'Painting 45',
    title: 'The rock that started to feel',
    description: 'Burned oil on canvas - 61 cm x 46 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-046.jpg',
    alt: 'Painting 46',
    title: 'Venus in Paris',
    description: 'Oil, acrylics & pastels on canvas - 130 cm x 96 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-047.jpg',
    alt: 'Painting 47',
    title: 'Venus in winter thinking of summer',
    description: 'Oil & acrylics on canvas - 75 cm x 40 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-048.jpg',
    alt: 'Painting 48',
    title: 'The endless straggle',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-049.jpg',
    alt: 'Painting 49',
    title: 'Together we view the world as one',
    description: 'Acrylics & watercolors on canvas - 50 cm x 38 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-050.jpg',
    alt: 'Painting 50',
    title: 'In the web of stability',
    description: 'Oil & acrylics on canvas - 92 cm x 67 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-051.jpg',
    alt: 'Painting 51',
    title: 'The secret life of plants',
    description: 'Oil & acrylics on canvas - 120 cm x 87 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-052.jpg',
    alt: 'Painting 52',
    title: 'The tree and the spirit',
    description: 'Oil & acrylics on canvas - 60 cm x 50 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-053.jpg',
    alt: 'Painting 53',
    title: 'The escape of dreams',
    description: 'Oil, acrylics & pastels on canvas - 120 cm x 100 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-054.jpg',
    alt: 'Painting 54',
    title: 'The woman that fell in love with a flower',
    description: 'Oil on canvas - 46 cm x 36 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-055.jpg',
    alt: 'Painting 55',
    title: 'The Archangel of regret',
    description: 'Oil  on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-056.jpg',
    alt: 'Painting 56',
    title: 'The Archangel of silence',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-057.jpg',
    alt: 'Painting 57',
    title: 'Conception',
    description: 'Oil, acrylics & pastels on canvas - 102 cm x 76 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-058.jpg',
    alt: 'Painting 58',
    title: 'Morning promises',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-059.jpg',
    alt: 'Painting 59',
    title: 'Afternoon escape',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-060.jpg',
    alt: 'Painting 60',
    title: 'Evening reminiscing of day',
    description: 'Acrylics on canvas -  118 cm x 83 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-061.jpg',
    alt: 'Painting 61',
    title: 'Eudaimonia',
    description: 'Acrylics on canvas - 147 cm x 105 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-062.jpg',
    alt: 'Painting 62',
    title: 'Zero is infinity reversed to time (cosmos)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-063.jpg',
    alt: 'Painting 63',
    title: '...remembering himself',
    description: 'Acrylics on canvas -  100 cm x 67 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-064.jpg',
    alt: 'Painting 64',
    title: 'The Stare of things to come... (Demian)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-066.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-067.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-068.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-069.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  {
    position: 1,
    src: '/images/paintings/img-070.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
];

export const paintingsCarousel = [
  {
    position: 10,
    src: '/images/paintings/carousel/pa-ca-01.jpg',
    alt: 'Eudaimonia',
    title: 'Eudaimonia',
    description: 'Acrylics on canvas - 147 cm x 105 cm'
  },
  {
    position: 14,
    src: '/images/paintings/carousel/pa-ca-01c.jpg',
    alt: 'An orange state of red',
    title: 'An orange state of red',
    description: 'Acrylics on canvas - 150 cm x 115 cm'
  },
  {
    position: 20,
    src: '/images/paintings/carousel/pa-ca-02.jpg',
    alt: 'The illusion of time (Triptych)',
    title: 'The illusion of time (Triptych)',
    description: 'Acrylics on canvas - 118 cm x 83 cm (individual painting)'
  },
  {
    position: 30,
    src: '/images/paintings/carousel/pa-ca-03.jpg',
    alt: 'Morning Promises',
    title: 'Morning Promises',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 40,
    src: '/images/paintings/carousel/pa-ca-04.jpg',
    alt: 'Afternoon escape',
    title: 'Afternoon escape',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 50,
    src: '/images/paintings/carousel/pa-ca-05.jpg',
    alt: 'Evening reminiscing of day',
    title: 'Evening reminiscing of day',
    description: 'Acrylics on canvas - 118 cm x 83 cm'
  },
  {
    position: 52,
    src: '/images/paintings/carousel/pa-ca-05b.jpg',
    alt: 'The Achronic Remembrances of Time',
    title: 'The Achronic Remembrances of Time',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
  {
    position: 54,
    src: '/images/paintings/carousel/pa-ca-05c.jpg',
    alt: 'Innocent Memories of Red',
    title: 'Innocent Memories of Red',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
  {
    position: 60,
    src: '/images/paintings/carousel/pa-ca-06.jpg',
    alt: 'Athena in Paris',
    title: 'Athena in Paris',
    description: 'Acrylics on canvas - 135 cm x 90 cm'
  },
  {
    position: 62,
    src: '/images/paintings/carousel/pa-ca-10.jpg',
    alt: 'The Stare of things to come... (Demian)',
    title: 'The Stare of things to come... (Demian)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 64,
    src: '/images/paintings/carousel/pa-ca-11.jpg',
    alt: '...remembering himself',
    title: '...remembering himself',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 66,
    src: '/images/paintings/carousel/pa-ca-12.jpg',
    alt: 'Zero is infinity reversed to time (cosmos)',
    title: 'Zero is infinity reversed to time (cosmos)',
    description: 'Acrylics on canvas - 100 cm x 67 cm'
  },
  {
    position: 70,
    src: '/images/paintings/carousel/pa-ca-07.jpg',
    alt: 'The deception of Spring (Portrait of Tamara De Lempika)',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
  // {
  //   position: 80,
  //   src: '/images/paintings/carousel/pa-ca-08.jpg',
  //   alt: 'The temptation of innocence - Acrylics on canvas',
  //   title: 'The temptation of innocence - Acrylics on canvas',
  //   description: 'Acrylics on canvas - 130 cm x 105 cm'
  // },
  // {
  //   position: 90,
  //   src: '/images/paintings/carousel/pa-ca-09.jpg',
  //   alt: 'The future awaits said the flower',
  //   title: 'The future awaits said the flower',
  //   description: 'Oil, acrylics & pastels on canvas - 162 cm x 113 cm'
  // },
];

export const fashionEntries = [
  {
    position: 100,
    src: '/images/fashion/fashion_06.jpg',
    alt: 'Fashion 1',
    title: 'Fashion 1',
  },
  {
    position: 200,
    src: '/images/fashion/fashion_02.jpg',
    alt: 'Fashion 2',
    title: 'Fashion 2',
  },
  {
    position: 400,
    src: '/images/fashion/fashion_04.jpg',
    alt: 'Fashion 4',
    title: 'Fashion 4',
  },
  {
    position: 500,
    src: '/images/fashion/fashion_05.jpg',
    alt: 'Fashion 5',
    title: 'Fashion 5',
  },
  {
    position: 550,
    src: '/images/fashion/clips/short_003.mp4',
    alt: 'Fashion Clip 3',
    title: 'Fashion Clip 3',
    video: true,
  },
  {
    position: 600,
    src: '/images/fashion/fashion_07.jpg',
    alt: 'Fashion 6',
    title: 'Fashion 6',
  },
  {
    position: 700,
    src: '/images/fashion/fashion_01.jpg',
    alt: 'Fashion 7',
    title: 'Fashion 7',
    description: ''
  },
  {
    position: 800,
    src: '/images/fashion/fashion_08.jpg',
    alt: 'Fashion 8',
    title: 'Fashion 8',
  },
  {
    position: 900,
    src: '/images/fashion/fashion_09.jpg',
    alt: 'Fashion 9',
    title: 'Fashion 9',
  },
  {
    position: 950,
    src: '/images/fashion/clips/short_001.mp4',
    alt: 'Fashion Clip 1',
    title: 'Fashion Clip 1',
    video: true,
  },
  {
    position: 1000,
    src: '/images/fashion/fashion_10.jpg',
    alt: 'Fashion 10',
    title: 'Fashion 10',
  },
  {
    position: 1100,
    src: '/images/fashion/fashion_11.jpg',
    alt: 'Fashion 11',
    title: 'Fashion 11',
  },
  {
    position: 1150,
    src: '/images/fashion/clips/short_004.mp4',
    alt: 'Fashion Clip 4',
    title: 'Fashion Clip 4',
    video: true,
  },
  {
    position: 1200,
    src: '/images/fashion/fashion_12.jpg',
    alt: 'Fashion 12',
    title: 'Fashion 12',
  },
  {
    position: 1300,
    src: '/images/fashion/fashion_13.jpg',
    alt: 'Fashion 13',
    title: 'Fashion 13',
  },
  {
    position: 1350,
    src: '/images/fashion/clips/short_011.mp4',
    alt: 'Fashion Clip 11',
    title: 'Fashion Clip 11',
    video: true,
  },
  {
    position: 1400,
    src: '/images/fashion/fashion_14.jpg',
    alt: 'Fashion 14',
    title: 'Fashion 14',
  },
  {
    position: 1450,
    src: '/images/fashion/clips/short_002.mp4',
    alt: 'Fashion Clip 2',
    title: 'Fashion Clip 2',
    video: true,
  },
  {
    position: 1500,
    src: '/images/fashion/fashion_15.jpg',
    alt: 'Fashion 15',
    title: 'Fashion 15',
  },
  {
    position: 1550,
    src: '/images/fashion/clips/short_012.mp4',
    alt: 'Fashion Clip 12',
    title: 'Fashion Clip 12',
    video: true,
  },
  {
    position: 1600,
    src: '/images/fashion/fashion_16.jpg',
    alt: 'Fashion 16',
    title: 'Fashion 16',
  },
  {
    position: 1650,
    src: '/images/fashion/clips/short_005.mp4',
    alt: 'Fashion Clip 5',
    title: 'Fashion Clip 5',
    video: true,
  },
  {
    position: 1700,
    src: '/images/fashion/fashion_17.jpg',
    alt: 'Fashion 17',
    title: 'Fashion 17',
  },
  {
    position: 1750,
    src: '/images/fashion/clips/short_013.mp4',
    alt: 'Fashion Clip 13',
    title: 'Fashion Clip 13',
    video: true,
  },
  {
    position: 1800,
    src: '/images/fashion/fashion_18.jpg',
    alt: 'Fashion 18',
    title: 'Fashion 18',
  },
  {
    position: 1850,
    src: '/images/fashion/clips/short_007.mp4',
    alt: 'Fashion Clip 7',
    title: 'Fashion Clip 7',
    video: true,
  },
  {
    position: 1875,
    src: '/images/fashion/clips/short_014.mp4',
    alt: 'Fashion Clip 14',
    title: 'Fashion Clip 14',
    video: true,
  },
  {
    position: 1900,
    src: '/images/fashion/fashion_19.jpg',
    alt: 'Fashion 19',
    title: 'Fashion 19',
  },
  {
    position: 2000,
    src: '/images/fashion/fashion_20.jpg',
    alt: 'Fashion 20',
    title: 'Fashion 20',
  },
  {
    position: 2050,
    src: '/images/fashion/clips/short_015.mp4',
    alt: 'Fashion Clip 15',
    title: 'Fashion Clip 15',
    video: true,
  },
  {
    position: 2100,
    src: '/images/fashion/fashion_21.jpg',
    alt: 'Fashion 21',
    title: 'Fashion 21',
  },
  {
    position: 2150,
    src: '/images/fashion/clips/short_006.mp4',
    alt: 'Fashion Clip 6',
    title: 'Fashion Clip 6',
    video: true,
  },
  {
    position: 2200,
    src: '/images/fashion/fashion_22.jpg',
    alt: 'Fashion 22',
    title: 'Fashion 22',
  },
  {
    position: 2250,
    src: '/images/fashion/clips/short_016.mp4',
    alt: 'Fashion Clip 16',
    title: 'Fashion Clip 16',
    video: true,
  },
  {
    position: 2300,
    src: '/images/fashion/fashion_23.jpg',
    alt: 'Fashion 23',
    title: 'Fashion 23',
  },
  {
    position: 2350,
    src: '/images/fashion/clips/short_008.mp4',
    alt: 'Fashion Clip 8',
    title: 'Fashion Clip 8',
    video: true,
  },
  {
    position: 2375,
    src: '/images/fashion/clips/short_018.mp4',
    alt: 'Fashion Clip 18',
    title: 'Fashion Clip 18',
    video: true,
  },
  {
    position: 2385,
    src: '/images/fashion/clips/short_022.mp4',
    alt: 'Fashion Clip 22',
    title: 'Fashion Clip 22',
    video: true,
  },
  {
    position: 2400,
    src: '/images/fashion/fashion_24.jpg',
    alt: 'Fashion 24',
    title: 'Fashion 24',
  },
  {
    position: 2500,
    src: '/images/fashion/fashion_25.jpg',
    alt: 'Fashion 25',
    title: 'Fashion 25',
  },
  {
    position: 2525,
    src: '/images/fashion/clips/short_019.mp4',
    alt: 'Fashion Clip 19',
    title: 'Fashion Clip 19',
    video: true,
  },
  {
    position: 2550,
    src: '/images/fashion/clips/short_017.mp4',
    alt: 'Fashion Clip 17',
    title: 'Fashion Clip 17',
    video: true,
  },
  {
    position: 2600,
    src: '/images/fashion/fashion_26.jpg',
    alt: 'Fashion 26',
    title: 'Fashion 26',
  },
  {
    position: 2650,
    src: '/images/fashion/clips/short_009.mp4',
    alt: 'Fashion Clip 9',
    title: 'Fashion Clip 9',
    video: true,
  },
  {
    position: 2675,
    src: '/images/fashion/clips/short_020.mp4',
    alt: 'Fashion Clip 20',
    title: 'Fashion Clip 20',
    video: true,
  },
  {
    position: 2700,
    src: '/images/fashion/fashion_27.jpg',
    alt: 'Fashion 27',
    title: 'Fashion 27',
  },
  {
    position: 2800,
    src: '/images/fashion/fashion_28.jpg',
    alt: 'Fashion 28',
    title: 'Fashion 28',
  },
  {
    position: 2825,
    src: '/images/fashion/clips/short_021.mp4',
    alt: 'Fashion Clip 21',
    title: 'Fashion Clip 21',
    video: true,
  },
  {
    position: 2850,
    src: '/images/fashion/clips/short_010.mp4',
    alt: 'Fashion Clip 10',
    title: 'Fashion Clip 10',
    video: true,
  },
] as GenericItemType[];

export const fashionPressEntries: GenericItemType[] = [
  {
    title: 'Travel & Life',
    src: '/images/fashion/press/fashion_press_01.jpg',
    alt: 'Fashion Press 1',
  },
  {
    title: "Women's Wear Daily",
    src: '/images/fashion/press/fashion_press_02.jpg',
    alt: 'Fashion Press 2',
  },
  {
    title: 'Women\'s Wear Daily - New York',
    src: '/images/fashion/press/fashion_press_03.jpg',
    alt: 'Fashion Press 3',
  },
  {
    title: 'Estivant',
    src: '/images/fashion/press/fashion_press_04.jpg',
    alt: 'Fashion Press 4',
  },
  {
    title: 'Retailing in focus',
    src: '/images/fashion/press/fashion_press_05.jpg',
    alt: 'Fashion Press 5',
  },
  // {
  //   title: 'Fashion Press 6',
  //   src: '/images/fashion/press/fashion_press_06.jpg',
  //   alt: 'Fashion Press 6',
  // },
  {
    title: 'Travel & Life',
    src: '/images/fashion/press/fashion_press_07.jpg',
    alt: 'Fashion Press 7',
  },
  {
    title: 'Framed',
    src: '/images/fashion/press/fashion_press_08.jpg',
    alt: 'Fashion Press 8',
  },
];

export const news01Entries = [
  {
    position: 10,
    src: '/images/news/news01/news_01-01.jpg',
    alt: 'CNA Charity Gala 1',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 2
  },
  {
    position: 20,
    src: '/images/news/news01/news_01-02.jpg',
    alt: 'CNA Charity Gala 2',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 30,
    src: '/images/news/news01/news_01-03.jpg',
    alt: 'CNA Charity Gala 4',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 40,
    src: '/images/news/news01/news_01-04.jpg',
    alt: 'CNA Charity Gala 4',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 50,
    src: '/images/news/news01/news_01-05.jpg',
    alt: 'CNA Charity Gala 5',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 60,
    src: '/images/news/news01/news_01-06.jpg',
    alt: 'CNA Charity Gala 6',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 70,
    src: '/images/news/news01/news_01-07.jpg',
    alt: 'CNA Charity Gala 7',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 80,
    src: '/images/news/news01/news_01-08.jpg',
    alt: 'CNA Charity Gala 8',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 90,
    src: '/images/news/news01/news_01-09.jpg',
    alt: 'CNA Charity Gala 9',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 100,
    src: '/images/news/news01/news_01-10.jpg',
    alt: 'CNA Charity Gala 10',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 1
  },
  {
    position: 110,
    src: '/images/news/news01/news_01-11.jpg',
    alt: 'CNA Charity Gala 11',
    title: '“The Achronic Remembrances of Time... a note not to forget the future...”',
    description: 'Art Exhibition and Charity Gala Dinner under the auspices of Cyprus President Mr. Nicos Anastasiades 28th June 2019 - Old Limassol Port',
    cols: 3
  },
];

export const literatureTango29Carousel = [
  {
    position: 10,
    src: '/images/literature/tango-1.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  // {
  //   position: 20,
  //   src: '/images/literature/tango29/carousel/tango-kolossi-01.jpg',
  //   alt: 'Tango 29',
  //   title: 'Tango 29',
  // },
  {
    position: 30,
    src: '/images/literature/tango29/carousel/CHR_2893.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 40,
    src: '/images/literature/tango29/carousel/CHR_3024.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 50,
    src: '/images/literature/tango29/carousel/CHR_3354.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 60,
    src: '/images/literature/tango29/carousel/CHR_3398.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 70,
    src: '/images/literature/tango29/carousel/CHR_2748.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 80,
    src: '/images/literature/tango29/carousel/CHR_2872.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 90,
    src: '/images/literature/tango29/carousel/CHR_2776.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 100,
    src: '/images/literature/tango29/carousel/CHR_2777.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 110,
    src: '/images/literature/tango29/carousel/CHR_3208_B.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 120,
    src: '/images/literature/tango29/carousel/CHR_3259.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 130,
    src: '/images/literature/tango29/carousel/CHR_3482.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 140,
    src: '/images/literature/tango29/carousel/CHR_3490.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 150,
    src: '/images/literature/tango29/carousel/tango-kolossi-03.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 160,
    src: '/images/literature/tango29/carousel/CHR_3639.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  },
  {
    position: 170,
    src: '/images/literature/tango29/carousel/CHR_3718.jpg',
    alt: 'Tango 29',
    title: 'Tango 29',
    cols: 5
  }
] as GenericItemType[];


export const newsEventsPaintings01Carousel = [
  {
    position: 10,
    src: '/images/news/paintings/newsEvents01/news_01-01.jpg',
    alt: 'June 2019 - Old Limassol Port 1',
  },
  {
    position: 20,
    src: '/images/news/paintings/newsEvents01/news_01-02.jpg',
    alt: 'June 2019 - Old Limassol Port 2',
  },
  {
    position: 30,
    src: '/images/news/paintings/newsEvents01/news_01-03.jpg',
    alt: 'June 2019 - Old Limassol Port 3',
  },
  {
    position: 40,
    src: '/images/news/paintings/newsEvents01/news_01-04.jpg',
    alt: 'June 2019 - Old Limassol Port 4',
  },
  {
    position: 50,
    src: '/images/news/paintings/newsEvents01/news_01-05.jpg',
    alt: 'June 2019 - Old Limassol Port 5',
  },
  {
    position: 60,
    src: '/images/news/paintings/newsEvents01/news_01-06.jpg',
    alt: 'June 2019 - Old Limassol Port 6',
  },
  {
    position: 70,
    src: '/images/news/paintings/newsEvents01/news_01-07.jpg',
    alt: 'June 2019 - Old Limassol Port 7',
  },
  {
    position: 80,
    src: '/images/news/paintings/newsEvents01/news_01-08.jpg',
    alt: 'June 2019 - Old Limassol Port 8',
  },
  {
    position: 90,
    src: '/images/news/paintings/newsEvents01/news_01-09.jpg',
    alt: 'June 2019 - Old Limassol Port 9',
  },
  {
    position: 100,
    src: '/images/news/paintings/newsEvents01/news_01-10.jpg',
    alt: 'June 2019 - Old Limassol Port 10',
  },
  {
    position: 110,
    src: '/images/news/paintings/newsEvents01/news_01-11.jpg',
    alt: 'June 2019 - Old Limassol Port 11',
  }
]

export const newsEventsPaintings01GalleryCarousel : GenericItemType[] = [
  { position: 10, src: '/images/news/paintings/newsEvents01B/news_01B-01.jpg', alt: 'June 2019 - Exhibition Gallery 1' },
  { position: 20, src: '/images/news/paintings/newsEvents01B/news_01B-02.jpg', alt: 'June 2019 - Exhibition Gallery 2' },
  { position: 30, src: '/images/news/paintings/newsEvents01B/news_01B-03.jpg', alt: 'June 2019 - Exhibition Gallery 3' },
  { position: 40, src: '/images/news/paintings/newsEvents01B/news_01B-04.jpg', alt: 'June 2019 - Exhibition Gallery 4' },
  { position: 50, src: '/images/news/paintings/newsEvents01B/news_01B-05.jpg', alt: 'June 2019 - Exhibition Gallery 5' },
  { position: 60, src: '/images/news/paintings/newsEvents01B/news_01B-06.jpg', alt: 'June 2019 - Exhibition Gallery 6' },
  { position: 70, src: '/images/news/paintings/newsEvents01B/news_01B-07.jpg', alt: 'June 2019 - Exhibition Gallery 7' },
  { position: 80, src: '/images/news/paintings/newsEvents01B/news_01B-08.jpg', alt: 'June 2019 - Exhibition Gallery 8' },
  { position: 90, src: '/images/news/paintings/newsEvents01B/news_01B-09.jpg', alt: 'June 2019 - Exhibition Gallery 9' },
  { position: 100, src: '/images/news/paintings/newsEvents01B/news_01B-10.jpg', alt: 'June 2019 - Exhibition Gallery 10' },
  { position: 110, src: '/images/news/paintings/newsEvents01B/news_01B-11.jpg', alt: 'June 2019 - Exhibition Gallery 11' },
  { position: 120, src: '/images/news/paintings/newsEvents01B/news_01B-12.jpg', alt: 'June 2019 - Exhibition Gallery 12' },
  { position: 130, src: '/images/news/paintings/newsEvents01B/news_01B-13.jpg', alt: 'June 2019 - Exhibition Gallery 13' },
  { position: 140, src: '/images/news/paintings/newsEvents01B/news_01B-14.jpg', alt: 'June 2019 - Exhibition Gallery 14' },
  { position: 150, src: '/images/news/paintings/newsEvents01B/news_01B-15.jpg', alt: 'June 2019 - Exhibition Gallery 15' },
  { position: 160, src: '/images/news/paintings/newsEvents01B/news_01B-16.jpg', alt: 'June 2019 - Exhibition Gallery 16' },
  { position: 170, src: '/images/news/paintings/newsEvents01B/news_01B-17.jpg', alt: 'June 2019 - Exhibition Gallery 17' },
  { position: 180, src: '/images/news/paintings/newsEvents01B/news_01B-18.jpg', alt: 'June 2019 - Exhibition Gallery 18' },
  { position: 190, src: '/images/news/paintings/newsEvents01B/news_01B-19.jpg', alt: 'June 2019 - Exhibition Gallery 19' },
  { position: 200, src: '/images/news/paintings/newsEvents01B/news_01B-20.jpg', alt: 'June 2019 - Exhibition Gallery 20' },
  { position: 210, src: '/images/news/paintings/newsEvents01B/news_01B-21.jpg', alt: 'June 2019 - Exhibition Gallery 21' },
  { position: 220, src: '/images/news/paintings/newsEvents01B/news_01B-22.jpg', alt: 'June 2019 - Exhibition Gallery 22' },
  { position: 230, src: '/images/news/paintings/newsEvents01B/news_01B-23.jpg', alt: 'June 2019 - Exhibition Gallery 23' },
  { position: 240, src: '/images/news/paintings/newsEvents01B/news_01B-24.jpg', alt: 'June 2019 - Exhibition Gallery 24' },
  { position: 250, src: '/images/news/paintings/newsEvents01B/news_01B-25.jpg', alt: 'June 2019 - Exhibition Gallery 25' },
  { position: 260, src: '/images/news/paintings/newsEvents01B/news_01B-26.jpg', alt: 'June 2019 - Exhibition Gallery 26' },
  { position: 270, src: '/images/news/paintings/newsEvents01B/news_01B-27.jpg', alt: 'June 2019 - Exhibition Gallery 27' },
  { position: 280, src: '/images/news/paintings/newsEvents01B/news_01B-28.jpg', alt: 'June 2019 - Exhibition Gallery 28' },
  { position: 290, src: '/images/news/paintings/newsEvents01B/news_01B-29.jpg', alt: 'June 2019 - Exhibition Gallery 29' },
  { position: 300, src: '/images/news/paintings/newsEvents01B/news_01B-30.jpg', alt: 'June 2019 - Exhibition Gallery 30' },
  { position: 310, src: '/images/news/paintings/newsEvents01B/news_01B-31.jpg', alt: 'June 2019 - Exhibition Gallery 31' },
  { position: 320, src: '/images/news/paintings/newsEvents01B/news_01B-32.jpg', alt: 'June 2019 - Exhibition Gallery 32' },
  { position: 330, src: '/images/news/paintings/newsEvents01B/news_01B-33.jpg', alt: 'June 2019 - Exhibition Gallery 33' },
  { position: 340, src: '/images/news/paintings/newsEvents01B/news_01B-34.jpg', alt: 'June 2019 - Exhibition Gallery 34' },
  { position: 350, src: '/images/news/paintings/newsEvents01B/news_01B-35.jpg', alt: 'June 2019 - Exhibition Gallery 35' },
  { position: 360, src: '/images/news/paintings/newsEvents01B/news_01B-36.jpg', alt: 'June 2019 - Exhibition Gallery 36' },
  { position: 370, src: '/images/news/paintings/newsEvents01B/news_01B-37.jpg', alt: 'June 2019 - Exhibition Gallery 37' },
  { position: 380, src: '/images/news/paintings/newsEvents01B/news_01B-38.jpg', alt: 'June 2019 - Exhibition Gallery 38' },
];

export const pressPaintings02: GenericItemType[] = [
  {
    position: 10,
    src: '/images/press/paintings/001.jpg',
    alt: 'K Gallery',
  },
  {
    position: 20,
    src: '/images/press/paintings/100.jpg',
    alt: 'K Gallery 2',
  },
  {
    position: 30,
    src: '/images/press/paintings/102.jpg',
    alt: 'K Gallery 3',
  },
  {
    position: 40,
    src: '/images/press/paintings/300.jpg',
    alt: 'K Gallery 4',
  },
  {
    position: 50,
    src: '/images/press/paintings/400.jpg',
    alt: 'K Gallery 5',
  }
];

export const newsEventsPaintingsKGallery: GenericItemType[] = [
  {
    position: 10,
    src: '/images/news/paintings/KGallery/k-gallery-front.jpg',
    alt: 'K Gallery',
    cols: 3,
  },
  {
    position: 10,
    src: '/images/news/paintings/KGallery/001.jpg',
    alt: 'K Gallery',
    cols: 3,
  },
  {
    position: 10,
    src: '/images/news/paintings/KGallery/100.jpg',
    alt: 'K Gallery',
    cols: 1,
  },
  {
    position: 10,
    src: '/images/news/paintings/KGallery/102.jpg',
    alt: 'K Gallery',
    cols: 1
  },
  {
    position: 10,
    src: '/images/news/paintings/KGallery/300.jpg',
    alt: 'K Gallery',
    cols: 1,
  },
  {
    position: 10,
    src: '/images/news/paintings/KGallery/400.jpg',
    alt: 'K Gallery',
    cols: 1,
  },
]
