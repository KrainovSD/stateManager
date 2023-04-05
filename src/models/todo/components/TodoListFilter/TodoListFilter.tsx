import "./TodoListFilter.scss";
import { Fragment } from "react";

interface TodoListFilterProps {
  itemLeft: number;
  filter: string;
  setFilter: (v: "all" | "active" | "completed") => void;
}

export const TodoListFilter: React.FC<TodoListFilterProps> = ({
  itemLeft,
  filter,
  setFilter,
}) => {
  return (
    <Fragment>
      <p className="todo-list-filter__item-left">{itemLeft} items left</p>
      <div className="todo-list-filter__filters">
        <div
          className={`todo-list-filter__filter ${
            filter === "all" ? "_active" : ""
          }`}
          onClick={() => {
            setFilter("all");
          }}
        >
          All
        </div>
        <div
          className={`todo-list-filter__filter ${
            filter === "active" ? "_active" : ""
          }`}
          onClick={() => {
            setFilter("active");
          }}
        >
          Active
        </div>
        <div
          className={`todo-list-filter__filter ${
            filter === "completed" ? "_active" : ""
          }`}
          onClick={() => {
            setFilter("completed");
          }}
        >
          Completed
        </div>
      </div>
    </Fragment>
  );
};
