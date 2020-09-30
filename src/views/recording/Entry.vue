<template>
  <div>
    <Navbar>
      <div>
        <img src="@/assets/images/ic_chart.svg" alt="圖表" />
        <img src="@/assets/images/ic_calendar.svg" alt="行事曆" />
        <!-- ===== 漢堡選單按鈕 ==== -->
        <b-navbar toggleable class="p-0 d-inline">
          <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-backdrop>
          </b-navbar-toggle>
        </b-navbar>
        <Sidebar></Sidebar>
      </div>
    </Navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  img {
    margin-right: 20px;
    cursor: pointer;
  }
}

::v-deep .navbar-light {
  .navbar-toggler {
    padding: 0;
    border-color: transparent;
    outline: none;
  }
  .navbar-toggler-icon {
    background-image: url("~@/assets/images/ic_burger.svg");
  }
}
</style>
