import dayjs from "dayjs";

export default {
  isSearchedDateExpired(date) {
    const today = dayjs().format("YYYY-MM-DD");
    const searchedDate = date || today;
    const yesterday = dayjs()
      .subtract(1, "day")
      .format("YYYY-MM-DD");

    return !(searchedDate === today || searchedDate === yesterday);
  }
};
