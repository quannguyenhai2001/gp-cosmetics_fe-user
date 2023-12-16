export default function GetCategoryList(categoryList) {
    let listFatherCategories = [];
    categoryList.forEach((category, index) => {
        if (!+category.father_category_id) {
            listFatherCategories.push(category)
        }
    })
    const newCategoryList = listFatherCategories.map(value => {
        let childCategoryList = []
        for (let i = 0; i < categoryList.length; i++) {
            if (categoryList[i].father_category_id === value.id) {
                childCategoryList.push(categoryList[i])
            }
        }
        return { id: value.id, name: value.name, childCategoryList: childCategoryList }
    })
    return newCategoryList;

}