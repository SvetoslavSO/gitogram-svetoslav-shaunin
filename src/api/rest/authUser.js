import { makeRequest } from '../requests';
import env from '../../../env'

export const getAuthUser = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getCode = async () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize';
  const params = new URLSearchParams();
  params.append('client_id', env.clientId);
  params.append('scope', 'repo, user');
  window.location.href = `${githubAuthApi}?${params}`;
}

export const getToken = async () => {
  const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json();
        localStorage.setItem('token', token);
      } catch (e) {
        console.log(e)
      }
    }
}