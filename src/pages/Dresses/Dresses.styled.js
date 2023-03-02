import styled from "styled-components";

export const DressContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:baseline;
`
export const DressCardWrapper = styled.div`
    display:flex;
    margin-left: 825px;
    flex-wrap:wrap;
    gap:10px;
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
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:56px;
    gap:10px;
`;
export const DressCardImageWrapper = styled.div`
    display: flex;
    position:relative;
    justifyContent:center;
    align-items:center;
`;
export const DressCardImage = styled.img`
    width:310px;
    height:400px;
    border-radius:8px;
`;
export const DressCardImageIcon = styled.img`
    position:absolute;
    top:10px;
    top: 16px;
    right: 19px;
    height:24px;
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
export const DressCardPriceWrapper= styled.div`
    display:flex;
    gap:20px;
`;
export const DressCardTypeNewPrice= styled.div`
    font-family: Jost;
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
`;
export const DressCardTypeOldPrice = styled.s`
    color:#AFACAC;
    font-family: Jost;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
`;


