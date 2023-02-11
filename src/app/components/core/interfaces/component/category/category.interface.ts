export interface Category {
  title: string,
  items: CategoryItem[],
}

export interface CategoryItem {
  title: string,
  imageSrc: string,
  group: string,
  link: string,
  categoriesName: string,
  categoriesTitle: string,
}
