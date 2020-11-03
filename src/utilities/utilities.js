import dayjs from "dayjs";

export default {
  isSearchedDateExpired(date) {
    const today = dayjs().format("YYYY-MM-DD");
    const searchedDate = date || today;

    return !(searchedDate === today);
  }
};
