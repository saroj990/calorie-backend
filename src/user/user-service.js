import UserModel from './user-model';

const updateRole = async (id, role) => {
  return UserModel.findOneAndUpdate({ id }, { role });
};

const createUser = async (user) => {
  return UserModel.create(user);
};

const findById = async (id) => UserModel.findById(id);

const findOneUser = async (filter) => UserModel.findOne(filter);

export default {
  updateRole,
  createUser,
  findById,
  findOneUser,
};
