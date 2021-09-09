const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const time = date.getTime();

const _id = `${day}${month}${year}-${time}`;

export { _id };
