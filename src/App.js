import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

// stateの管理はreduxにまかせているため
// 基本的にStateless Functional Componentで良い
const App = () => (
  <div>
    {/* AddTodo,VisibleTodoListはcontainer */}
    {/* containerは主に振る舞い（ロジック）がある */}
    <AddTodo />
    <VisibleTodoList />
    {/* FooterはReact.Component */}
    <Footer />
  </div>
)

export default App