import { useState, useEffect } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'

export function useTodoList(initialTodos = []) {
  const [todo, setTodo] = useState(() => loadTodos() || initialTodos)
  const [input, setInput] = useState('')

  useEffect(() => {
    saveTodos(todo)
  }, [todo])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    if (input.trim() !== '') {
      const newTodoId =
        todo.length > 0 ? Math.max(...todo.map((item) => item.id)) + 1 : 1
      setTodo([...todo, { id: newTodoId, value: input, isDone: false }])
      setInput('')
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const handleDelete = (id) => {
    setTodo(todo.filter((content) => content.id !== id))
  }

  const handleCheckDone = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    )
  }
  return {
    todo,
    input,
    handleInput,
    handleClick,
    handleEnter,
    handleDelete,
    handleCheckDone,
  }
}
