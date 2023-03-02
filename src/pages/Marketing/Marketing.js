import { Carousel } from '@/components/StyleMaxCarousel'
import React from 'react'
import { AllImagesWrapper, CategoryImages, CategoryImagesWrapper, ImageButton, ImageHeading } from '../Sale/Sale.styled'

function Marketing() {
  return (
    <div style={{display:"flex",width:"100%",flexDirection:"column",justifyContent:"center"}}>
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
        <Carousel >
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
        </Carousel>
    </div>
  )
}

export default Marketing