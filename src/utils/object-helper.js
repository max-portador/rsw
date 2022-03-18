export const updateObjectInArray = (items, itemId, propertyName, newObjProps) => {
    return items.map(item => {
        if (item[propertyName] === itemId) {
            return {...item, ...newObjProps};
        }
        return item;
    })
}
