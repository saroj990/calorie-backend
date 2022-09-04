import UserService from './user-service';
import { isEmpty } from 'lodash';
import { API_ERRORS, ROLES } from '../../util/constants';
import bcrypt from 'bcryptjs';
import jwt from '../../util/jwt';

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await UserService.findOneUser({ email });

    if (!isEmpty(user)) {
      return res.status(409).send(API_ERRORS.USER_EXISTS);
    }

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const created = await UserService.createUser({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    return res.status(200).json(created);
  } catch (err) {
    console.log('Error caught: ', err);
    return res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    console.log('login was called');
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error(API_ERRORS.INVALID_INPUTS);
    }

    const user = await UserService.findOneUser({ email });

    if (
      isEmpty(user) ||
      (user.password && !bcrypt.compareSync(password, user.password))
    ) {
      return res.status(500).send(API_ERRORS.INVALID_CREDENTIALS);
    }

    const token = await jwt.signToken({
      email: user.email,
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    res.cookie('token', token, { maxAge: 24 * 60 * 60 });
    res
      .json({
        token,
        email: user.email,
        fullName: `${user.firstName} ${user.lastName}`,
      })
      .end();
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const getUser = async (req, res) => {
  const id = req?.params?.id || req?.body?.id;
  try {
    if (!id) {
      throw new Error(API_ERRORS.INVALID_INPUTS);
    }
    const user = await UserService.findById(id);
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {};

const updateRole = async (req, res) => {
  try {
    const { role } = req.body;
    const roles = Object.values(ROLES);

    if (!roles || !roles.includes(role)) {
      throw new Error(API_ERRORS.INVALID_ROLE);
    }
    await User;
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

export default {
  register,
  login,
  getUser,
  deleteUser,
  updateRole,
};
