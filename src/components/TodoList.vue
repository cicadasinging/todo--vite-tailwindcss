<template>
  <div class="grid gap-3.5">
    <todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    />
  </div>
</template>

<script setup>
import TodoListItem from "./TodoListItem.vue";

defineProps({ todos: Array });
</script>
