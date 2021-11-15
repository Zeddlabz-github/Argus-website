const generateDocumentId = (num, size) => {
    let s = num + ''
    while (s.length < size) s = '0' + s
    return s
}
module.exports = { generateDocumentId }
