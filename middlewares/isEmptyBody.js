import { HttpError } from "../helpers/index.js";

const isEmptyBody = ({ body }, _, next) => {
  const { length } = Object.keys(body);

  if (!length) {
    next(HttpError(400, "fields must be required"));
  }

  next();
};

export default isEmptyBody;
