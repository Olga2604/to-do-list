<template>
  <div>
    <div class="to-do-list__input">
      <input
        v-model="activity"
        type="text"
        name="activity"
        placeholder="Опиши свою задачку здесь :3"
        @keyup.enter="addActivityToList"/>
      <button @click="addActivityToList" class="to-do-list__btn">
        Добавить в списочек
      </button>
    </div>
    <div class="to-do-list__message">{{ message }}</div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions } from 'vuex';

export default {
  name: 'ActivityInput',
  data() {
    return {
      activity: '',
      message: '',
    };
  },
  watch: {
    activity() {
      this.message = '';
    },
  },
  methods: {
    ...mapActions(['addActivity']),
    addActivityToList() {
      if (this.activity !== '') {
        const activity = {
          name: this.activity,
          completed: false,
          id: uuidv4(),
        };

        this.addActivity({ ...activity });
        this.activity = '';
      } else {
        this.message = 'Кажется, нет описания задачки!';
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .to-do-list {
    &__input {
      display: flex;
      flex-wrap: nowrap;

      input {
        border: 1px solid $pink-hot;
        border-radius: 1rem;
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        color: $purple-dark;
        margin-right: 0.5rem;
      }
    }

    &__btn {
      border-radius: 1.5rem;
      background: $gradient;
      border: 1px solid $purple;
      cursor: pointer;
      color: $white;
      padding: 0.5rem;
      font-size: 1rem;
    }

    &__message {
      margin-top: 0.5rem;
      text-align: center;
      color: $pink-hot;
    }
  }
</style>
