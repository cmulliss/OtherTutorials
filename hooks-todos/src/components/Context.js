import { createContext } from 'react'

const TodosContext = createContext({
  todos: [
    { id: 1, text: 'Eat breakfast', complete: false },
    { id: 2, text: 'Washing', complete: false },
    { id: 3, text: 'Brew tea', complete: true }
  ]
})
export default TodosContext
