export default function(object) {
  return(Object.keys(object).reduce((classes, key) => {
    return(((object[key]) ? classes + " " + key : classes).trim());
  }, ""));
}