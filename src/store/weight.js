import API from "../api/service";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

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
      const reverseAllWeights = state.allWeights.reduce(
        (acc, e) => [e, ...acc],
        []
      );

      const objFoundedWeight = reverseAllWeights.find(item => {
        return dayjs(item.created_at.split(" ")[0]).isSameOrBefore(
          specificDate
        );
      });
      console.log(objFoundedWeight);
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
