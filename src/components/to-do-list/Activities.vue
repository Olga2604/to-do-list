<template>
  <div class="to-do-list__activities">
    <h2 class="to-do-list__subtitle">Твои задачки</h2>
    <!-- In production code, I'd create a component for an activity record
    but for simplicity I put the code here -->
    <div v-for="activity in activities" :key="activity.id" class="to-do-list__record">
        <div class="to-do-list__record-name">
          {{ activity.name }}
        </div>
        <button @click="completeActivity(activity)" class="to-do-list__btn-done">
          {{ activity.completed ? '&check;' : ''}}
        </button>
        <button @click="removeActivity(activity)" class="to-do-list__btn-delete">&times;</button>
    </div>
    <img src="https://i.pinimg.com/originals/64/53/09/64530957f49abda1729434ca18814d1d.jpg" alt="" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ActivityRecord',
  computed: {
    ...mapGetters({ activities: 'getActivities' }),
  },
  methods: {
    ...mapActions(['changeActivityStatus', 'deleteActivity']),
    completeActivity(item) {
      this.changeActivityStatus({ ...item });
    },
    removeActivity(item) {
      this.deleteActivity({ ...item });
    },
  },
};
</script>

<style scoped lang="scss">
  .to-do-list {
    &__subtitle {
      color: $purple;
      text-align: center;
      margin: 1rem 0;
    }

    &__record {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 1rem 0;
      border-bottom: 1px solid $green-pale;
      margin-bottom: 1rem;

      &-name {
        font-size: 1.5rem;
        color: $purple-dark;
      }

      &-completed {

      }

      img {
        margin-top: 1rem;
      }
    }

    &__btn-done,
    &__btn-delete {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }

    &__btn-done {
      background-color: $green-pale;
    }

    &__btn-delete {
      background-color: $pink-hot;
    }
  }
</style>
