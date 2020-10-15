<template>
  <div>
    <Navbar
      @click="
        $router.history.current.name !== 'RecordingStates' ||
        ($router.history.current.name === 'RecordingStates' &&
          $route.query.date !== today)
          ? $router.push({ name: 'RecordingStates' })
          : ''
      "
    >
      <div>
        <router-link :to="{ name: 'NutritionIntakeChart' }">
          <ChartIcon class="icon" />
        </router-link>
        <router-link :to="{ name: 'Calendar' }">
          <CalendarIcon class="icon" />
        </router-link>
        <!-- ===== 漢堡選單按鈕 ==== -->
        <b-navbar toggleable class="p-0 d-inline">
          <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-backdrop>
          </b-navbar-toggle>
        </b-navbar>
        <Sidebar :avatarUrl="$store.getters.avatarUrl"></Sidebar>
      </div>
    </Navbar>
    <router-view />
  </div>
</template>

<script>
import dayjs from "dayjs";
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
  },
  computed: {
    today() {
      return dayjs().format("YYYY-MM-DD");
    }
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
    vertical-align: top;
    border-color: transparent;
    outline: none;
  }
  .navbar-toggler-icon {
    background-image: url("~@/assets/images/ic_burger.svg");
  }
}
</style>
