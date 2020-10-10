import API from "../api/service";
export default {
  state: {
    dietaryRecording: [],
    dietaryDeficiency: []
  },
  mutations: {
    dietaryRecording(state, dietaryRecording) {
      state.dietaryRecording = dietaryRecording;
    },
    dietaryDeficiency(state, dietaryDeficiency) {
      state.dietaryDeficiency = dietaryDeficiency;
    }
  },
  actions: {
    async fetchDietaryRecording({ commit }, data) {
      try {
        const response = await API.post("/diet", data);
        commit("dietaryRecording", response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async fecthDietaryDeficiency({ commit }, data) {
      try {
        const response = await API.post("/diet/day", data);
        commit("dietaryDeficiency", response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  getters: {
    sumDietaryIntake(state, getters, rootGetters) {
      const dietStandard = rootGetters.UserProfile.userProfile.diet_standard;
      if (state.dietaryDeficiency.length) {
        const dietaryDeficiency = state.dietaryDeficiency[0].deficiency;
        return Object.keys(dietaryDeficiency).reduce((obj, key) => {
          obj[key] = dietaryDeficiency[key] + dietStandard[key]; // 攝取目標 - 攝取不足 = 已攝取
          return obj;
        }, {});
      }
      return;
    }
  }
};
