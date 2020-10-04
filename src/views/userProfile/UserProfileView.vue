<template>
  <div>
    <main>
      <div class="user">
        <b-avatar src="" size="130px"></b-avatar>
        <h2 class="user-name">健康先生</h2>
      </div>
      <BaseButton
        @click="$router.push({ name: 'UserProfileEdit' })"
        title="編輯個人檔案"
        buttonStyle="outline-default"
      ></BaseButton>
      <UserProfileTable :items="userProfile"></UserProfileTable>
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
  },
  data() {
    return {
      // ========== Api 資料格式 ===========
      userProfile: [
        {
          id: 23,
          name: "yachen",
          email: "yachen168@gmail.com",
          created_at: "2020-09-23 18:43:41",
          image_path: null,
          height: 168,
          weight: 50,
          gender: null,
          birthday: null,
          diet_standard: null
        }
      ]
    };
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
