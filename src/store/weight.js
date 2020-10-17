import API from "../api/service";
import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);

export default {
  state: {
    allWeights: [],
    weightOfSpecificDate: {},
    isWeightOfSpecificDateRecorded: null
  },
  mutations: {
    allWeights(state, allWeights) {
      state.allWeights = allWeights;
    },
    weightOfSpecificDate(state, specificDate) {
      /* 若查詢日無歷史紀錄，則回朔到距離查詢日最近的一次歷史紀錄，至多回朔至首次紀錄體重日 */
      const reverseAllWeights = state.allWeights.reduce(
        (accumulator, currentValue) => [currentValue, ...accumulator],
        []
      );

      const objFoundedWeight = reverseAllWeights.find(item => {
        return dayjs(item.created_at.split(" ")[0]).isSameOrBefore(
          specificDate
        );
      });

      if (objFoundedWeight) {
        state.weightOfSpecificDate = objFoundedWeight;
      } else {
        state.weightOfSpecificDate = { weight: 0 };
      }
    },
    isWeightOfSpecificDateRecorded(state, specificDate) {
      if (state.weightOfSpecificDate.created_at) {
        const isDatesEqual =
          state.weightOfSpecificDate.created_at.split(" ")[0] === specificDate;
        state.isWeightOfSpecificDateRecorded = isDatesEqual;
      } else {
        state.isWeightOfSpecificDateRecorded = false;
      }
    },
    updateWeightOfSpecificDate(state, num) {
      state.weightOfSpecificDate.weight += num;
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
        return error.response;
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
      return state.weightOfSpecificDate;
    },
    weightIdOfSpecificDate(state) {
      return state.weightOfSpecificDate.id;
    },
    allWeights(state) {
      return state.allWeights;
    },
    isWeightOfSpecificDateRecorded(state) {
      return state.isWeightOfSpecificDateRecorded;
    }
  }
};
