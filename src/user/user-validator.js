import { Joi } from 'celebrate';

const userParams = {
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  firstName: Joi.string().required(),
  password: Joi.string().required(),
};

export default {
  register: {
    body: Joi.object().keys({
      ...userParams,
    }),
  },
  login: {
    body: Joi.object().keys({
      ...userParams,
    }),
  },
};
