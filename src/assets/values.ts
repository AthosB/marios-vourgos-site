import {GenericItemType} from "@/Types/types";

export const aboutText = 'I never took seriously enough my studies in finance and my long career in this\n' +
  'field, my solo painting exhibitions, the fact that I was once an "almost famous"\n' +
  'fashion designer in New York, the experience of singing opera in ancient\n' +
  'amphitheaters, or even my poetry. And then the universe somehow decided it\n' +
  'was about time to convince me to take myself seriously (enough), or at least\n' +
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
  'It was there and then I finally got serious about something: my photographic\n' +
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

export const photoFilenames: imageType[] = [
  {
    position: 0,
    src: "/images/photography/001.jpg",
    alt: "Img 1",
    title: 'Nocturnal Contemplations of Hope',
    description: "100 cm x 80 cm"
  },
  {
    position: 2,
    src: "/images/photography/002.jpg",
    alt: "Img 2",
    title: "Remembering herself",
    description: "100 cm x 80 cm"
  },
  {
    position: 3,
    src: "/images/photography/003.jpg",
    alt: "Img 3",
    title: "The ecstatic recollection of self",
    description: "100 cm x 80 cm"
  },
  {
    position: 4,
    src: "/images/photography/004.jpg",
    alt: "Img 4",
    title: "The triumph of Illusions",
    description: "100 cm x 80 cm"
  },
  {
    position: 5,
    src: "/images/photography/005.jpg",
    alt: "Img 5",
    title: 'The Ecstatic Recollection of Time',
    description: "100 cm x 80 cm"
  },
  {
    position: 6,
    src: "/images/photography/006.jpg",
    alt: "Img 6",
    title: "The escape of thoughts to come",
    description: "100 cm x 80 cm"
  },
  {
    position: 7,
    src: "/images/photography/007.jpg",
    alt: "Img 7",
    title: "The stare of silence",
    description: "100 cm x 80 cm"
  },
  {
    position: 8,
    src: "/images/photography/008.jpg",
    alt: "Img 8",
    title: "… fade so soon, oh flower…( The Sleepwalker)",
    description: "100 cm x 80 cm"
  },
  {
    position: 9,
    src: "/images/photography/009.jpg",
    alt: "Img 9",
    title: "The illusion of space",
    description: "100 cm x 80 cm"
  },
  {
    position: 10,
    src: "/images/photography/010.jpg",
    alt: "Img 10",
    title: "The illusion of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 11,
    src: "/images/photography/011.jpg",
    alt: "Img 11",
    title: "The shadow of light",
    description: "100 cm x 80 cm"
  },
  {
    position: 12,
    src: "/images/photography/012.jpg",
    alt: "Img 11",
    title: "Echo of Eternity",
    description: "215 cm x 80 cm"
  },
  {
    position: 13,
    src: "/images/photography/013.jpg",
    alt: "Img 12",
    title: "Contemplating herself I",
    description: "100 cm x 80 cm"
  },
  {
    position: 14,
    src: "/images/photography/014.jpg",
    alt: "Img 13",
    title: "Contemplating herself II",
    description: "100 cm x 80 cm"
  },
  {
    position: 15,
    src: "/images/photography/015.jpg",
    alt: "Img 14",
    title: "infinite visions of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 16,
    src: "/images/photography/016.jpg",
    alt: "Img 15",
    title: "The flower that fell in live with a woman",
    description: "100 cm x 80 cm"
  },
  {
    position: 17,
    src: "/images/photography/017.jpg",
    alt: "Img 16",
    title: "Contemplating herself III",
    description: "100 cm x 80 cm"
  },
  {
    position: 18,
    src: "/images/photography/018.jpg",
    alt: "Img 17",
    title: "Contemplating herself IV",
    description: "100 cm x 80 cm"
  },
  {
    position: 19,
    src: "/images/photography/019.jpg",
    alt: "Img 18",
    title: "Contemplating herself V",
    description: "100 cm x 80 cm"
  },
  // {position: 20, src: "/images/photography/020.jpg", alt: "Img 19", title: '', description: ""},
  {
    position: 21,
    src: "/images/photography/020.jpg",
    alt: "Img 20",
    title: "in an artists's head",
    description: "100 cm x 80 cm"
  },
  {
    position: 22,
    src: "/images/photography/021.jpg",
    alt: "Img 21",
    title: 'The Achronic Remembrance of Self',
    description: "100 cm x 80 cm"
  },
  {position: 23, src: "/images/photography/022.jpg", alt: "Img 22", title: 'Parapraxis', description: "100 cm x 80 cm"},
  {position: 24, src: "/images/photography/023.jpg", alt: "Img 23", title: 'Epigraph', description: "100 cm x 80 cm"},
  {
    position: 25,
    src: "/images/photography/024.jpg",
    alt: "Img 24",
    title: 'The essence of Dreams to Come',
    description: "100 cm x 80 cm"
  },
  {
    position: 26,
    src: "/images/photography/025.jpg",
    alt: "Img 25",
    title: 'Perpetual Juliet',
    description: "100 cm x 80 cm"
  },
  {
    position: 27,
    src: "/images/photography/026.jpg",
    alt: "Img 26",
    title: 'Indigo Dreams of Blue',
    description: "100 cm x 80 cm"
  },
  {
    position: 28,
    src: "/images/photography/027.jpg",
    alt: "Img 27",
    title: 'Spring Awaiting Summer in the Fall',
    description: "100 cm x 80 cm"
  },
  {position: 29, src: "/images/photography/028.jpg", alt: "Img 28", title: 'Euphoria', description: "100 cm x 80 cm"},
  {
    position: 30,
    src: "/images/photography/029.jpg",
    alt: "Img 29",
    title: 'Awaiting Hope',
    description: "100 cm x 80 cm"
  },
  {
    position: 31,
    src: "/images/photography/030.jpg",
    alt: "Img 30",
    title: 'The Stare of Things to Come',
    description: "100 cm x 80 cm"
  },
  {
    position: 32,
    src: "/images/photography/033.jpg",
    alt: "Img 33",
    title: 'Hope is a glance at Infinity',
    description: "100 cm x 80 cm"
  },
  {position: 33, src: "/images/photography/032.jpg", alt: "Img 32", title: '', description: ""},
  {
    position: 35,
    src: "/images/photography/035.jpg",
    alt: "Img 35",
    title: "still life? I",
    description: "100 cm x 80 cm"
  },
  {
    position: 36,
    src: "/images/photography/036.jpg",
    alt: "Img 36",
    title: "still life? II",
    description: "100 cm x 80 cm"
  },
  {
    position: 37,
    src: "/images/photography/037.jpg",
    alt: "Img 37",
    title: "still life? III",
    description: "100 cm x 80 cm"
  },
  {
    position: 38,
    src: "/images/photography/038.jpg",
    alt: "Img 38",
    title: "Victorian memories of a flower",
    description: "100 cm x 80 cm"
  },
  {
    position: 39,
    src: "/images/photography/039.jpg",
    alt: "Img 39",
    title: "The scream os silence",
    description: "100 cm x 80 cm"
  },
  {
    position: 40,
    src: "/images/photography/040.jpg",
    alt: "Img 40",
    title: 'Sardonic Smile',
    description: "100 cm x 80 cm"
  },
  {
    position: 41,
    src: "/images/photography/041.jpg",
    alt: "Img 41",
    title: "thoughts of future days gone by I",
    description: "100 cm x 80 cm"
  },
  {
    position: 42,
    src: "/images/photography/040.jpg",
    alt: "Img 42",
    title: "thoughts of future days gone by II",
    description: "100 cm x 80 cm"
  },
  {
    position: 43,
    src: "/images/photography/041.jpg",
    alt: "Img 43",
    title: "time revealing the future today",
    description: "100 cm x 80 cm"
  },
  {
    position: 44,
    src: "/images/photography/042.jpg",
    alt: "Img 44",
    title: "…and her thoughts defined  the universe",
    description: "100 cm x 80 cm"
  },
  {
    position: 45,
    src: "/images/photography/043.jpg",
    alt: "Img 45",
    title: "nocturnal whispers of hope",
    description: "100 cm x 80 cm"
  },
  {
    position: 46,
    src: "/images/photography/044.jpg",
    alt: "Img 46",
    title: "the maiden and the shadow",
    description: "100 cm x 80 cm"
  },
  {
    position: 47,
    src: "/images/photography/045.jpg",
    alt: "Img 47",
    title: "anticipating hope",
    description: "100 cm x 80 cm"
  },
  {
    position: 48,
    src: "/images/photography/046.jpg",
    alt: "Img 48",
    title: "The eternal struggle",
    description: "100 cm x 80 cm"
  },
  {position: 49, src: "/images/photography/047.jpg", alt: "Img 49", title: '', description: "100 cm x 80 cm"},
  {
    position: 50,
    src: "/images/photography/048.jpg",
    alt: "Img 50",
    title: "sweet melancholia of  timeless being",
    description: "100 cm x 80 cm"
  },
  {
    position: 51,
    src: "/images/photography/049.jpg",
    alt: "Img 51",
    title: "…and birds announced her substance",
    description: "100 cm x 80 cm"
  },
  {position: 52, src: "/images/photography/050.jpg", alt: "Img 52", title: "rapture", description: "100 cm x 80 cm"},
  {
    position: 53,
    src: "/images/photography/051.jpg",
    alt: "Img 53",
    title: "The ecstatic renaissance of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 54,
    src: "/images/photography/052.jpg",
    alt: "Img 54",
    title: "The apparition of dreams to come",
    description: "100 cm x 80 cm"
  },
  {
    position: 55,
    src: "/images/photography/053.jpg",
    alt: "Img 55",
    title: "The escape of dreams",
    description: "100 cm x 80 cm"
  },
  {
    position: 56,
    src: "/images/photography/054.jpg",
    alt: "Img 56",
    title: "whispering secrets to space beyond time",
    description: "100 cm x 80 cm"
  },
  {
    position: 57,
    src: "/images/photography/055.jpg",
    alt: "Img 57",
    title: "The Infinite visions of time",
    description: "100 cm x 80 cm"
  },
  {
    position: 58,
    src: "/images/photography/056.jpg",
    alt: "Img 58",
    title: 'Eternal struggle',
    description: "160 cm x 100 cm"
  },
  {
    position: 59,
    src: "/images/photography/057.jpg",
    alt: "Img 59",
    title: 'The maiden and the shadow',
    description: "100 cm x 80 cm"
  },
] as imageType[];

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
    src: '/images/paintings/img-065.jpg',
    alt: 'Painting 65',
    title: 'The deception of Spring (Portrait of Tamara De Lempika)',
    description: 'Acrylics on canvas - 118.5 cm x 97.5 cm'
  },
];

