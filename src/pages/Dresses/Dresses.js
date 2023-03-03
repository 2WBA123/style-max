import React from 'react'
import {
    ChildCategory,
    DressCard,
    DressCardHeading,
    DressCardImage,
    DressCardImageIcon,
    DressCardImageWrapper,
    DressCardPriceWrapper,
    DressCardSizeText,
    DressCardTypeNewPrice,
    DressCardTypeOldPrice,
    DressCardTypeText,
    DressCardWrapper,
    DressContainer,
    DressesHeadText,
    FilterWrapper,
    HeaderContainerDresses,
    MainCategory,
    MainDressesContainer,
    PageTitleContainer,
    SubchildCategory
} from './Dresses.styled'
import {
    AddedFilterWrapper,
    BreadcumbContainer,
    BreadCumbItem,
    BreadCumbItemLast,
    DressContentWrapper,
    FilterSelectWrapper,
    PriceSelect,
    SelectOption,
    SelectWrapper,
} from "@/pages/Marketing/Marketing.styled";

function Dresses() {
    return (
        <div style={{width: "90%", marginLeft: '5%', fontFamily: 'Inter'}}>
            <HeaderContainerDresses>
                <BreadcumbContainer>
                    <BreadCumbItem>Women</BreadCumbItem>
                    <BreadCumbItem>Clothing</BreadCumbItem>
                    <BreadCumbItemLast>Dresses</BreadCumbItemLast>
                </BreadcumbContainer>
                <PageTitleContainer>Dresses for Women</PageTitleContainer>
            </HeaderContainerDresses>
            <MainDressesContainer>
                <FilterWrapper >
                    <MainCategory style={{color: `${true}` ? '#A91C12' : ''}}>
                        <span>Women</span>
                        <ChildCategory style={{color: `${true}` ? '#A91C12' : ''}}>
                            <span>
                                Clothing
                            </span>
                            <SubchildCategory style={{color: `${false}` ? '#A91C12' : ''}}>
                                <span>
                                Dresses
                            </span>
                            </SubchildCategory>
                            <SubchildCategory style={{color: `${false}` ? 'black' : ''}}>
                                <span>
                                Jackets & Blazers
                            </span>
                            </SubchildCategory >
                            <SubchildCategory style={{color: `${false}` ? 'black' : ''}}>
                                <span>
                                Coats
                            </span>
                            </SubchildCategory>
                            <SubchildCategory style={{color: `${false}` ? 'black' : ''}}>
                                <span>
                                Sweaters
                            </span>
                            </SubchildCategory>
                            <SubchildCategory style={{color: `${false}` ? 'black' : ''}}>
                                <span>
                                Tops
                            </span>
                            </SubchildCategory>
                            <SubchildCategory style={{color: `${false}` ? 'black' : ''}}>
                                <span>
                                Pants
                            </span>
                            </SubchildCategory>
                        </ChildCategory>
                        <ChildCategory style={{color: `${false}` ? 'black' : ''}}>
                            <span>
                                Shoes
                            </span>
                        </ChildCategory>
                        <ChildCategory style={{color: `${false}` ? 'black' : ''}}>
                            <span>
                                Bags
                            </span>
                        </ChildCategory>
                    </MainCategory>
                    <MainCategory>
                        <span>Men</span>
                    </MainCategory>
                </FilterWrapper>
                <DressContainer>
                    <DressContentWrapper>
                        <DressContentWrapper>
                            <FilterSelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Brand</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Style</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Price</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Color</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Shipping</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Condition</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                            </FilterSelectWrapper>
                            <AddedFilterWrapper>
                                Sort By
                                <SelectWrapper>
                                    <PriceSelect>
                                        <SelectOption selected>Newest First</SelectOption>
                                    </PriceSelect>
                                </SelectWrapper>
                            </AddedFilterWrapper>
                        </DressContentWrapper>
                    </DressContentWrapper>
                    <DressesHeadText>300 Items</DressesHeadText>
                    <DressCardWrapper>
                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas1.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas2.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas3.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas4.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas5.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas6.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas7.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas8.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>

                        <DressCard>
                            <DressCardImageWrapper>
                                <DressCardImage src='/adidas9.svg'/>
                                <DressCardImageIcon src='/greenheart.svg'/>
                            </DressCardImageWrapper>
                            <DressCardHeading>ADIDAS</DressCardHeading>
                            <DressCardTypeText>Sweatshirt Dress</DressCardTypeText>
                            <DressCardSizeText>Size: XL</DressCardSizeText>
                            <DressCardPriceWrapper>
                                <DressCardTypeNewPrice>$240</DressCardTypeNewPrice>
                                <DressCardTypeOldPrice>$400</DressCardTypeOldPrice>
                            </DressCardPriceWrapper>
                        </DressCard>
                    </DressCardWrapper>
                </DressContainer>
            </MainDressesContainer>
        </div>
    )
}

export default Dresses
