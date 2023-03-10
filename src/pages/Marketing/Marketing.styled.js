import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
//   @media (max-width: 1024px) {
//     flex-direction: column-reverse;
//   }
`;

export const Message = styled.div`
    background-color:#F1F1F1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:53%;
    gap:25px;
    padding:20px 50px;
    border-radius:8px;
`;

export const MessageImageWrapper = styled.div`
    width:40%;    
    min-height: 100%;
`;

export const MessageImage = styled.img` 
    min-height:100%;
`;

export const MessageHeading = styled.div`
  font-family: Jost;
  font-weight: 700;
  font-size: xx-large;
  text-align: left;
  @media (max-width: 1024px) {
    font-size: large;
    width: 100%;
  }
`;

export const MessageText = styled.div`
  
  width: 100%;
  font-family: Jost;
  font-weight: 400;
  font-size: 24px;
`;
export const BestSellersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BestSellersHeading = styled.div`

    font-family: KoHo;
    font-size: 22px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    width:100%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:1rem;

`;
export const ShopNowButton = styled.button`
  width: 264px;
  height: 70px;
  background-color: #0F172A;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 22px;
`;
export const CategoryCarouselSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const CategoryCarouselHeading = styled.div`

    font-family: KoHo;
    font-size: 22px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-top:2%;
    margin-bottom:1rem;
    // margin-left:4%;


`;

export const BestSellerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BestCardWrapper = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width:20%;
`;
export const BestImage = styled.img`
  
`;
export const BestCardHeading = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  margin-top:0.5rem;
  // text-align: center;
`;
export const BestCardTypeText = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: center;
`;
export const BestCardSizeText = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: center;
`;
export const BestCardPriceWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const BestCardTypeNewPrice = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
`;
export const BestCardTypeOldPrice = styled.s`
  color: #AFACAC;
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
`;


export const ShopPriceWrapper = styled.div`


    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:6%;
    margin-bottom:2%;
`;
export const ShopPriceHeading = styled.div`
    font-family: KoHo;
    font-size: 22px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    // margin-bottom:1%;
    margin-top: 2%;


`;
export const ShopContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1F1F1;
  border-radius: 8px;
  width: 750px;
  height: 100px;
  margin-top: 26px;
  gap: 52px;
`;
export const DressContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F1F1F1;
  border-radius: 8px;
  gap: 21px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: small;
  padding-left: 10px;
  width: 100%;
`;
export const FilterSelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const ShopPriceButton = styled.button`
  display: flex;
  gap: 20px;
  min-width: 140px;
  height: 50px;
  background-color: #0F172A;
  color: white;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  justify-content: center;
  align-items: center;
`;
export const ShopPriceButtonIcon = styled.img`
`;
export const ButtonText = styled.p`
`;
export const SelectWrapper = styled.div`
  display: flex;
  gap: 13px;
`;
export const AddedFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-right: 5%;
`;
export const SelectText = styled.div`
  font-family: Jost;
  font-size: 18px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;
`;
export const PriceSelect = styled.select`
  border-radius: 8px;
  padding: 10px 10px;
`;
export const SelectOption = styled.option`
  width: 100px;
  height: 40px;
`;
export const AllImagesHeading = styled.div`
  font-family: KoHo;
  font-size: 22px;
  font-weight: 700;
//   line-height: 16px;
  letter-spacing: 0em;
//   text-align: left;
//   margin-top: 40px;
  margin-bottom: 1rem;
//   margin-left: 290px;
`;
export const AllImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
//   margin-top:1%;
`;

export const BrandContainer = styled.div`
  display;flex;
  flex-direction: column;
  margin-bottom:4%
`;
export const BrandHeading = styled.div`
  font-family: KoHo;
  font-size: 22px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 1rem;
`;
export const BrandsWrapper = styled.div`

    display:flex;
    background-color:#F1F1F1;
    // gap:124px;
    justify-content:center;
`;
export const BrandImage = styled.img`
  width: 100%;
`;
export const BrandImageWrapper = styled.img`

`;
export const BreadcumbContainer = styled.div`
`
export const BreadCumbItem = styled.span`
  text-transform: uppercase;
  font-style: normal;
  color: #0F172A;
  cursor: pointer;

  &::after {
    margin: 2%;
    content: '>';
    cursor: auto;
  }
`
export const BreadCumbItemLast = styled.span`
  text-transform: uppercase;
  font-style: normal;
  color: #0F172A;
  cursor: pointer;

  &::after {
    margin: 2%;
  }
`
