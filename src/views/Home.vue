<template>
  <div class="home">
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import ToDoList from '@/components/to-do-list/Dashboard.vue';

export default {
  name: 'Home',
  components: { ToDoList },
};
</script>
