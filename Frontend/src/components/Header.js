import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ANICARE
        </a>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                홈<span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Shelter">
                보호소
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Diary">
                반려일기
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Adopt">
                입양후기
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Info">
                정보나눔
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MyPage">
                마이페이지
              </Link>
            </li>
          </ul>
          <Link to="/Login">
            <button
              style={{ margin: "5px" }}
              type="button"
              className="btn btn-outline-secondary"
            >
              로그인
            </button>
          </Link>
          <Link to="/SignUp">
            <button type="button" className="btn btn-secondary">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
