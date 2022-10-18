<template>
  <div class="filters">
    <span
      v-for="filter in filters"
      :key="filter.value"
      :class="{ active: selected === filter.value }"
      class="filter"
      @click="emitChangeFilter(filter.value)"
      >{{ filter.label }}
    </span>
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
