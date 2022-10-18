<template>
  <div class="input-add">
    <input v-model.trim="todoContent" type="text" @keyup.enter="emitAddTodo" />
    <button @click="emitAddTodo">
      <i class="plus" />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ tid: Number });
const emit = defineEmits(["add-todo"]);
const todoContent = ref("");
const emitAddTodo = () => {
  if (todoContent.value.length === 0) return;
  const todo = {
    id: props.tid,
    content: todoContent.value,
    completed: false,
  };
  emit("add-todo", todo);
  todoContent.value = "";
};
</script>
