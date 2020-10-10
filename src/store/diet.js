import API from "../api/service";
export default {
  state: {
    dietaryRecordingState: [],
    dietaryDeficiency: []
  },
  mutations: {
    dietaryRecording(state, dietaryRecordingState) {
      state.dietaryRecordingState = dietaryRecordingState;
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
    async fetchDietaryDeficiency({ commit }, data) {
      try {
        const response = await API.post("/diet/day", data);
        commit("dietaryDeficiency", response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  getters: {
    sumDietaryIntake(state, getters, rootState) {
      const dietStandard = rootState.UserProfile.userProfile.diet_standard;
      if (state.dietaryDeficiency.length) {
        const dietaryDeficiency = state.dietaryDeficiency[0].deficiency;
        return Object.keys(dietaryDeficiency).reduce((obj, key) => {
          obj[key] = dietStandard[key] - dietaryDeficiency[key]; // 攝取目標 - 攝取不足 = 已攝取
          return obj;
        }, {});
      }
    },
    dietaryRecordingState(state, getters, rootState, rootGetters) {
      let dietSet = new Set();
      if (state.dietaryRecordingState.length) {
        state.dietaryRecordingState.map(item => {
          dietSet.add(item.diet_type);
        });
      }
      return {
        water: !!rootGetters.sumWaterIntakeOneDay,
        breakfast: dietSet.has("breakfast"),
        lunch: dietSet.has("lunch"),
        snack: dietSet.has("snack"),
        dinner: dietSet.has("dinner"),
        supper: dietSet.has("supper")
      };
    }
  }
};
