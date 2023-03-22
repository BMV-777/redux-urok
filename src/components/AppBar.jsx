import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { useSelector } from "react-redux";

export const AppBar = () => {
  const isLogin = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 8,
          borderBottom: "1px solid black",
          marginBottom: 12,
        }}
      >
        <nav>
          {/* <Link to="/">Home</Link>
          <br /> */}
          {!isLogin && <Link to="/login">Login</Link>}
          {isLogin && <Link to="/dashboard">DashboardPage</Link>}
        </nav>
        {isLogin && <UserMenu />}
      </header>
    </>
  );
}