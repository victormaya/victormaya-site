
export default function myAge() {
  const yearBirth = new Date('1997','1', '22')
  return ~~((Date.now() - yearBirth) / (31557600000));
}