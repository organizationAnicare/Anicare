import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 5vh;
  background-color: white;
  border-top: solid 0.5px rgba(0, 0, 0, 0.125);
`;
export default function Footer() {
  return (
    <Wrap>
      <p style={{ color: "#aaaaaa" }}>Project ANICARE</p>
    </Wrap>
  );
}
