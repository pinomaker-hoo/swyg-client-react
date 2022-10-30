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
  width: 100%;
  height: 2000px;
  margin-left: 100px;
`

export const Title = styled.h1`
  color: white;
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
`
export const BookInfo = styled.p`
  color: white;
  font-size: 20px;
`
export const BookSub = styled.h3`
  margin-top: 40px;
  color: white;
`
export const BookStory = styled.p`
  color: white;
  font-size: 20px;
  line-height: 30px;
`

export const BookBtn = styled.button`
  width: 160px;
  height: 54px;
  border-radius: 27px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 20px;
  margin-right: 24px;
  margin-top: 150px;
`

export const BottomTitle = styled.h1`
  color: white;
  margin-bottom: 70px;
`
export const CommentBox = styled.div`
  width: 85%;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 3px #efefef;
  margin-bottom: 30px;
  background-color: white;
`

export const CommentLeft = styled.div`
  width: 10%;
  height: 100%;
  float: left;
`
export const CommentRight = styled.div`
  width: 90%;
  height: 100%;
  float: left;
`

export const ImageBox = styled.img`
  margin-top: 20px;
  width: 84px;
  height: 84px;
  border-radius: 42px;
`
export const CommentName = styled.h1`
  margin-top: 20px;
`
export const CommentText = styled.p`
  font-size: 20px;
  line-height: 30px;
`
export const CommentIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 20px;
  float: left;
`

export const CommentInfo = styled.h3`
  color: ${(props) => props.color};
  float: left;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 28px;
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
  border-radius: 27px;
  float: right;
  margin-right: 100px;
`
