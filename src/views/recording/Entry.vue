<template>
  <div>
    <header>
      <Navbar>
        <div>
          <b-icon icon="bar-chart"></b-icon>
          <b-icon icon="calendar3"></b-icon>
          <!-- ===== 漢堡選單按鈕 ==== -->
          <b-navbar toggleable class="p-0 d-inline">
            <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-backdrop>
            </b-navbar-toggle>
          </b-navbar>
          <Sidebar></Sidebar>
        </div>
      </Navbar>
    </header>
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
header {
  svg {
    font-size: 20px;
    color: #fff;
  }
  svg + svg {
    margin-left: 10px;
  }
}
::v-deep .navbar-light .navbar-toggler {
  color: #fff;
  border-color: transparent;
  outline: none;
}
</style>
