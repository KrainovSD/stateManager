import "./TodoList.scss";
import { Fragment, useState } from "react";
import todoStore, { IReducersList, ITodo } from "../../../../store/todo";
import { useSelector } from "../../../../../KRStore";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoListTools } from "../TodoListTools/TodoListTools";
import { TodoListFilter } from "../TodoListFilter/TodoListFilter";

export const TodoList: React.FC = () => {
  const [todos, dispatch] = useSelector<ITodo[], IReducersList>(
    todoStore,
    "todo"
  );
  const selectAllTodo = () => {
    dispatch.updateTodoFinishAll();
  };
  const clearFinished = () => {
    dispatch.clearFinished();
  };
  const finishedTodo = todos.filter((todo) => todo.finish === true).length;
  const itemLeft = todos.filter((todo) => todo.finish === false).length;
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const filteredTodo = () => {
    switch (filter) {
      case "active": {
        return todos.filter((todo) => todo.finish === false);
      }
      case "completed": {
        return todos.filter((todo) => todo.finish === true);
      }
      default: {
        return todos;
      }
    }
  };

  if (todos.length === 0) return <Fragment></Fragment>;

  return (
    <div className="todo-list">
      <div className="todo-list__tools">
        <TodoListTools
          finishedTodo={finishedTodo}
          selectAllTodo={selectAllTodo}
          clearFinished={clearFinished}
        />
      </div>
      <div className="todo-list__wrapper">
        {filteredTodo().map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
      <div className="todo-list__filter">
        <TodoListFilter
          filter={filter}
          setFilter={setFilter}
          itemLeft={itemLeft}
        />
      </div>
    </div>
  );
};
