import styled from "styled-components"

export const OuterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 672px;
  height: 972px;
`

export const InBox = styled.div`
  width: 100%;
  height: 70%;
`

export const Logo = styled.h1`
  font-family: SB_Aggro_B;
  color: white;
  margin-bottom: 40px;
  margin-top: -100px;
`

export const LabelText = styled.h3`
  margin-bottom: 15px;
  font-family: SB_Aggro_M;
  color: white;
  width: 200px;
`

export const InputName = styled.input`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
`

export const InputBirth = styled.input`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
`

export const InputEmail = styled.input`
  background-color: #442d7a;
  width: 492px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
`

export const InputOther = styled.input`
  background-color: #442d7a;
  width: 672px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
`

export const CodeBtn = styled.button`
  margin-left: 10px;
  background-color: #442d7a;
  width: 152px;
  height: 60px;
  color: white;
  border-radius: 8px;
  border: none;
`

export const MaleBtn = styled.button`
  width: 104px;
  height: 60px;
  background-color: #442d7a;
  border-radius: 8px;
  border: none;
  margin-left: 56px;
  color: white;
  background-color: ${(props) => props.color};
`
export const LabelTextMale = styled.h3`
  margin-bottom: 15px;
  font-family: SB_Aggro_M;
  color: white;
  margin-left: 56px;
`
export const LineBox = styled.div`
  width: 100%;
`

export const InLineBox = styled.div`
  float: left;
  margin-bottom: 15px;
`
export const InLineBoxBtn = styled.div`
  float: left;
  margin-bottom: 15px;
`
export const RegisterBtn = styled.button`
  background-color: #805fc7;
  width: 160px;
  height: 54px;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 260px;
  margin-top: 30px;
`
export const YearsSelect = styled.select`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  border: none;
  border-radius: 8px;
`
export const MonthsSelect = styled.select`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-left: 56px;
`
export const DaysSelect = styled.select`
  background-color: #442d7a;
  width: 104px;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-left: 56px;
`
