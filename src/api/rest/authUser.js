import { makeRequest } from '../requests';

export const getAuthUser = () => {
  return makeRequest({
    url: '/user'
  })
}
