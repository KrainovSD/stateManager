import "./Todo.scss";
import { TodoAdd } from "./components/TodoAdd/TodoAdd";
import { TodoList } from "./components/TodoList/TodoList";

export const Todo: React.FC = () => {
  return (
    <div className="todo">
      <div className="todo__add">
        <TodoAdd />
      </div>
      <div className="todo__list">
        <TodoList />
      </div>
    </div>
  );
};
