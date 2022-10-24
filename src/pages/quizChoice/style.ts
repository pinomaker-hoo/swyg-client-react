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
`

export const Text = styled.h3`
  color: white;
  margin-top: 50px;
`

export const ChoiceDiv = styled.div`
  margin-top: 90px;
`

export const ChoiceBox = styled.div`
  width: 368px;
  height: 276px;
  background-color: ${(props) => props.color};
  opacity: 0.59;
  float: left;
  margin-left: 56px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxText = styled.h3`
  font-size: 30px;
  color: white;
  font-family: SB_Aggro_M;
`

export const SubBtn = styled.button`
  background-color: #805fc7;
  width: 160px;
  height: 54px;
  border-radius: 8px;
  margin-top: 130px;
`
