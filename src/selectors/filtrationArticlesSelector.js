import {createSelector} from 'reselect'
import {mapToArr} from '../helpers/helpersJs'

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtrationArticlesSelector = createSelector(articlesGetter,filtersGetter,(articles,filters) => {
  const {selection, dataRange: {from, to}} = filters


  return mapToArr(articles).filter(elem => {
    let stateDate = Date.parse(elem.date)

    // console.log("!selection.length",!selection.length)
    // console.log("selection.includes(elem.id)",selection.includes(elem.id))
    // console.log("!from",!from)
    // console.log("!to",!to)
    // console.log("(stateDate > from && stateDate < to)",(stateDate > from && stateDate < to))
    return (!selection.length || selection.includes(elem.id)) &&
      (!from || !to || (stateDate > from && stateDate < to))
  })
  // console.log("filterArctiles in connect",filterArticles)
})