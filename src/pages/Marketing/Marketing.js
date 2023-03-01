import EmblaCarousel from '@/components/Carousel/js/EmblaCarousel'
import React from 'react'
import { AllImagesWrapper, CategoryImages, CategoryImagesWrapper, ImageButton, ImageHeading } from '../Sale/Sale.styled'

function Marketing() {
  return (
    <div style={{width:"100%"}}>
         <AllImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/nightout.svg'/>
            <ImageHeading>NIGHT OUT</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/office.svg'/>
            <ImageHeading>OFFICE</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/modestfashion.svg'/>
            <ImageHeading>MODEST FASHION</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/cultural.svg'/>
            <ImageHeading>CULTURAL</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
        </AllImagesWrapper>
        <EmblaCarousel />
    </div>
  )
}

export default Marketing