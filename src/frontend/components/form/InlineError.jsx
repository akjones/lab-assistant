import React from 'react';
import { ApplictionFormValidationErrors as Errors } from '../../config/strings.js';

export default ({ errorFor }) => (
  <span className="invalid">
  	<span className="errors">
      { Errors[errorFor] ? Errors[errorFor].message : '' }
  	</span>
  </span>
)
