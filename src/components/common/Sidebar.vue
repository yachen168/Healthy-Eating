<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      backdrop
      right
      shadow
      no-header
      width="180px"
    >
      <div class="sidebar-header">
        <!-- ===== 使用者大頭照 ===== -->
        <b-avatar :src="avatarUrl" size="42px"></b-avatar>
        <!-- ======== -->
        <div class="user-info">
          <h2 class="user-name">{{ $store.getters.userProfile.name }}</h2>
          <router-link class="details" :to="{ name: 'UserProfileView' }">
            查看個人檔案
          </router-link>
        </div>
      </div>
      <nav class="sidebar-body">
        <div class="nav-item">
          <PasswordIcon class="icon" /><span>修改密碼</span>
        </div>
        <div class="nav-item"><LogoutIcon class="icon" /><span>登出</span></div>
      </nav>
    </b-sidebar>
  </div>
</template>

<script>
import PasswordIcon from "@/assets/images/ic_changepassword.svg?inline";
import LogoutIcon from "@/assets/images/ic_logout.svg?inline";

export default {
  components: {
    PasswordIcon,
    LogoutIcon
  },
  props: {
    avatarUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
      to right,
      #9cc2b0 12.5%,
      transparent 12.5% 25%,
      #9cc2b0 25% 37.5%,
      transparent 37.5% 50%,
      #9cc2b0 50% 62.5%,
      transparent 62.5% 75%,
      #9cc2b0 75% 87.5%,
      transparent 87.5% 100%
    )
    repeat-x bottom;
  background-size: 45px 1px;
  .user-name {
    color: #383838;
    font-size: 14px;
    font-weight: 700;
  }
  .details {
    color: #407d60;
    font-size: 14px;
    cursor: pointer;
  }
}

.sidebar-body {
  padding-top: 20px;
  .nav-item {
    padding-left: 32px;
    color: #383838;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    .icon {
      vertical-align: middle;
      margin-right: 24px;
    }
    span {
      vertical-align: middle;
    }
  }
  .nav-item + .nav-item {
    margin-top: 42px;
  }
}

::v-deep .b-sidebar-backdrop {
  top: 64px;
}
::v-deep .b-sidebar.b-sidebar-right {
  top: 64px;
}
</style>
