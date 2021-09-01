import moment from "moment";
//모멘트 객체 날짜 계산

export function enumerateDaysBetweenDates(startDate, endDate) {
  startDate = moment(startDate);
  endDate = moment(endDate);
  var now = startDate,
    dates = [];
  while (now.isBefore(endDate) || now.isSame(endDate)) {
    dates.push(now.format("YYYY-MM-DD"));
    now.add(1, "days");
  }
  return dates;
}
