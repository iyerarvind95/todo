import TodoCard from "./TodoCard";

function TodoList(props) {
  const {todos, selectedTab } = props;

  const filteredTodosList = selectedTab == 'All' ? todos : selectedTab == 'Completed' ? todos.filter(val => val.complete) : todos.filter(val => !val.complete);
  return (
    <>
      {filteredTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} {...props} todoIndex={todoIndex} todo={todo}/>
        )
      })}
    </>
  );
}

export default TodoList;
