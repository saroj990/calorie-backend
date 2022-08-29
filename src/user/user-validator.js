import { Joi } from 'celebrate';

const loginSchema = {
  email: Joi.string().required(),
  password: Joi.string().required(),
};

const registerSchema = {
  ...loginSchema,
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
};

export default {
  register: {
    body: Joi.object().keys({
      ...registerSchema,
    }),
  },
  login: {
    body: Joi.object().keys({
      ...loginSchema,
    }),
  },
};