export const fashionEntries = [
  {
    position: 1,
    src: '/images/fashion/fashion_07.jpg',
    alt: 'Fashion 1',
    title: 'Fashion 1',
  },
  {
    position: 2,
    src: '/images/fashion/fashion_02.jpg',
    alt: 'Fashion 2',
    title: 'Fashion 2',
  },
  {
    position: 3,
    src: '/images/fashion/fashion_03.jpg',
    alt: 'Fashion 3',
    title: 'Fashion 3',
  },
  {
    position: 4,
    src: '/images/fashion/fashion_04.jpg',
    alt: 'Fashion 4',
    title: 'Fashion 4',
  },
  {
    position: 5,
    src: '/images/fashion/fashion_05.jpg',
    alt: 'Fashion 5',
    title: 'Fashion 5',
  },
  {
    position: 6,
    src: '/images/fashion/fashion_06.jpg',
    alt: 'Fashion 6',
    title: 'Fashion 6',
  },
  {
    position: 7,
    src: '/images/fashion/fashion_01.jpg',
    alt: 'Fashion 7',
    title: 'Fashion 7',
    description: ''
  },
  {
    position: 8,
    src: '/images/fashion/fashion_08.jpg',
    alt: 'Fashion 8',
    title: 'Fashion 8',
  }
] as GenericItemType[];