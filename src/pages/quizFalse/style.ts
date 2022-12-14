import styled from "styled-components"
export const OuterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  height: 972px;
`

export const InBox = styled.div`
  width: 100%;
  height: 70%;
  text-align: center;
`

export const Title = styled.h1`
  color: white;
  margin-top: -50px;
  font-size: 50px;
  font-family: Aggro-M;
`
export const SubBtn = styled.button`
  background-color: #805fc7;
  width: 160px;
  height: 54px;
  border-radius: 8px;
  margin-top: 50px;
  color: white;
  font-family: Aggro-L;
  font-size: 20px;
`
export const Img = styled.img`
  margin-top: -100px;
  margin-left: -130px;
  width: 100px;
  position: absolute;
`
export const Img2 = styled.img`
  margin-top: -85px;
  margin-left: 200px;
  width: 200px;
  position: absolute;
`
export const QuizContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 120px;
`

export const QuizCardBack = styled.div`
  width: 368px;
  height: 500px;
  background-color: #442d7a;
  border-radius: 15px;
`

export const QuizNumber = styled.h3`
  margin-left: -300px;
  color: white;
  font-family: Aggro-M;
  font-size: 18px;
`
export const QuizTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 100px;
  color: white;
  font-size: 24px;
  font-family: Aggro-L;
`
export const QuizButton = styled.button`
  width: 145px;
  height: 135px;
  background-color: ${(props) => props.color};
  border-radius: 13px;
  float: left;
  margin-left: 30px;
`
export const BtnBox = styled.div`
  text-align: center;
`

export const QuizButtonTwo = styled.button`
  width: 145px;
  height: 135px;
  background-color: ${(props) => props.color};
  border-radius: 13px;
  float: left;
  margin-left: 20px;
`
export const QuizImg = styled.img``
