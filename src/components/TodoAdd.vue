<template>
  <div class="relative grid place-items-end">
    <input
      v-model.trim="todoContent"
      class="w-full rounded-full border-none py-4 pl-4 pl-12 text-base text-slate-600 outline-none hover:shadow"
      type="text"
      @keyup.enter="emitAddTodo"
    />
    <button
      class="absolute h-14 w-14 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 hover:brightness-105"
      @click="emitAddTodo"
    >
      <plus-small-icon class="h-14 w-14 rounded-full fill-white" />
    </button>
  </div>
</template>

<script setup>
import { PlusSmallIcon } from "@heroicons/vue/24/solid";
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
