export const GetKeysFromObject = <T extends object>(obj: T, exclude: Array<keyof T> = []): Array<keyof T> => {
  return (Object.keys(obj) as Array<keyof T>).filter(key => !exclude.includes(key))
}
