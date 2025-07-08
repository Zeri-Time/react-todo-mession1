const TODOS_KEY = 'todos'

export const saveTodos = (todos) => {
  try {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  } catch (e) {
    console.error('저장하기 실패', e)
  }
}

export const loadTodos = () => {
  try {
    const savedTodos = localStorage.getItem(TODOS_KEY)
    return savedTodos ? JSON.parse(savedTodos) : null
  } catch (e) {
    console.error('불러오기 실패', e)
    return null
  }
}
