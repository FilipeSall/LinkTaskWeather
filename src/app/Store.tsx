"use client";
import { create } from 'zustand';

type StorePropsTypes = {
  value: string;
  setValue: (value: string) => void;
  category: string;
  setCategory: (category: string) => void;
  isCompleted: boolean;
  todos: any[];
  addTodo: (todo: any) => void;
  removeTodo: (index: number) => void;
  toggleCompleted:(index: number) => void;
};

const UseStore = create<StorePropsTypes>((set) => ({
  value: '',
  setValue: (value) => set({ value }),
  category: 'Trabalho',
  setCategory: (category) => set({ category }),
  isCompleted: false,
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
  toggleCompleted: (index) => {
    set((state) => {
      const updatedTodos = [...state.todos];
      updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
      return { todos: updatedTodos };
    });
  },
}));

export default UseStore;