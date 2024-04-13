export function sanitizeEntry(obj: any) {
    Object.keys(obj).forEach((key) => key.startsWith('$ACTION_ID_') && delete obj[key])
    delete obj.file
    delete obj['price-regular']
    delete obj['price-discount']
}
