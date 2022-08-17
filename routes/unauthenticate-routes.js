import express from 'express';
import userController from '../src/user/user-controller';

import userValidator from '../src/user/user-validator';
import schemaValidator from '../util/schema-validator';
const validate = schemaValidator.getEndPointValidator(userValidator);

const router = express();

router.post('/register', validate(userController.register));
router.post('/login', validate(userController.login));

export default router;
