/**
 * Incrementa um zero caso o valor seja menor que 10
 * 
 * @param {number} partDate mes ou dia da data
 * @example
 * fixDate(5)
 */

const fixDate = partDate => partDate < 10 ? `0${partDate}` : partDate

/**
 * Formata a data recebida da API para DD/MM/YYYY
 * 
 * @param {string} created_at data retornada pela API
 * @example
 * formatDate('2020-01-24T11:03:50.737Z')
 */

const formatDate = created_at => {
  const date = new Date(created_at)
  const YYYY = date.getFullYear()
  const DD = date.getDate()
  const MM = date.getMonth() + 1

  return `${fixDate(DD)}/${fixDate(MM)}/${YYYY}`
}

export default formatDate