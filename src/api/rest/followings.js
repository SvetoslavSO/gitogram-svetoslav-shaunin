import { makeRequest } from '../requests'

export const follows = async () => {
  return makeRequest({
    url: '/user/following'
  })
}

export const unfollow = (payload) => makeRequest({
  url: `/user/following/${payload}`,
  method: 'delete'
});

export const follow = (payload) => makeRequest({
  url: `/user/following/${payload}`,
  method: 'put'
});