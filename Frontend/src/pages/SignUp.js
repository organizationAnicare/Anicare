import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { registerUser } from "../redux/actions/user_action";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: left;
`;
export default function SignUp(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    }
    let body = {
      name: Name,
      email: Email,
      password: Password,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.register) {
        return alert("회원가입에 성공하였습니다.");
      } else {
        return alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
      }
    });
  };
  return (
    <Wrap>
      <form
        onSubmit={submitHandler}
        className="was-validated"
        style={{
          margin: "50px auto 0",
          padding: "20px",
          maxWidth: "400px",
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            이름
          </label>
          <input
            type="text"
            id="nameInput"
            value={Name}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onNameHandler}
            required
            minLength="2"
          />
          <div class="valid-feedback">Success! You've done it.</div>
          <div class="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            이메일
          </label>
          <input
            type="email"
            value={Email}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onEmailHandler}
            required
          />
          <div class="valid-feedback">Success! You've done it.</div>
          <div class="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            비밀번호
          </label>
          <input
            type="password"
            value={Password}
            className="form-control"
            placeholder="Password"
            onChange={onPasswordHandler}
            required
            minlength="8"
            maxLength="15"
          />
          <div class="valid-feedback">Success! You've done it.</div>
          <div class="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">
            비밀번호 확인
          </label>
          <input
            type="password"
            value={ConfirmPassword}
            className="form-control"
            placeholder="Confirm Password"
            onChange={onConfirmPasswordHandler}
            required
            minLength="8"
            maxLength="15"
          />
          <div class="valid-feedback">Success! You've done it.</div>
          <div class="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div>
        </div>
        <div class="d-grid gap-2">
          <button className="btn btn-lg btn-primary" type="submit">
            회원가입
          </button>
        </div>
      </form>
    </Wrap>
  );
}
