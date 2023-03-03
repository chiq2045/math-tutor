import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <header>
        <h1>Math Tutor</h1>
        <p>Select the subject that you want to practice</p>
        <nav>
          <ul>
            <li>
              <Link to="cookie-multiplication">Cookie Multiplication</Link>
            </li>
            <li>
              <Link to="long-addition-subtraction">
                Long Addition/Subtraction
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
