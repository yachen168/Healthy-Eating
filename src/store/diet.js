import API from "../api/service";

export default {
  state: {
    dietaryRecordingState: [],
    dietaryDeficiency: [],
    historyOfAMealRecording: {}
  },
  mutations: {
    dietaryRecordingState(state, dietaryRecordingState) {
      state.dietaryRecordingState = dietaryRecordingState;
    },
    dietaryDeficiency(state, dietaryDeficiency) {
      state.dietaryDeficiency = dietaryDeficiency;
    },
    initHistoryOfAMealRecording(state, dietType) {
      const historyOfAMealRecording = state.dietaryRecordingState.filter(
        item => item.diet_type === dietType
      );

      const keys = [
        "fruits",
        "vegetables",
        "grains",
        "nuts",
        "proteins",
        "dairy"
      ];

      if (historyOfAMealRecording.length) {
        return (state.historyOfAMealRecording = keys.reduce((obj, key) => {
          obj[key] = historyOfAMealRecording[0][key];
          return obj;
        }, {}));
      } else {
        state.historyOfAMealRecording = {
          fruits: 0,
          vegetables: 0,
          grains: 0,
          nuts: 0,
          proteins: 0,
          dairy: 0
        };
      }
    },
    updateHistoryOfAMealRecording(state, data) {
      state.historyOfAMealRecording = data;
    }
  },
  actions: {
    async fetchDietaryRecording({ commit }, data) {
      try {
        const response = await API.post("/diet", data);
        commit("dietaryRecordingState", response.data.data);
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
    },
    async addNewDiet({}, data) {
      try {
        await API.post("/userDiet", data);
      } catch (error) {
        console.log(error.response);
      }
    },
    async updateDiet({}, { diet_id, data }) {
      try {
        await API.post(`/userDiet/${diet_id}`, data);
      } catch (error) {
        console.log(error);
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

      state.dietaryRecordingState.map(item => {
        dietSet.add(item.diet_type);
      });

      return {
        water: !!rootGetters.sumWaterIntakeOneDay,
        breakfast: dietSet.has("breakfast"),
        lunch: dietSet.has("lunch"),
        dessert: dietSet.has("dessert"),
        dinner: dietSet.has("dinner"),
        supper: dietSet.has("supper")
      };
    },
    historyOfAMealRecordingID(state) {
      return state.historyOfAMealRecording.length
        ? state.historyOfAMealRecording[0].id
        : "";
    },
    historyOfAMealRecording(state) {
      return state.historyOfAMealRecording;
    },
    datesHaveBeenRecorded(state) {
      return {
        dates: state.dietaryRecordingState.map(
          item => new Date(item.updated_at)
        )
      };
    }
  }
};
