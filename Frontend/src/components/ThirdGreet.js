import styled from "styled-components";
import icon1 from "../images/pencil.png";
import icon2 from "../images/care.png";
import icon3 from "../images/chat.png";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const TopWrap = styled.div`
  width: 100%;
  height: 60%;
  background-color: #eb6864;
`;
const BottomWrap = styled.div`
  width: 100%;
  height: 40%;
  background-color: white;
`;
const TextWrap = styled.div`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CardWrap = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 60%;
  height: 40%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const cardMargin = {
  width: "calc(100%/3)",
  margin: "30px",
};
const SmallTitle = styled.h3`
  font-size: 25px;
  color: #aaaaaa;
  margin: 20px 20px 10px 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  color: white;
  margin: 10px 20px 20px 20px;
`;
const Detail = styled.p`
  margin: 20px;
`;

export default function ThirdGreet() {
  return (
    <Wrap>
      <TopWrap />
      <TextWrap>
        <SmallTitle>소통 & 공감</SmallTitle>
        <Title>나와 비슷한 친구들과 이야기를 나누어보세요</Title>
      </TextWrap>
      <CardWrap>
        <div className="card" style={cardMargin}>
          <div className="card-body">
            <h4 className="card-title">일상기록</h4>
            <img src={icon1} width="40px" height="40px" />
            <p className="card-text">
              나의 반려동물과 함께한 행복한 일상을 기록해보고 다른 친구들의 일상
              또한 만나보세요.
            </p>
            <Link className="nav-link" to="/Diary">
              <a className="card-link">반려일기 보러가기</a>
            </Link>
          </div>
        </div>
        <div className="card" style={cardMargin}>
          <div className="card-body">
            <h4 className="card-title">새 가족</h4>
            <img src={icon2} width="40px" height="40px" />
            <p className="card-text">
              새로운 가족을 만난 아이들의 이야기. 잘 지내고 있는지 소식을
              찾아보세요.
            </p>
            <Link className="nav-link" to="/Adopt">
              <a className="card-link">입양후기 보러가기</a>
            </Link>
          </div>
        </div>
        <div className="card" style={cardMargin}>
          <div className="card-body">
            <h4 className="card-title">공유</h4>
            <img src={icon3} width="40px" height="40px" />
            <p className="card-text">
              사료정보, 병원정보, 생활 정보 등 반려 생활에 필요한 정보를
              알아보세요.
            </p>
            <Link className="nav-link" to="/Info">
              <a className="card-link">정보 나누기</a>
            </Link>
          </div>
        </div>
      </CardWrap>
      <BottomWrap />
    </Wrap>
  );
}
