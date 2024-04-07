import css from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className={css.root}>
        <header className={css.header}>
          <img className={css.logo} src="/public/cinema-ico.png" alt="logo" />
          <ul>
            <li>
              <Link className={css.link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={css.link} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={css.link} to="/movies">
                Movies
              </Link>
            </li>
          </ul>
        </header>
        <main className={css.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
