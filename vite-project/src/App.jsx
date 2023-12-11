import { DragDropContext} from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

/*const initialStateTodos = [
   {
    id: 1, 
    title: "Completed online Javascript bluuweb Curse",
    completed: true
  },
  {
    id: 2, 
    title: "Go to the gym",
    completed: false
  },
  {
    id: 3, 
    title: "10 minutes meditation",
    completed: false
  },
  {
    id: 4, 
    title: "Pick up groceries",
    completed: false
  },
  {
    id: 5, 
    title: "Complete todo appon Frontend Mentor",
    completed: false
  },
]; */

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () =>{

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect (() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo ={
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo]);
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} :todo ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !==id))
  }

  const computedItem = todos.filter((todo)=> !todo.completed).length;

  const clearComputed = () =>{
    setTodos(todos.filter((todo)=> !todo.completed))
  }

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo)=> !todo.completed);
      case "completed":
        return todos.filter((todo)=> todo.completed);
    }
  }

  const handledrag = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
    )
        return;

    setTodos((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
    );
};

  return (  
      <div className="min-h-screen transition-all duration-1000 dark:bg-gray-800 bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">

        <Header/>

        <main className="container mx-auto mt-8 px-4 md:max-w-xl">
          <TodoCreate create={createTodo}/>

          <DragDropContext onDragEnd={handledrag}>
             <TodoList t={filterTodo()} remove={removeTodo} update={updateTodo}/>
          </DragDropContext>

          <TodoComputed count={computedItem} clear={clearComputed}/>

          <TodoFilter change={changeFilter}filter={filter}/>
        </main>


        <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reoder list</footer >
     </div>)

    
}

export default App;
