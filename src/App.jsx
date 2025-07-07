import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState([
    { id: 1, value: '책읽기', isDone: false },
    { id: 2, value: '영화보기', isDone: false },
    { id: 3, value: '운동하기', isDone: false },
    { id: 4, value: '공부하기', isDone: false },
  ])
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleClick = () => {
    if (input.trim !== '') {
      const newTodoId = todo.length >= 1 ? todo[todo.length - 1].id + 1 : 1
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

  return (
    <>
      <input
        type="text"
        onChange={handleInput}
        value={input}
        onKeyDown={handleEnter}
        className="border border-white"
      />
      <button onClick={handleClick}>추가</button>
      <ul>
        {todo.map((content) => (
          <li key={content.id}>
            <input
              type="checkbox"
              checked={content.isDone}
              onChange={() => handleCheckDone(content.id)}
            />
            <span
              style={{
                textDecoration: content.isDone ? 'line-through' : 'none',
              }}
            >
              {content.value}
            </span>{' '}
            <button onClick={() => handleDelete(content.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
