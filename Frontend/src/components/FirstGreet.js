import styled from "styled-components";
import AniSlide from "./AniSlide";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const TextWrap = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 10%;
  padding-left: 10%;
  text-align: left;
`;
const ImageWrap = styled.div`
  padding: 40px;
  width: 50%;
  height: 100%;
`;
const SmallTitle = styled.h3`
  font-size: 20px;
  color: #aaaaaa;
  margin: 20px 20px 10px 20px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: #eb6864;
  margin: 10px 20px 20px 20px;
`;
const Detail = styled.p`
  margin: 20px;
`;
export default function FirstGreet() {
  return (
    <Wrap>
      <TextWrap>
        <SmallTitle>반려인을 위한 소셜 플랫폼</SmallTitle>
        <Title>Anicare</Title>
        <Detail>
          애니케어는 세상 모든 반려인들이 소통할 수 있는 온라인 공간입니다.
          <br />
          다양한 카테고리들을 통해 여러 반려동물들을 만나보세요.
        </Detail>
      </TextWrap>
      <ImageWrap>
        <AniSlide />
      </ImageWrap>
    </Wrap>
  );
}
