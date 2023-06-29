"use client";
import { create } from 'zustand';

interface Todos {
  text: string;
  icon: any;
}

interface StorePropsTypes {
  todos: Todos[];
  addTodo: (todo: Todos) => void;
  removeTodo: (index: number) => void;
}

const UseStore = create<StorePropsTypes>((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (index) => {
    set((state) => {
      const updatedTodos = state.todos.filter((_, i) => i !== index);
      return { todos: updatedTodos };
    });
  },
}));

export default UseStore