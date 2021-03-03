<template>
  <div class="to-do-list">
    <h1 class="to-do-list__title">Это самый милый to-do лист</h1>
    <activity-input></activity-input>
    <activities v-if="activities.length !== 0"></activities>
    <div v-else class="to-do-list__message">
      У тебя пока нет задачек!
      <img src="https://media.istockphoto.com/photos/cute-kitten-portrait-british-shorthair-cat-picture-id916159418?k=6&m=916159418&s=612x612&w=0&h=3wU_DQ35jXhHLPeHHfsITav-hSSxLLB49zUFS0LoLZs=" alt="" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ActivityInput from '@/components/to-do-list/ActivityInput.vue';
import Activities from '@/components/to-do-list/Activities.vue';

export default {
  components: { ActivityInput, Activities },
  computed: {
    ...mapGetters({ activities: 'getActivities' }),
  },
};
</script>

<style scoped lang="scss">
  .to-do-list {
    &__title {
      color: $purple;
      background: $gradient;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-bottom: 1rem;
    }

    &__message {
      font-size: 1rem;
      margin-top: 1rem;
      text-align: center;

      img {
        margin-top: 0.5rem;
      }
    }
  }
</style>
