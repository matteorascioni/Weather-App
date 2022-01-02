export const classNames = (classes) => {
    return Object.keys(classes)
        .filter((c) => {
            return classes[c];
        })
        .join(' ');
};