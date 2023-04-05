import { CustomButton } from "../../../../components/UI/Button/CustomButton";
import "./TodoListTools.scss";
import { Fragment } from "react";

interface TodoListProps {
  selectAllTodo: () => void;
  clearFinished: () => void;
  finishedTodo: number;
}

export const TodoListTools: React.FC<TodoListProps> = ({
  selectAllTodo,
  clearFinished,
  finishedTodo,
}) => {
  return (
    <Fragment>
      <CustomButton fontSize={16} action={selectAllTodo}>
        Select all
      </CustomButton>
      {
        <p className="todo-list-tools__clear-finished" onClick={clearFinished}>
          Clear Completed ({finishedTodo})
        </p>
      }
    </Fragment>
  );
};
