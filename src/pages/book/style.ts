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
export const BodyBox = styled.div``

export const TopBox = styled.div`
  margin-top: 100px;
  width: 85%;
  height: 750px;
  margin-left: 100px;
`
export const BottomBox = styled.div`
  height: 2000px;
`

export const Title = styled.h1`
  color: white;
  font-size: 26px;
  font-family: Aggro-M;
`

export const BookBox = styled.div``
export const BookRightBox = styled.div`
  width: 60%;
  height: 100%;
  float: left;
  margin-left: 5%;
`
export const BookLeftBox = styled.div`
  width: 35%;
  height: 100%;
  float: left;
`
export const BookImage = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const BookTextBox = styled.div`
  margin-left: 50px;
`
export const BookTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-family: Aggro-B;
`
export const BookInfo = styled.p`
  color: white;
  font-size: 20px;
  font-family: Aggro-L;
`
export const BookSub = styled.h3`
  margin-top: 40px;
  font-size: 24px;
  font-family: Aggro-M;
  color: white;
`
export const BookStory = styled.p`
  color: white;
  font-size: 20px;
  line-height: 30px;
  font-size: 20px;
  font-family: Aggro-L;
`

export const BookBtn = styled.button`
  width: 150px;
  height: 54px;
  border-radius: 27px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 20px;
  margin-right: 26px;
  margin-top: 50px;
  font-size: 20px;
  font-family: Aggro-L;
`

export const BottomTitle = styled.h1`
  color: white;
  margin-left: 100px;
  margin-bottom: 70px;
  margin-top: 70px;
  font-size: 35px;
  font-family: Aggro-M;
`
export const CommentBox = styled.div`
  width: 85%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 3px #efefef;
  margin-bottom: 30px;
  background-color: white;
  margin-left: 85px;
`

export const CommentLeft = styled.div`
  width: 15%;
  height: 300px;
  float: left;
  text-align: center;
`
export const CommentRight = styled.div`
  width: 85%;
  height: 300px;
  float: left;
`

export const ImageBox = styled.img`
  margin-top: 30px;
  width: 64px;
  height: 64px;
  border-radius: 42px;
`
export const CommentName = styled.h1`
  margin-top: 40px;
  font-size: 30px;
  font-family: Aggro-M;
`

export const CommentText = styled.p`
  font-size: 20px;
  line-height: 30px;
  height: 120px;
  width: 90%;
  font-family: Aggro-L;
`
export const CommentIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 10px;
  float: left;
`
export const CommentInfo = styled.h3`
  color: ${(props) => props.color};
  float: left;
  margin-top: 16px;
  margin-left: 12px;
  font-size: 28px;
  font-family: Aggro-M;
`

export const CommentTextInput = styled.input`
  border: none;
  width: 90%;
  height: 50%;
`

export const SubmitBtn = styled.button`
  width: 164px;
  height: 50px;
  background-color: #805fc7;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: Aggro-L;
  font-size: 20px;
`
export const SubmitBtnDiv = styled.div`
  text-align: center;
`
export const SubmitBtnDivun = styled.div`
  height: 50px;
`
