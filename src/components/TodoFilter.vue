<template>
  <div class="my-6 mx-0.5 flex text-sm text-slate-400">
    <button
      v-for="filter in filters"
      :key="filter.value"
      :class="{ 'scale-125 font-medium text-violet-500': selected === filter.value }"
      class="mr-3.5 duration-500"
      @click="emitChangeFilter(filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup>
defineProps({ selected: String });
const filters = [
  { label: "全部", value: "all" },
  { label: "已完成", value: "done" },
  { label: "未完成", value: "todo" },
];
const emit = defineEmits(["change-filter"]);
const emitChangeFilter = (value) => emit("change-filter", value);
</script>
