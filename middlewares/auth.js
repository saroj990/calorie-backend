import jwt from '../util/jwt';
import { isEmpty } from 'lodash';
import { Error } from '../util/constants';

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = await jwt.verifyToken(token);

    if (isEmpty(user)) {
      return next(new Error(Error.TOKEN_INVALID));
    }
    req.user = user;
    req.isLoggedIn = true;
    next();
  } catch {
    return res.status(401).json({
      error: Error.INVALID_REQUEST,
    });
  }
};
