import styled from "styled-components";

export const DressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`
export const DressCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const DressesHeadText = styled.div`
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: right;
  // margin-bottom:1px;
`;
export const DressCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
  width: 24%;
  gap: 10px;
`;
export const DressCardImageWrapper = styled.div`
  display: flex;
  position: relative;
  justifyContent: center;
  align-items: center;
`;
export const DressCardImage = styled.img`
  border-radius: 8px;
`;
export const DressCardImageIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 19px;
  height: 24px;
`;
export const DressCardHeading = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: center;
`;
export const DressCardTypeText = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: center;
`;
export const DressCardSizeText = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  // text-align: center;
`;
export const DressCardPriceWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const DressCardTypeNewPrice = styled.div`
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
`;
export const DressCardTypeOldPrice = styled.s`
  color: #AFACAC;
  font-family: Jost;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
`;
export const MainDressesContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2%;
`;
export const PageTitleContainer=styled.span`
  font-size: xxx-large;
  font-family: 'koho';
  font-weight: 700;
  text-transform: uppercase;
  line-height: 70px;
  width: 40000px;
  
  
`;
export const HeaderContainerDresses=styled.div`
  margin-left: 3%;
`;
export const FilterWrapper = styled.div`
  width: 30%;
  margin-left: 3%;
  font-family: 'Jost';
  font-size: 24px;
  font-weight: lighter;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;
export const MainCategory = styled.div`
  margin-left: 3%;
`;
export const ChildCategory = styled.div`
  margin-top: 3%;
  margin-left: 7%;
`;
export const SubchildCategory = styled.div`
  margin-top: 3%;
  margin-left: 5%;
`;


