import { useState, useEffect } from 'react'
import { loadTodos, saveTodos } from '../utils/storage'

const sortTodos = (todos) => {
  const sorted = [...todos]
  sorted.sort((a, b) => {
    if (a.isDone !== b.isDone) {
      return a.isDone - b.isDone
    }
    return a.id - b.id
  })
  return sorted
}

export function useTodoList(initialTodos = []) {
  const [todo, setTodo] = useState(() => {
    const loadedTodos = loadTodos() || initialTodos
    return sortTodos(loadedTodos)
  })
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    saveTodos(todo)
  }, [todo])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    if (input.trim() !== '') {
      const newTodoId =
        todo.length > 0 ? Math.max(...todo.map((t) => t.id)) + 1 : 1
      const newTodo = { id: newTodoId, value: input, isDone: false }
      setTodo(sortTodos([...todo, newTodo]))
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
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    )
    setTodo(sortTodos(updatedTodos))
  }

  const handleStartEdit = (id, text) => {
    setEditingId(id)
    setEditingText(text)
  }

  const handleEditingInput = (e) => {
    setEditingText(e.target.value)
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditingText('')
  }

  const handleConfirmEdit = (id) => {
    if (editingText.trim() === '') {
      handleDelete(id)
    } else {
      setTodo(
        todo.map((item) =>
          item.id === id ? { ...item, value: editingText } : item
        )
      )
    }
    handleCancelEdit()
  }

  return {
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
  }
}
