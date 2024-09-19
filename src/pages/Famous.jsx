import React from 'react'
import { GHero, KindOfDestination } from '../components'
import { tajMahal, munnar, redFort, GOI, Ladak, Charminar, Mysuru, Baga } from '../assets'

const destinations =[
  { title: 'Taj Mahal', imgSrc: tajMahal, alt: 'Agra', location: 'Agra', route: '/test/famous/taj-Mahal' },
  { title: 'Red Fort', imgSrc: redFort, alt: 'Delhi', location: 'Delhi', route: '/test/famous/taj-Mahal' },
  { title: 'Gateway Of India', imgSrc: GOI, alt: 'Maharashtra', location: 'Maharashtra', route: '/test/famous/taj-Mahal' },
  { title: 'Ladakh', imgSrc: Ladak, alt: 'Kashmir', location: 'Kashmir', route: '/test/famous/taj-Mahal' },
  { title: 'Charminar', imgSrc: Charminar, alt: 'Telungana', location: 'Telangana', route: '/test/famous/taj-Mahal' },
  { title: 'Baga Beach', imgSrc: Baga, alt: 'Goa', location: 'Goa', route: '/test/famous/taj-Mahal' },
  { title: 'Munnar', imgSrc: munnar, alt: 'Kerala', location: 'Kerala', route: '/test/famous/taj-Mahal' },
  { title: 'Mysuru Palace', imgSrc: Mysuru, alt: 'Karnataka', location: 'Karnataka', route: '/test/famous/taj-Mahal' },
];

const Famous = () => {
  return (
    <>
      <GHero header={"Famous Destinations"} desc={"Travel to your favourite city with respectful of the environment!"} img={Baga} />
      <KindOfDestination destinations={destinations} title={"Famous Destinations"} />

    </>
  )
}

export default Famous
