import { FC } from "react";
import "./page.module.css";

const HomePage: FC = () => {
  return (
      <div className="page-wrapper">
        <h1>Home</h1>
        <p>
          Эта практическое задание поможет вам применить свои знания по
          оптимизации загрузки страницы
        </p>
      </div>
  );
};

export default HomePage;
