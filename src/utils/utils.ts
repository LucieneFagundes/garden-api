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