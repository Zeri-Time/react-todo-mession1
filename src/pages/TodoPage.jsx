import { useTodoList } from '../hooks/useTodoList'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    editingId,
    editingText,
    handleStartEdit,
    handleEditingInput,
    handleCancelEdit,
    handleConfirmEdit,
  } = useTodoList(initialTodos)

  return (
    <div className="flex flex-col w-screen h-screen bg-stone-800/30">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="border-2 border-orange-200/90 w-full p-6 m-4 bg-slate-900/20 rounded-lg lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-center mb-4">
            <h1 className="text-2xl font-bold text-teal-300/55 ">Todo List</h1>
          </div>
          <TodoInput
            input={input}
            handleInput={handleInput}
            handleClick={handleClick}
            handleEnter={handleEnter}
          />
          <TodoList
            todos={todo}
            handleDelete={handleDelete}
            handleCheckDone={handleCheckDone}
            editingId={editingId}
            editingText={editingText}
            handleStartEdit={handleStartEdit}
            handleEditingInput={handleEditingInput}
            handleCancelEdit={handleCancelEdit}
            handleConfirmEdit={handleConfirmEdit}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TodoPage
