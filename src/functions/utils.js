// export function sortObjectByKey(obj) {
//     return Object.keys(obj).sort().reduce((acc, key) => {
//         acc[key] = obj[key]
//         return acc
//     }, {})
// }
// NOTE: remove if not used

export function sortObjectByValue(obj) {
    const restTags = obj.splice(1)
    // eslint-disable-next-line no-nested-ternary
    restTags.sort((a, b) => (b.count > a.count ? 1 : a.count > b.count ? -1 : 0))
    return [...obj, ...restTags]
}
