import API from "../api/service";
import dayjs from "dayjs";

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
    resetDietaryDeficiency(state) {
      state.dietaryDeficiency = [];
    },
    initHistoryOfAMealRecording(state, { dietType, searchedDate }) {
      const historyOfAMealRecording = state.dietaryRecordingState.find(item => {
        return (
          item.diet_type === dietType &&
          item.created_at.split(" ")[0] === searchedDate
        );
      });

      if (historyOfAMealRecording) {
        delete historyOfAMealRecording.water;
        state.historyOfAMealRecording = historyOfAMealRecording;
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
        commit("resetDietaryDeficiency");
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
      return state.historyOfAMealRecording.id
        ? state.historyOfAMealRecording.id
        : "";
    },
    historyOfAMealRecording(state) {
      return state.historyOfAMealRecording;
    },
    datesHaveBeenRecorded_diet(state) {
      return state.dietaryRecordingState.map(item => new Date(item.created_at));
    },
    dietaryDeficiency(state, getters, rootState, rootGetters) {
      const standardOfDiet = { ...rootGetters.userProfile.diet_standard };
      delete standardOfDiet.water;

      const datasInSearchedPeriod = rootGetters.datesInSearchedPeriod.map(
        date => {
          const createdDate = getters.userProfile.created_at.split(" ")[0];
          if (
            dayjs(date).isBefore(createdDate) ||
            dayjs(date).isAfter(dayjs())
          ) {
            return {
              deficiency: {
                fruits: null,
                vegetables: null,
                grains: null,
                nuts: null,
                proteins: null,
                dairy: null
              }
            };
          } else {
            const deficiencyItem = state.dietaryDeficiency.find(
              item => item.date === date
            );
            return (
              deficiencyItem || {
                date,
                deficiency: standardOfDiet
              }
            );
          }
        }
      );

      return Object.keys(standardOfDiet).reduce((obj, key) => {
        obj[key] = datasInSearchedPeriod.map(item => item.deficiency[key]);
        return obj;
      }, {});
    }
  }
};
