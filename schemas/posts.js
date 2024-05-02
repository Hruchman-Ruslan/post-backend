import Joi from "joi";

const postAddSchema = Joi.object({
  body: Joi.string().required(),
  author: Joi.string().required(),
});

export default { postAddSchema };
