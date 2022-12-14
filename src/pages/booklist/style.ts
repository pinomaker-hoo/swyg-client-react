import styled from "styled-components"

export const OuterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const InBox = styled.div`
  width: 70%;
  height: 100%;
`
export const BodyBox = styled.div`
  width: 100%;
  height: 1000px;
`
export const BookBox = styled.div`
  width: 85%;
  height: 350px;
  margin-top: 50px;
  margin-left: 100px;
`
export const BookLeftBox = styled.div`
  width: 25%;
  float: left;
  height: 100%;
`
export const BookMiddleBox = styled.div`
  width: 55%;
  float: left;
  height: 100%;
`
export const BookRightBox = styled.div`
  width: 20%;
  float: left;
  height: 100%;
  text-align: center;
`
export const BookImg = styled.img`
  width: 80%;
`

export const BookTitle = styled.h1`
  font-family: Aggro-B;
  font-size: 35px;
  color: white;
`

export const BookSubTitle = styled.h3`
  color: white;
  font-family: Aggro-L;
  font-size: 20px;
`

export const BookText = styled.p`
  color: white;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 1p x;
  font-family: Aggro-L;
`

export const BookIntroduce = styled.h3`
  margin-top: 30px;
  color: white;
  font-family: Aggro-M;
  font-size: 20px;
`
export const BookBtn1 = styled.button`
  background-color: ${(props) => props.color};
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 100px;
  font-size: 15px;
  font-family: Aggro-L;
`
export const BookBtn2 = styled.button`
  background-color: ${(props) => props.color};
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  border-radius: 20px;
  margin-top: 30px;
  font-size: 15px;
  font-family: Aggro-L;
`
export const BookTagBtn = styled.button`
  width: 160px;
  height: 55px;
  border: none;
  border-radius: 27.5px;
  background-color: #ffef62;
  font-size: 16px;
  margin-bottom: 30px;
  margin-top: 50px;
  margin-left: 100px;
  font-family: Aggro-M;
`
export const WhiteLine = styled.hr`
  color: white;
  margin-left: 100px;
  width: 85%;
`
export const MapBox = styled.div``
