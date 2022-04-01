export default function YearsExperience() {
  const yearBirth = new Date('2020','0', '1')
  return ~~((Date.now() - yearBirth) / (31557600000));
}