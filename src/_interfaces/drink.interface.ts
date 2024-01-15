export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}
export interface DrinkModel {
        _id: string;
        categories: string[];
        tags: string[];
        title: string;
        price: number;
        oldPrice: number;
        description: string;
        characterstics: ProductCharacteristic[];
        createdAt: Date;
        updatedAt: Date;
        __v: number;
        image: string;
        initialRating: number;
        reviews: any[];
        reviewCount: number;
        reviewAvg?: any;
        advantages: string;
    }