export const isLeap = (year) => {
  if(!(year%100)&&(year%400)||!(year%200)&&(year%400)) return false;
  if(!(year%400)||!(year%4)) return true;
  else return false;
};
