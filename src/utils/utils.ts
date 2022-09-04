export function empty(data: any) {
  switch (data) {
    case "":
    case 0:
    case "0":
    case null:
    case false:
    case undefined:
      return null;
    default:
      return data;
  }
}

export function setNextEvent(
  period: string,
  period_qd: number,
  initial_event: Date
) {
  var data = new Date(initial_event)
  var today = new Date();

  if(data < today) {
    data = today;
  }

  switch (period) {
    case "dia":
      data.setDate(data.getDate() + 1 * period_qd);
      break;
    case "semana":
      data.setDate(data.getDate() + 7 * period_qd);
      break;
    case "mes":
      data.setDate(data.getDate() + 30 * period_qd);
      break;
  }
  return data;
}
