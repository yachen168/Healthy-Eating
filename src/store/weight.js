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
    },
    datesHaveBeenRecorded_weight(state) {
      return state.allWeights.map(item => new Date(item.created_at));
    },
    weightsInSearchedPeriod(state, getters, rootState, rootGetters) {
      const datesInSearchedPeriod = rootGetters.datesInSearchedPeriod;
      const datesHaveBeenRecorded = state.allWeights.reduce(
        (obj, currentValue) => {
          const date = currentValue.created_at.split(" ")[0];
          obj[date] = currentValue.weight;
          return obj;
        },
        {}
      );

      /* 圖表顯示首次紀錄體重日~今天體重變化，未紀錄則回朔到最近的一次紀錄，至多回朔到首次紀錄體重日 */
      let nearestWeight =
        getters.allWeights[getters.allWeights.length - 1].weight;

      return datesInSearchedPeriod.map((item, index) => {
        if (item in datesHaveBeenRecorded) {
          nearestWeight = datesHaveBeenRecorded[item];
          return datesHaveBeenRecorded[item];
        } else if (
          dayjs(item).isBefore(getters.allWeights[0].created_at) ||
          dayjs(item).isAfter(dayjs())
        ) {
          return null;
        } else {
          const reverseAllWeights = state.allWeights.reduce(
            (accumulator, currentValue) => [currentValue, ...accumulator],
            []
          );

          const objFoundedWeight = reverseAllWeights.find(record => {
            return dayjs(record.created_at.split(" ")[0]).isSameOrBefore(item);
          });

          return objFoundedWeight.weight;
        }
      });
    }
  }
};
