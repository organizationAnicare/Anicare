import styled from "styled-components";
import { useState, useEffect } from "react";

const TopBtn = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 1.5rem;
  right: 5rem;
  border: 1.5px solid #aaaaaa;
  color: #aaaaaa;
  border-radius: 50%;
  background-color: transparent;
  z-index: 2;
  ${({ btnState }) => {
    return !btnState ? `display: none` : null;
  }}
`;
const TopButton = (props) => {
  const [ScrollY, setScrollY] = useState(0);
  const [status, setStatus] = useState(false);

  const handler = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      //��ư ����
      setStatus(true);
    } else {
      //��ư �Ⱥ���
      setStatus(false);
    }
  };
  const goTop = () => {
    //Ŭ���ϸ� ��ũ�� ����
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setStatus(false);
  };
  useEffect(() => {
    const sense = () => {
      window.addEventListener("scroll", handler);
    };
    sense();
    return () => {
      window.removeEventListener("scroll", handler);
    };
  });
  return (
    <TopBtn btnState={status} onClick={goTop}>
      Top
    </TopBtn>
  );
};
export default TopButton;
