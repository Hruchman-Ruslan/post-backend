import Joi from "joi";

const postAddSchema = Joi.object({
  body: Joi.string().required().messages({
    "any.required": "Body is required",
    "string.empty": "Body cannot be empty",
  }),
  author: Joi.string().required().messages({
    "any.required": "Author is required",
    "string.empty": "Author cannot be empty",
  }),
});

export default { postAddSchema };
