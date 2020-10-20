export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function kebabCase(string) {
    return string.split(" ").join("-");
}
