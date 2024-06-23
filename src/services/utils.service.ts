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
