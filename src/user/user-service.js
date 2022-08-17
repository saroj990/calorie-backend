import UserModel from './user-model';

const updateRole = async (id, role) => {
  return UserModel.findOneAndUpdate({ id }, { role }).exec();
};

const createUser = async (user) => {
  return UserModel.create(user);
};

const findById = async (id) => UserModel.findById(id).exec();

const findOneUser = async (filter) => UserModel.findOne(filter).exec();

export default {
  updateRole,
  createUser,
  findById,
  findOneUser,
};
