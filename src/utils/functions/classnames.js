export default function classnames(...classes) {
  const validClasses = classes.filter((c) => Boolean(c));
  const joinesClasses = validClasses.join(" ");
  return joinesClasses;
}
