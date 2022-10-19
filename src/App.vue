<template>
  <main class="min-h-screen w-screen bg-indigo-100 py-28">
    <div class="container rounded-3xl bg-slate-100 px-7 py-9 shadow-2xl">
      <img alt="Vue logo" class="mx-auto block h-16 w-16" src="./assets/logo.svg" />
      <h1 class="my-6 text-3xl font-bold text-slate-600">欢迎使用 Todo App！</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="changeFilter" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script setup>
import useFilteredTodos from "@/composables/useFilteredTodos.js";
import useTodos from "@/composables/useTodos.js";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";

const { todos, addTodo } = useTodos();
const { filter, filteredTodos } = useFilteredTodos(todos);
const changeFilter = (value) => {
  filter.value = value;
};
</script>
