import * as domain from '../../auth_config.json';
import * as clientId from '../../auth_config.json'

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};
