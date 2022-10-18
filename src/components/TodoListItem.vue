<template>
  <div :class="{ done: todoItem.completed }" class="todo-item">
    <label>
      <input :checked="todoItem.completed" type="checkbox" @click="emitChangeState" />
      {{ todoItem.content }}
      <span class="check-button" />
    </label>
  </div>
</template>

<script setup>
defineProps({ todoItem: Object });
const emit = defineEmits(["change-state"]);
const emitChangeState = (event) => emit("change-state", event);
</script>
