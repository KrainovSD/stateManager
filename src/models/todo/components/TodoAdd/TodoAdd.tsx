import { CustomInput } from "../../../../components/UI/Input/CustomInput";
import "./TodoAdd.scss";
import { CustomButton } from "../../../../components/UI/Button/CustomButton";
import todoStore, { ITodo } from "../../../../store/todo";
import { useSelector } from "../../../../../KRStore";
import { useState } from "react";

export const TodoAdd: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, dispatch] = useSelector<ITodo[]>(todoStore, "todo");
  const createTodo = () => {
    if (todo.trim().length === 0) return;
    dispatch.addTodo(todo);
    setTodo("");
  };

  return (
    <div className="todo-add">
      <CustomInput
        fontSize={18}
        placeholder="What needs to be done?"
        value={todo}
        setValue={setTodo}
        action={createTodo}
      />
      <CustomButton fontSize={18} action={createTodo}>
        Enter
      </CustomButton>
    </div>
  );
};
