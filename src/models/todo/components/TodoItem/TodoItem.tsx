import "./TodoItem.scss";
import { CustomCheckBox } from "../../../../components/UI/CheckBox/CustomCheckBox";
import todoStore, { IReducersList, ITodo } from "../../../../store/todo";
import { useSelector } from "../../../../../KRStore";
import { useState } from "react";
import pencil from "../../../../assets/media/pencil.png";
import bin from "../../../../assets/media/bin.png";
import { CustomSmallInput } from "../../../../components/UI/SmallInput/CustomSmallInput";

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [todos, dispatch] = useSelector<ITodo[], IReducersList>(
    todoStore,
    "todo"
  );
  const toggleTodo = (id: string) => {
    dispatch.updateTodoFinish(id);
  };

  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const updateTodoTitle = (id: string) => {
    dispatch.updateTodoTitle({ id, title: newTitle });
    setIsEdit(false);
  };
  const deleteTodo = (id: string) => {
    dispatch.deleteTodo(id);
  };

  return (
    <div className={`todo-item ${todo.finish ? "_finished" : ""}`}>
      <div className="todo-item__info">
        <CustomCheckBox
          value={todo.finish}
          action={() => {
            toggleTodo(todo.id);
          }}
        />
        {!isEdit && (
          <p className={`todo-item__title ${todo.finish ? "_finished" : ""}`}>
            {todo.title}
          </p>
        )}
        {isEdit && (
          <CustomSmallInput
            fontSize={14}
            value={newTitle}
            setValue={setNewTitle}
            placeholder=""
            action={() => {
              updateTodoTitle(todo.id);
            }}
          />
        )}
      </div>

      <div className="todo-item__tools">
        <img
          src={pencil}
          alt=""
          className="todo-item__tool"
          onClick={() => {
            setIsEdit(isEdit ? false : true);
            setNewTitle(todo.title);
          }}
        />
        <img
          src={bin}
          alt=""
          className="todo-item__tool"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
    </div>
  );
};
