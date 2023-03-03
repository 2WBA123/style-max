import { Carousel } from '@/components/StyleMaxCarousel'
import React from 'react'
import { DressCardTypeNewPrice, DressCardTypeOldPrice } from '../Dresses/Dresses.styled'
import { AllImagesWrapper, CategoryImages, CategoryImagesWrapper, ImageButton, ImageHeading } from '../Sale/Sale.styled'
import { AllImagesContainer, AllImagesHeading, BestCardHeading, BestCardPriceWrapper, BestCardSizeText, BestCardTypeNewPrice, BestCardTypeOldPrice, BestCardTypeText, BestCardWrapper, BestImage, BestImageFrame, BestImageIcon, BestImageWrapper, BestSellersHeading, BestSellersWrapper, BrandContainer, BrandHeading, BrandImage, BrandsWrapper, ButtonText, CategoryCarouselHeading, CategoryCarouselSection, Message, MessageHeading, MessageImage, MessageImageWrapper, MessageText, MessageWrapper, PriceSelect, SelectOption, SelectText, SelectWrapper, ShopContentWrapper, ShopNowButton, ShopPriceButton, ShopPriceButtonIcon, ShopPriceHeading, ShopPriceWrapper } from './Marketing.styled'

function Marketing() {
  return (
    <div style={{display:"flex",width:"100%",flexDirection:"column",justifyContent:"center"}}>
      <CategoryCarouselSection>
      <CategoryCarouselHeading>SHOP BY CATEGORY</CategoryCarouselHeading>
        <Carousel >
          <CategoryImagesWrapper>
            <CategoryImages src='/ladies.svg'/>
            <ImageHeading>CLOTHING</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/channelbag.svg'/>
            <ImageHeading>BAGS</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/footwear.svg'/>
            <ImageHeading>FOOTWEAR</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/accessories.svg'/>
            <ImageHeading>ACCESSORIES</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
        </Carousel>
      </CategoryCarouselSection>


        <MessageWrapper>
        <Message>
          <MessageHeading>MARKETING MESSAGE</MessageHeading>
          <MessageText>We can write anything here related to marketing or use this space for branding some brands.</MessageText>
          <ShopNowButton>Shop Now</ShopNowButton>
        </Message>
        <MessageImageWrapper>
          <MessageImage src='/message.svg' />
        </MessageImageWrapper>
        </MessageWrapper>

      <BestSellersWrapper>
        <BestSellersHeading>SHOP BESTSELLERS</BestSellersHeading>
        <Carousel >
          <BestCardWrapper>
            <BestImage src='/khakipants.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/jacket.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/shirtpant.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/jacket.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
        </Carousel>
        </BestSellersWrapper>


        <ShopPriceWrapper>
          <ShopPriceHeading>SHOP BY PRICE</ShopPriceHeading>
          <ShopContentWrapper>
           <SelectWrapper>
            <SelectText>Shop</SelectText>
            <PriceSelect>
              <SelectOption selected>Dresses</SelectOption>
            </PriceSelect>
           </SelectWrapper>
           <SelectWrapper>
            <SelectText>Under</SelectText>
            <PriceSelect>
              <SelectOption selected>$80</SelectOption>
            </PriceSelect>
           </SelectWrapper>
           <ShopPriceButton><ButtonText>Shop Now</ButtonText><ShopPriceButtonIcon src='IconStrokeRight.svg'/></ShopPriceButton>
          </ShopContentWrapper>
        </ShopPriceWrapper>


        <BestSellersWrapper>
        <BestSellersHeading>NEW ARRIVALS</BestSellersHeading>
        <Carousel >
          <BestCardWrapper>
            <BestImage src='/khakipants.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/jacket.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/shirtpant.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
          <BestCardWrapper>
            <BestImage src='/jacket.svg' />
            <BestCardHeading>ADIDAS</BestCardHeading>
            <BestCardTypeText>Sweatshirt Dress</BestCardTypeText>
            <BestCardSizeText>Size: XL</BestCardSizeText>
            <BestCardPriceWrapper>
              <BestCardTypeNewPrice>$240</BestCardTypeNewPrice>
              <BestCardTypeOldPrice>$400</BestCardTypeOldPrice>  
            </BestCardPriceWrapper>    
          </BestCardWrapper>
        </Carousel>
        </BestSellersWrapper>

        <AllImagesContainer>
        <AllImagesHeading>SHOP BY STYLE</AllImagesHeading>
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
        </AllImagesContainer>

        <BrandContainer>
        <BrandHeading>SHOP BY BRAND</BrandHeading>
        <Carousel>
          <BrandsWrapper>
           <BrandImage src='/zaraa.svg'/>
           <BrandImage src='/adidass.svg'/>
           <BrandImage src='/diorr.svg'/>
           <BrandImage src='/chanell.svg'/>
           <BrandImage src='/mangoo.svg'/>
          </BrandsWrapper>
        </Carousel>
        </BrandContainer>
    </div>
  )
}

export default Marketing