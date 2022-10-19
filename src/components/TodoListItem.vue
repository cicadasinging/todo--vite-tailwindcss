<template>
  <div class="rounded-lg bg-white p-4 text-neutral-600">
    <label
      :class="{ 'italic text-zinc-500 line-through': todoItem.completed }"
      class="relative flex cursor-pointer place-items-center leading-4"
    >
      <input :checked="todoItem.completed" class="mr-4 opacity-0" type="checkbox" @click="emitChangeState" />
      <!--<span class="absolute top-0 h-4 w-4 rounded-full border border-solid border-violet-500" />-->
      <span class="absolute top-0 h-4 w-4 rounded-full outline outline-1 outline-violet-500" />
      <span
        :class="{ 'scale-75 bg-violet-500 duration-500': todoItem.completed }"
        class="absolute top-0 h-4 w-4 rounded-full"
      />
      {{ todoItem.content }}
    </label>
  </div>
</template>

<script setup>
defineProps({ todoItem: Object });
const emit = defineEmits(["change-state"]);
const emitChangeState = (event) => emit("change-state", event);
</script>
