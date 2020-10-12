import API from "../api/service";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

export default {
  state: {
    allWeights: [],
    weightOfSpecificDate: {}
  },
  mutations: {
    allWeights(state, allWeights) {
      state.allWeights = allWeights;
    },
    weightOfSpecificDate(state, specificDate) {
      /* 若查詢日無歷史紀錄，則回朔到距離查詢日最近的一次歷史紀錄，至多回朔至首次紀錄體重日 */
      const objFoundedWeight = state.allWeights.find(item => {
        return dayjs(new Date(specificDate)).isSameOrAfter(
          dayjs(item.created_at.split(" ")[0])
        );
      });

      if (objFoundedWeight) {
        state.weightOfSpecificDate = objFoundedWeight;
      } else {
        state.weightOfSpecificDate = { weight: 0 };
      }
    }
  },
  actions: {
    async fetchAllWeights({ commit }, userId) {
      try {
        const response = await API.get(`/userBio/${userId}`);
        commit("allWeights", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async setUserWeight({}, data) {
      try {
        await API.post("/bioProfile", data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateUserWeight({}, { weightId, data }) {
      try {
        await API.post(`/bioProfile/${weightId}`, data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  getters: {
    weightOfSpecificDate(state) {
      return +state.weightOfSpecificDate.weight;
    },
    weightIdOfSpecificDate(state) {
      return state.weightOfSpecificDate.id;
    },
    allWeights(state) {
      return state.allWeights;
    }
  }
};
