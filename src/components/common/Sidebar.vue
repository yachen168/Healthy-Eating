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
        <b-avatar src="" size="42px"></b-avatar>
        <!-- ======== -->
        <div class="user-info">
          <h2 class="user-name">{{ "健康先生" }}</h2>
          <span class="details">查看個人檔案</span>
        </div>
      </div>
      <nav class="sidebar-body">
        <p class="nav-item">修改密碼</p>
        <p class="nav-item">登出</p>
      </nav>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
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
  padding-left: 32px;
  .nav-item {
    color: #383838;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
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
