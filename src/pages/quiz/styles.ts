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
  font-family: Aggro-M;
  font-size: 50px;
`

export const Text = styled.h3`
  color: white;
  margin-top: 50px;
  font-family: Aggro-L;
  font-size: 22px;
`

export const QuizBox = styled.div`
  margin-top: 90px;
`

export const QuizContainer = styled.div`
  margin-left: 56px;
  float: left;
  width: 368px;
  height: 500px;
  perspective: 500px;
  position: relative;
  transform-style: preserve-3d;
  &:hover .front {
    transform: rotateX(-180deg);
  }
  &:hover .back {
    transform: rotateX(0deg);
  }
`

export const QuizCardFront = styled.div`
  width: 368px;
  height: 500px;
  background-color: #442d7a;
  opacity: 0.59;
  border-radius: 15px;
  backface-visibility: hidden;
  transition: 0.5s linear;
  position: absolute;
  z-index: 2;
`

export const QuizCardBack = styled.div`
  width: 368px;
  height: 500px;
  background-color: #442d7a;
  opacity: 0.59;
  border-radius: 15px;
  backface-visibility: hidden;
  transition: 0.5s linear;
  position: absolute;
  transform: rotateX(180deg);
`

export const MainImgBox = styled.div``

export const MainImg = styled.img`
  margin-top: 100px;
  width: 170px;
  height: 170px;
`
export const StarImgBox = styled.div``
export const StarImg = styled.img`
  margin-top: 70px;
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 130px;
`
export const PointText = styled.h1`
  color: white;
  float: left;
  margin-top: 75px;
  margin-left: 20px;
`

export const QuizNumber = styled.h3`
  margin-left: -300px;
  color: white;
`
export const QuizTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 100px;
  color: white;
`
export const QuizButton = styled.button`
  width: 145px;
  height: 135px;
  background-color: ${(props) => props.color};
  border-radius: 13px;
`

export const QuizButtonTwo = styled.button`
  width: 145px;
  height: 135px;
  background-color: ${(props) => props.color};
  border-radius: 13px;
  margin-left: 20px;
`
