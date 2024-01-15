export interface PageItem {
    name: string;
    categorylink: string;
    description: string;
    category: string;
}
export interface MenuItem {
    _id: {
        secondCategory: string
    };
    pages: PageItem[];
}