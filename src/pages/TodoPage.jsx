import { useTodoList } from '../hooks/useTodoList'
import TodoCreate from '../components/TodoCreate'
import TodoRead from '../components/TodoRead'

const initialTodos = []

function TodoPage() {
  const {
    todo,
    input,
    handleInput,
    handleClick,
    handleEnter,
    handleDelete,
    handleCheckDone,
  } = useTodoList(initialTodos)

  return (
    <div className="todo-container">
      <TodoCreate
        input={input}
        handleInput={handleInput}
        handleClick={handleClick}
        handleEnter={handleEnter}
      />
      <TodoRead
        todos={todo}
        handleDelete={handleDelete}
        handleCheckDone={handleCheckDone}
      />
    </div>
  )
}

export default TodoPage
