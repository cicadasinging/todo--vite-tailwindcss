<template>
  <main>
    <div class="container">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" />
      <h1>欢迎使用 Todo App！</h1>
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
