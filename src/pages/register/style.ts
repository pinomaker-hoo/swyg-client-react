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
  font-family: Aggro-B;
  color: white;
  margin-bottom: 40px;
  margin-top: -100px;
  font-size: 40px;
  margin-bottom: 20px;
`

export const LabelText = styled.h3`
  margin-bottom: 15px;
  font-family: Aggro-M;
  font-size: 20px;
  color: white;
  width: 200px;
`

export const InputName = styled.input`
  background-color: #442d7a;
  width: 198px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 10px;
`

export const InputBirth = styled.input`
  background-color: #442d7a;
  width: 208px;
  height: 60px;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
  outline: none;
`

export const InputEmail = styled.input`
  background-color: #442d7a;
  width: 482px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 18px;
`

export const InputOther = styled.input`
  background-color: #442d7a;
  width: 662px;
  height: 60px;
  outline: none;
  -webkit-box-shadow: 0 0 0 1000px #442d7a inset;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 18px;
`

export const CodeBtn = styled.button`
  margin-left: 25px;
  background-color: #442d7a;
  width: 152px;
  height: 60px;
  color: white;
  border-radius: 8px;
  border: none;
  font-size: 20px;
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
  font-family: Aggro-L;
  border-radius: 8px;
  margin-left: 260px;
  margin-top: 30px;
  font-size: 20px;
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
export const MaleSelect = styled.select`
  background-color: #442d7a;
  width: 104px;
  height: 60px;
  border: none;
  border-radius: 8px;
  margin-left: 56px;
`
