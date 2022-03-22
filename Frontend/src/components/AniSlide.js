import Slider from "react-slick";
import styled from "styled-components";
import first from "../images/animal1.jpg";
import second from "../images/animal2.jpg";
import third from "../images/animal3.jpg";
import fourth from "../images/animal4.jpg";

const StyledSlider = styled.div`
  width: 100%
  heigth: 100%;
  overflow: hidden;
  .slick-slide{
    display: inline-block;
  }
`;
const Slide = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
export default function AniSlide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, //한 화면에 보여질 컨텐츠
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠
    arrows: false, //옆으로 이동하는 화살표 표시 여부
    autoplay: true, //자동 스크롤
    autoplaySpeed: 4000, //자동 스크롤 속도
  };
  return (
    <StyledSlider>
      <Slider {...settings}>
        <Slide>
          <img src={first} alt="img"></img>
        </Slide>
        <Slide>
          <img src={second} alt="img"></img>
        </Slide>
        <Slide>
          <img src={third} alt="img"></img>
        </Slide>
        <Slide>
          <img src={fourth} alt="img"></img>
        </Slide>
      </Slider>
    </StyledSlider>
  );
}
