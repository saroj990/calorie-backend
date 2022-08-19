import { celebrate } from 'celebrate';
import wrap from './async-wrapper';

const JOI_OPTIONS = {
  abortEarly: false,
  escapeHtml: true,
  stripUnknown: true,
};

const validate = (schema, options = JOI_OPTIONS) => celebrate(schema, options);

export default {
  getEndPointValidator(validator) {
    const validateEndpoint = (endpoint) => {
      debugger;
      const endpointValidator = validator[endpoint.name];
      return [
        ...(endpointValidator ? [validate(endpointValidator)] : []),
        wrap(endpoint),
      ];
    };
    return validateEndpoint;
  },
};
