import styled from "styled-components";
import writeIcon from "../images/writing.png";
import { Link } from "react-router-dom";

const WriteBtn = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  border: 1.5px solid #eb6864;
  border-radius: 50%;
  background-color: #eb6864;
  z-index: 2;
`;
function WriteButton() {
  return (
    <Link to="/Write">
      <WriteBtn>
        <img src={writeIcon} width="30px" height="30px" />
      </WriteBtn>
    </Link>
  );
}
export default WriteButton;
