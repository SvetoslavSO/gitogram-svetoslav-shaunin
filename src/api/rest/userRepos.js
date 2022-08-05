import { makeRequest } from '../requests'

export const repos = async () => {
  return makeRequest({
    url: '/user/repos'
  })
}