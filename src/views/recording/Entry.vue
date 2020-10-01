<template>
  <div>
    <Navbar>
      <div>
        <ChartIcon class="icon" />
        <CalendarIcon class="icon" />
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
import ChartIcon from "@/assets/images/ic_chart.svg?inline";
import CalendarIcon from "@/assets/images/ic_calendar.svg?inline";

export default {
  components: {
    Navbar,
    Sidebar,
    ChartIcon,
    CalendarIcon
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  .icon {
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
