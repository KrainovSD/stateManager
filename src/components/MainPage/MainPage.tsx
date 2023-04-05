import { Todo } from "../../models/todo/Todo";
import "./MainPage.scss";

export const MainPage: React.FC = () => {
  return (
    <div className="workplace">
      <div className="container">
        <h1 className="container__header">TODOS</h1>
        <div className="container__wrapper">
          <Todo />
        </div>
      </div>
    </div>
  );
};
