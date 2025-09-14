'use client'

import FashionItem from "@/components/Fashion/FashionItem";

export default function FashionPageContent({className}: { className?: string }) {
  /** CONSTS **/
  const fashionEntries = [
    {imagePath: '/images/fashion/fashion_01.jpg', description: 'Description of fashion item 1'},
    {imagePath: '/images/fashion/fashion_02.jpg', description: 'Description of fashion item 2'},
    {imagePath: '/images/fashion/fashion_03.jpg', description: 'Description of fashion item 3'},
    {imagePath: '/images/fashion/fashion_04.jpg', description: 'Description of fashion item 4'},
    {imagePath: '/images/fashion/fashion_05.jpg', description: 'Description of fashion item 5'},
    {imagePath: '/images/fashion/fashion_06.jpg', description: 'Description of fashion item 6'},
    {imagePath: '/images/fashion/fashion_07.jpg', description: 'Description of fashion item 7'},
    {imagePath: '/images/fashion/fashion_08.jpg', description: 'Description of fashion item 8'},
  ];

  return (<div className={className}>
    {
      fashionEntries.map((entry, index) => (
        <FashionItem key={index} photoSrc={entry.imagePath} description={entry.description} />
      ))
    }
  </div>);
}