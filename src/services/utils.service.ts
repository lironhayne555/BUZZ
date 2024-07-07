export function getIconPath(
  folder: string,
  icon: string,
  type?: string
): string {
  return new URL(
    `../assets/icons/${folder}/${icon}.${type || "svg"}`,
    import.meta.url
  ).href;
}

export function getImgPath(folder: string, img: string, type?: string): string {
  return new URL(
    `../assets/images/${folder}/${img}.${type || "svg"}`,
    import.meta.url
  ).href;
}

export function getTime(date: Date) {
  const hour = `${date.getHours().toString().padStart(2, "0")}`;
  const min = `${date.getMinutes().toString().padStart(2, "0")}`;

  return `${hour}:${min}`;
}

export function getDate(date: Date) {
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
