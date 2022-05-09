import * as domain from '../../auth_config.json';
import * as clientId from '../../auth_config.json'

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  },
};
