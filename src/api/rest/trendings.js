import { makeRequest } from '../requests'

const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams();
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  const weekMS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekMS)
  let date = weekAgo.getDate() + 1
  let month = weekAgo.getMonth() + 1
  let year = weekAgo.getFullYear()
  if (monthLength[month] !== date) {
    date = 1
    month = month + 1 
  }
  if (month > 12) {
    month = 1
    year = year + 1
  }
  const formattedDate = [
    year,
    addStartingZero(month),
    addStartingZero(date)
  ].join('-')
  params.append('order', 'desc');
  params.append('sort', 'stars');
  params.append('per_page', 10);
  params.append('q', `language:${lang} created:>${formattedDate}`)
  console.log(formattedDate)
  return makeRequest({
    url: `/search/repositories?${params}`
  })
}