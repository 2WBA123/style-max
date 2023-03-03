import styled from "styled-components";

export const ShopNowWrapper = styled.div`
    display:flex;
    width: 90%;
    margin-left: 68px;
    justify-content: center;
`;

export const ShopNow = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:25px;
    width:35%;
    padding:20px 50px;
`;

export const ShopNowImageWrapper = styled.div`
    width:784px;
    height:580px;
`;



export const ShopNowImage = styled.img` 
    width:100%;
    height:100%;
    border-radius:8px;
`;

export const ShopNowHeading = styled.div`
    width:350px;
    font-family: Jost;
    font-weight: 700 ;
    font-size: 48px;
`;

export const ShopNowText = styled.div`
    font-family: Jost;
    font-weight: 400 ;
    font-size: 24px;
`;

export const ShopNowButton = styled.button`
    width:264px;
    height:70px;
    background-color: #0F172A;
    color: white;
    border-radius: 8px;
    font-weight:700;
    font-size:22px;
`;

export const WinterWrapper = styled.div`
    display:flex;
    gap:20px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 80%;
    margin-left: 169px;
    margin-bottom:50px;
    height:594px;
    background-color: #A91C12;
`;

export const WinterText = styled.div`
    display:flex;
    height:96px;
    font-family: KoHo;
    font-size: 96px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:white;
`;

export const SaleText = styled.div`
    display:flex;
    height:128px;
    font-family: K2D;
    font-size: 128px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:white;
    text-shadow: -1px 1px 0 #000,1px 1px 0 #000,1px -1px 0 #000;
`;

export const WinterButtonWrapper = styled.div`
    display:flex;
    width:728px;
    gap:128px;

`;

export const WinterButton = styled.button`
    width:300px;
    height:70px;
    justify-content:center;
    align-items:center;
    background-color:white;
    border-radius:8px;
`;

export const WinterButtonText = styled.div`
    font-family: KoHo;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    color:#DF1B0F;
`;

export const CategoryWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 80%;
    margin-left: 167px;
    margin-bottom:20px;
`;

export const CategoryHeading = styled.div`
    font-family: KoHo;
    font-size: 22px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0px 0 16px 1px;
`;

export const CategoryImagesWrapper = styled.div`
    display:flex;
    min-width:20%;
    height:100%;
    justify-content:center;
    align-items:center;
`;

export const CategoryImages = styled.img`
    min-width:100%;
    max-height:100%;
    position:relative;
    border-radius:8px;
`;


export const AllImagesWrapper = styled.div`
    display:flex;
    gap:30px;
    justify-content:center;
    height:100%
`;
export const ImageHeading = styled.div`
  position:absolute;
  color:white;
  font-family: Jost;
  font-size: 40px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom:3%;
`;
export const ImageButton = styled.button`
    position: absolute;
    width: 21%;
    height: 9%;
    background: #535C3D;
    border-radius: 20px;
    color:white;
    margin-top:194px;
`;
export const CategoryBottomWrapper = styled.div`
    display:flex;
    flex-direction:row-reverse;
    align-items:center;
    gap:19px;
    margin-right:-4px;
    margin-bottom:45px;
`;
export const CategoryBottomText = styled.div`
    font-family: Jost;
    font-size: 24px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
`;
export const CategoryBottomButtonWrapper = styled.div`
    display:flex;
`;
export const CategoryBottomButton = styled.button`
    background-color:#A91C12;
    width:200px;
    height:50px;
    border-radius:8px;
    align-items:center;
    justify-content:center;
`;
export const CategoryBottomButtonText = styled.div`
    color:white;
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
`;

export const BrandsSectionWrapper = styled.div`
    width:95%;
    gap:34px;
    display:flex;
    justify-content:center;
    margin-bottom:45px;
    margin-left: 117px;
`;

export const BrandsTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    font-family:Jost;
    margin-left:41px;
    
`;
export const BrandsTextHeading = styled.div`
    font-family: Jost;
    width:312px;
    font-size: 48px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    margin-bottom:18px;
`;
export const BrandsTextSubHeading = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom:18px;
    width:386px;
`;
export const BrandsButton = styled.button`
    background-color:#0F172A;
    color:white;
    font-weight:700px;
    font-size:22px;
    width:277px;
    height:70px;
    border-radius:8px;
    margin-bottom:18px;
`;
export const BrandCardsWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:21px;
    
`;
export const BrandCardFrame = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:257px;
    height:116px;
    background-color:#D9D9D9;
`;
export const BrandCard = styled.img`
    width:210px;
    height:72px;
`;
export const LastChanceText = styled.div`
  position:absolute;
  color:white;
  font-family: Jost;
  font-size: 40px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom:173px;
  width:170px;
  text-align:center;
  line-height: 30px;
`;
export const PercentageText = styled.div`
  position:absolute;
  color:white;
  font-family: Jost;
  font-size: 40px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top:0px;
`;
export const ForImagesContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:86%;
    margin-left:156px; 
    margin-bottom:30px;     
    padding:10px
`;
export const ForImagesWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ImagesFlexWrapper = styled.div`
    display:flex;
    width:94%;
    height:100%;
    gap:20px;
`;
export const ForImage = styled.img`
    width:660px;
    height:800px;
    border-radius:8px;
`;
export const StyleMaxContainer = styled.div`
    display:flex;
    align-items: center;
    width:100%;
    flex-direction:column;
    padding:20px 40px;
`;
export const StyleMaxImagesContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    padding:20px 20px;
`;
export const StyleMaxImageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-end;
    min-width:405px;
    height:535px;
`;
export const StyleMaxImages = styled.img`
    min-width:405px;
    height:535px;
    border-radius:8px;
`;
export const StyleMaxHeading = styled.div`
    font-family: KoHo;
    font-size: 36px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 16px;
    width: 294px;
`;
export const StyleImageBody = styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    width:323px;
    height:302px;
    background-color:#535C3D;
    opacity:90%;
    border-radius:8px;
    mix-blend-mode: hard-light;
    margin-bottom:40px;
`;
export const StyleImageBodyHeading = styled.div`
    display:flex;
    font-family: Jost;
    font-size: 40px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    justify-content:center;
    width:100%;
    color:white;
    margin-top:10px;
    margin-bottom:40px;
`;
export const StyleImageBodyText = styled.div`
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color:white;

    
`;


