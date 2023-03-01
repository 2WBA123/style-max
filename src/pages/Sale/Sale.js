import React from 'react'
import { AllImagesWrapper, BrandCard, BrandCardFrame, BrandCardsWrapper, BrandsButton, BrandsSectionWrapper, BrandsTextHeading, BrandsTextSubHeading, BrandsTextWrapper, CategoryBottomButton, CategoryBottomButtonText, CategoryBottomButtonWrapper, CategoryBottomText, CategoryBottomWrapper, CategoryHeading, CategoryImages, CategoryImagesWrapper, CategoryWrapper, ForImage, ForImagesContainer, ForImagesWrapper, ImageButton, ImageHeading, LastChanceText, PercentageText, SaleText, ShopNow, ShopNowButton, ShopNowHeading, ShopNowImage, ShopNowImageWrapper, ShopNowText, ShopNowWrapper, StyleImageBody, StyleImageBodyHeading, StyleImageBodyText, StyleMaxContainer, StyleMaxHeading, StyleMaxImages, StyleMaxImagesContainer, StyleMaxImagesWrapper, StyleMaxImageWrapper, WinterButton, WinterButtonText, WinterButtonWrapper, WinterText, WinterWrapper } from './Sale.styled'

function Sale() {
  return (
    <div style={{width:"100%"}}>
      <ShopNowWrapper>
        <ShopNow>
          <ShopNowHeading>BUY. SELL.
            DO IT ALL OVER.</ShopNowHeading>
          <ShopNowText>Welcome to the community-powered thrift shopping marketplace</ShopNowText>
          <ShopNowButton>Shop Now</ShopNowButton>
        </ShopNow>
        <ShopNowImageWrapper>
          <ShopNowImage src='/shopnowimage.svg' />
        </ShopNowImageWrapper>
      </ShopNowWrapper>
      <WinterWrapper>
        <WinterText>WINTER</WinterText>
        <SaleText>SALE</SaleText>
        <WinterButtonWrapper>
          <WinterButton><WinterButtonText>WOMEN’S SALE</WinterButtonText></WinterButton>
          <WinterButton><WinterButtonText>MEN’S SALE</WinterButtonText></WinterButton>
        </WinterButtonWrapper>
      </WinterWrapper>

      <CategoryWrapper>
       <CategoryHeading>SHOP BY CATEGORY</CategoryHeading>
        <AllImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/ladies.svg'/>
            <ImageHeading>LADIES</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/men.svg'/>
            <ImageHeading>MENS</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/footwear.svg'/>
            <ImageHeading>FOOTWEAR</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/bridal.svg'/>
            <ImageHeading>BRIDAL</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
        </AllImagesWrapper>
        <CategoryBottomWrapper>
          <CategoryBottomButtonWrapper>
            <CategoryBottomButton>
              <CategoryBottomButtonText>
                Discover All
              </CategoryBottomButtonText>
            </CategoryBottomButton>
          </CategoryBottomButtonWrapper>
          <CategoryBottomText>
            Looking for more great deals ...
          </CategoryBottomText>
        </CategoryBottomWrapper>
      </CategoryWrapper>

      <BrandsSectionWrapper>
        <BrandsTextWrapper>
          <BrandsTextHeading>TOP BRANDS</BrandsTextHeading>
          <BrandsTextSubHeading>Discover all brands in our online store.</BrandsTextSubHeading>
          <BrandsButton>Discover All</BrandsButton>
        </BrandsTextWrapper>
        <BrandCardsWrapper>
          <BrandCardFrame><BrandCard src='DKNY.svg' /></BrandCardFrame>
          <BrandCardFrame><BrandCard src='Calvin.svg' /></BrandCardFrame>
          <BrandCardFrame><BrandCard src='gant.svg' /></BrandCardFrame>
          <BrandCardFrame><BrandCard src='licoste.svg' /></BrandCardFrame>
          <BrandCardFrame><BrandCard src='Tamaris.svg' /></BrandCardFrame>
          <BrandCardFrame><BrandCard src='Tommy.svg' /></BrandCardFrame>
        </BrandCardsWrapper>
      </BrandsSectionWrapper>

      <CategoryWrapper>
       <CategoryHeading>UPTO 80% OFF</CategoryHeading>
        <AllImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/channelbag.svg'/>
            <ImageHeading>BAGS</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/dresses.svg'/>
            <ImageHeading>DRESSES</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/jewelry.svg'/>
            <ImageHeading>JEWELRY</ImageHeading>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
          <CategoryImagesWrapper>
            <CategoryImages src='/Rectangle.svg'/>
            <LastChanceText>LAST CHANCE</LastChanceText>
            <PercentageText>70% TO 80%</PercentageText>
            <ImageButton>SEE COLLECTION</ImageButton>
          </CategoryImagesWrapper>
        </AllImagesWrapper>
          <CategoryHeading>
          looking for gifts for her or him...
          </CategoryHeading>
      </CategoryWrapper>

      <ForImagesContainer>
        <ForImagesWrapper><ForImage src='/forher.svg'/><ImageHeading>FOR HER</ImageHeading><ImageButton>SEE COLLECTION</ImageButton></ForImagesWrapper>
        <ForImagesWrapper><ForImage src='/forhim.svg'/><ImageHeading>FOR HIM</ImageHeading><ImageButton>SEE COLLECTION</ImageButton></ForImagesWrapper>
      </ForImagesContainer>

      <StyleMaxContainer>
      <StyleMaxHeading>Why stylemax?</StyleMaxHeading>
        <StyleMaxImagesContainer>
        <StyleMaxImageWrapper>
          <StyleMaxImages src='sell.svg'/>
          <StyleImageBody>
            <StyleImageBodyHeading>Sell Easily</StyleImageBodyHeading>
            <StyleImageBodyText>Whatever you style, you will find a buyer looking for items like yours in our ever-growing community.</StyleImageBodyText>
          </StyleImageBody>
        </StyleMaxImageWrapper>

        <StyleMaxImageWrapper>
          <StyleMaxImages src='money.svg'/>
          <StyleImageBody>
            <StyleImageBodyHeading>Make money</StyleImageBodyHeading>
            <StyleImageBodyText>Sell your clothes. Make money to buy new-to-you ones</StyleImageBodyText>
          </StyleImageBody>
        </StyleMaxImageWrapper>

        <StyleMaxImageWrapper>
          <StyleMaxImages src='impact.svg'/>
          <StyleImageBody>
            <StyleImageBodyHeading>Make an impact</StyleImageBodyHeading>
            <StyleImageBodyText>By selling on StyleMax you are keeping items in the circular economy and helping reduce fashion waste.</StyleImageBodyText>
          </StyleImageBody>
        </StyleMaxImageWrapper>
        </StyleMaxImagesContainer>
      </StyleMaxContainer>

      <ShopNowWrapper>
        <ShopNow>
          <ShopNowHeading>HOW TO SELL?</ShopNowHeading>
          <ShopNowText>It’s easy to get started - just create an account to start selling. Take up to four photos. Describe what you’re selling. Decide your price. Get paid fast when your item sells.. Ship Repeat.</ShopNowText>
          <ShopNowButton>Start Selling</ShopNowButton>
        </ShopNow>
        <ShopNowImageWrapper>
          <ShopNowImage src='/selling.svg' />
        </ShopNowImageWrapper>
      </ShopNowWrapper>
     
    </div>
  )
}

export default Sale