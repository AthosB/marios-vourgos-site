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

export const photoFilenames = [
  {position: 0, src: "/images/photography/001.jpg", alt: "Img 1", title: 'Nocturnal Contemplations of Hope', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/002.jpg", alt: "Img 2", title: "Remembering herself", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/003.jpg", alt: "Img 3", title: "The ecstatic recollection of self", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/004.jpg", alt: "Img 4", title: "The triumph of lllusions", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/005.jpg", alt: "Img 5", title: 'The Ecstatic Recollection of Time', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/006.jpg", alt: "Img 6", title: "The escape of thoughts to come", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/007.jpg", alt: "Img 7", title: "The stare of silence", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/008.jpg", alt: "Img 8", title: "… fade so soon, oh flower…( The Sleepwaker)", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/009.jpg", alt: "Img 9", title: "The illusion of space", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/010.jpg", alt: "Img 10", title: "The illusion of time", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/011.jpg", alt: "Img 11", title: "The shadow of light", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/012.jpg", alt: "Img 12", title: "Contemplating herself I", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/013.jpg", alt: "Img 13", title: "Contemplating herself II", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/014.jpg", alt: "Img 14", title: "infinite visions of time", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/015.jpg", alt: "Img 15", title: "The flower that fell in live with a woman", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/016.jpg", alt: "Img 16", title: "Contemplating herself III", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/017.jpg", alt: "Img 17", title: "Contemplating herself IV", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/018.jpg", alt: "Img 18", title: "Contemplating herself V", description: "100 cm x 80 cm"},
  // {position: 1, src: "/images/photography/019.jpg", alt: "Img 19", description: ""},
  {position: 1, src: "/images/photography/020.jpg", alt: "Img 20", title: "in an artists's head", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/021.jpg", alt: "Img 21", title: 'The Achronic Remembrance of Self', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/022.jpg", alt: "Img 22", title:'Parapraxis', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/023.jpg", alt: "Img 23", title: 'Epigraph', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/024.jpg", alt: "Img 24", title: 'The essence of Dreams to Come', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/025.jpg", alt: "Img 25", title: 'Perpetual Juliet', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/026.jpg", alt: "Img 26", title: 'Indigo Dreams of Blue', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/027.jpg", alt: "Img 27", title: 'Spring Awaiting Summer in the Fall', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/028.jpg", alt: "Img 28", title: 'Euphoria', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/029.jpg", alt: "Img 29", title: 'Awaiting Hope', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/030.jpg", alt: "Img 30", title: 'The Stare of Things to Come', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/031.jpg", alt: "Img 31", title: 'Hope is a glance at Infinity', description: "100 cm x 80 cm"},
  // {position: 1, src: "/images/photography/032.jpg", alt: "Img 32", description: ""},
  {position: 1, src: "/images/photography/033.jpg", alt: "Img 33", title: "still life? I", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/034.jpg", alt: "Img 34", title: "still life? II", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/035.jpg", alt: "Img 35", title: "still life? III", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/036.jpg", alt: "Img 36", title: "Victorian memories of a flower", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/037.jpg", alt: "Img 37", title: "The scream os silence", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/038.jpg", alt: "Img 38", title: 'Sardonic Smile', description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/039.jpg", alt: "Img 39", title: "thoughts of future days gone by I", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/040.jpg", alt: "Img 40", title: "thoughts of future days gone by II", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/041.jpg", alt: "Img 41", title: "time revealing the future today", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/042.jpg", alt: "Img 42", title: "…and her thoughts defined  the universe", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/043.jpg", alt: "Img 43", title: "nocturnal whispers of hope", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/044.jpg", alt: "Img 44", title: "the maiden and the shadow", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/045.jpg", alt: "Img 45", title: "anticipating hope", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/046.jpg", alt: "Img 46", title: "The eternal struggle", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/047.jpg", alt: "Img 47", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/048.jpg", alt: "Img 48", title: "sweet melancholia of  timeless being", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/049.jpg", alt: "Img 49", title: "…and birds announced her substance", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/050.jpg", alt: "Img 50", title: "rapture", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/051.jpg", alt: "Img 51", title: "The ecstatic renaissance of time", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/052.jpg", alt: "Img 52", title: "The apparition of dreams to come", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/053.jpg", alt: "Img 53", title: "The escape of dreams", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/054.jpg", alt: "Img 54", title: "whispering secrets to space beyond time", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/055.jpg", alt: "Img 55", title: "The Infinite visions of time", description: "100 cm x 80 cm"},
  {position: 1, src: "/images/photography/056.jpg", alt: "Img 56", title: 'Eternal struggle', description: "160 cm x 100 cm"},
  {position: 1, src: "/images/photography/057.jpg", alt: "Img 57", title: 'The maiden and the shadow', description: "100 cm x 80 cm"},
] as imageType[];

type FashionType = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export const fashionEntries = [
  {src: '/images/fashion/fashion_01.jpg', alt: 'Fashion Photo 1', description: 'Description of fashion item 1'},
  {src: '/images/fashion/fashion_02.jpg', alt: 'Fashion Photo 2', description: 'Description of fashion item 2'},
  {src: '/images/fashion/fashion_03.jpg', alt: 'Fashion Photo 3', description: 'Description of fashion item 3'},
  {src: '/images/fashion/fashion_04.jpg', alt: 'Fashion Photo 4', description: 'Description of fashion item 4'},
  {src: '/images/fashion/fashion_05.jpg', alt: 'Fashion Photo 5', description: 'Description of fashion item 5'},
  {src: '/images/fashion/fashion_06.jpg', alt: 'Fashion Photo 6', description: 'Description of fashion item 6'},
  {src: '/images/fashion/fashion_07.jpg', alt: 'Fashion Photo 7', description: 'Description of fashion item 7'},
  {src: '/images/fashion/fashion_08.jpg', alt: 'Fashion Photo 8', description: 'Description of fashion item 8'},
] as FashionType[];