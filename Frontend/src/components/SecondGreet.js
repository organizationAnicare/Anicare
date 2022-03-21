import styled from "styled-components";
import fifth from "../images/animal5.jpg";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const ImageWrap = styled.div`
  width: 50%;
  height: 100%;
  background: url(${fifth}) no-repeat;
  background-size: 100% 70%;
  margin: 30px;
  opacity: 0.5;
`;
const TextWrap = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 10%;
  padding-left: 30px;
  text-align: left;
`;
const SmallTitle = styled.h3`
  font-size: 20px;
  color: #aaaaaa;
  margin: 20px 20px 10px 20px;
`;
const Title = styled.h1`
  font-size: 30px;
  color: #eb6864;
  margin: 10px 20px 20px 20px;
`;
const Detail = styled.p`
  margin: 20px;
`;
export default function SecondGreet() {
  return (
    <Wrap>
      <ImageWrap />
      <TextWrap>
        <SmallTitle>유기동물 보호 및 입양</SmallTitle>
        <Title>도움이 필요한 아이들에게 관심을 가져주세요</Title>
        <Detail>
          애니케어의 보호소를 통해 임시보호 & 입양을 요청해주세요.
          <br />
          애니케어는 사지않고 입양하는 문화를 지향합니다.
        </Detail>
        <Link className="nav-link" to="/Shelter">
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ margin: "20px" }}
          >
            보호소 바로가기
          </button>
        </Link>
      </TextWrap>
    </Wrap>
  );
}
