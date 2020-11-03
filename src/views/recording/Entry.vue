<template>
  <div>
    <Navbar
      @click="
        $router.history.current.name !== 'RecordingStates' ||
        ($router.history.current.name === 'RecordingStates' &&
          $route.params.date !== today)
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
    <b-modal id="modal-logout" hide-header hide-footer centered>
      <h3 class="message">確定要登出嗎</h3>
      <div class="button-wrapper">
        <BaseButton
          title="取消"
          buttonStyle="outline-default"
          @click="$bvModal.hide('modal-logout')"
        />
        <BaseButton title="確認" buttonStyle="primary" @click="confirmLogout" />
      </div>
    </b-modal>
    <router-view />
  </div>
</template>

<script>
import dayjs from "dayjs";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import ChartIcon from "@/assets/images/ic_chart.svg?inline";
import CalendarIcon from "@/assets/images/ic_calendar.svg?inline";
import BaseButton from "@/components/common/BaseButton";

export default {
  components: {
    Navbar,
    Sidebar,
    BaseButton,
    ChartIcon,
    CalendarIcon
  },
  computed: {
    today() {
      return dayjs().format("YYYY-MM-DD");
    }
  },
  methods: {
    confirmLogout() {
      this.$store.dispatch("logout", {
        remember_token: localStorage.getItem("token")
      });
      this.$bvModal.hide("modal-logout");
      this.$router.push({ name: "Home" });
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

.button-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
  .BaseButton {
    flex: 1 0 0;
  }
  .BaseButton + .BaseButton {
    margin-left: 14px;
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

<style lang="scss">
.modal-content {
  width: 296px;
  margin: 0 auto;
  border-radius: 10px;
  .message {
    margin-bottom: 26px;
    color: #383838;
    font-size: 18px;
    text-align: center;
  }
}
.modal-body {
  padding: 20px 14px 14px;
}
</style>
