import styled from "@emotion/styled";
const breakpoint = "768px";
const mediaQuery = () => `@media(max-width:${breakpoint})`;

export const Container = styled.div`
  label:container;
  width: 100%;
  min-height:800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items:center; 
`;

export const Main=styled.div`
  label: main;
  width:60%;
  margin-top:80px;
  display:flex;
  flex-direction:column;
  margin-bottom: 200px;

  ${mediaQuery} {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
`


export const PageTitleArea=styled.div`
  label: page-title-area;
  width: 100%;
  height: 3.1rem;
  display:flex;
  flex-direction:row;
  padding-bottom: 18px;
  border-bottom: 2px solid #D67070;
`

export const PageTitle=styled.div`
  label: page-title;
  width:fit-content;
  height: auto;
  color: #D67070;
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-weight: 600;
  align-self: self-end;
  margin-right:10px;
  cursor:pointer;
`

export const CommunityArea=styled.div`
  label: community-area;
  display:flex;
  flex-direction:column;
`

export const CommunityRow=styled.div`
  label: community-row;
  display:flex;
  flex-direction:row;
  border-bottom: 1px solid #D5D5D5;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor:pointer;

`

export const RowNumber=styled.div`
  label: row-number;
  width: 10%;
  color: #616161;
  font-size: 1.2rem;
  font-family: Noto Sans KR;
`

export const RowMenu=styled.div`
  label: row-menu;
  width: 90%;
  color: #616161;
  font-size: 1.2rem;
  font-family: Noto Sans KR;
`

export const ContentArea = styled.div`
  label: content-area;
  width: 85%;
  display:flex;
  flex-direction: column;
  text-align: start;
`

export const CommentContent = styled.div`
  label: comment-content;
  color: #616161;
  font-size: 1.3rem;
  font-family: Noto Sans KR;

`

export const CommentBoardTitle = styled.div`
  label: comment-board-title;
  color: #B2B2B2;
  font-size: 1rem;
  font-family: Noto Sans KR;

`

export const RowTitle=styled.div`
  label: row-title;
  width:75%;
  color: #616161;
  font-size: 1.2rem;
  font-family: Noto Sans KR;
`

export const WriteButton=styled.div`
  label: write-button;
  width:fit-content;
  height: min-content;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-family: Noto Sans KR;
  line-height:1.3rem;
  margin-left:auto;
  padding: 6px 16px;
  background-color:#D67070;
  border: 1px solid #EFC6C6;
  border-radius:2px;
  margin-top: auto;
  cursor:pointer;
`