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

export const MidBox = styled.div`
  margin-top: 160px;
  height: 150px;
`

export const InputBox = styled.input`
  width: 784px;
  height: 120px;
  border-radius: 13px;
  background-color: #442d7a;
  margin: 0px;
  padding: 0px;
  border: 1px white solid;
`
export const TrueBtn = styled.button`
  width: 180px;
  height: 120px;
  border: none;
  border-radius: 13px;
  background-color: ${(props) => props.color};
  margin-left: 30px;
  color: white;
`
export const FalseBtn = styled.button`
  width: 180px;
  height: 120px;
  border: none;
  border-radius: 13px;
  background-color: ${(props) => props.color};
  margin-left: 30px;
  color: white;
`
export const SubBtn = styled.button`
  margin-top: 110px;
  width: 160px;
  height: 54px;
  background-color: #805fc7;
  color: white;
  border-radius: 8px;
`
