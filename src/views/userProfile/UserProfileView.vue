<template>
  <div>
    <main>
      <div class="user">
        <b-avatar :src="$store.getters.avatarUrl" size="130px"></b-avatar>
        <h2 class="user-name">{{ $store.getters.userProfile[0].name }}</h2>
      </div>
      <BaseButton
        @click="$router.push({ name: 'UserProfileEdit' })"
        title="編輯個人檔案"
        buttonStyle="outline-default"
      ></BaseButton>
      <UserProfileTable :items="$store.getters.userProfile"></UserProfileTable>
    </main>
  </div>
</template>

<script>
import BaseButton from "@/components/common/BaseButton";
import UserProfileTable from "@/components/userProfile/UserProfileTable";

export default {
  components: {
    BaseButton,
    UserProfileTable
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
  .user {
    width: fit-content;
    margin: 0 auto;
    h2 {
      margin-top: 20px;
      color: #383838;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
    }
  }
}

::v-deep .base-button {
  margin: 20px 0;
}
</style>
