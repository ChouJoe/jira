/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-30 16:15:22
 * @LastEditors: Joe
 * @LastEditTime: 2022-05-30 16:38:20
 */
export const isFalsy = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  let new_obj = { ...object };
  Object.keys(new_obj).forEach((key) => {
    let value = new_obj[key];
    if (isFalsy(value)) {
      delete new_obj[key];
    }
  });
  return new_obj;
};
