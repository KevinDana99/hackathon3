const formetDayToApi = (date: string | null) => {
  const formatted = date && date?.split("T")[0].replace(/-/g, "");
  return formatted;
};

export default formetDayToApi;
