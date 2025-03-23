import { Restaurant } from "./restaurant";

export interface Menu {
    id: number;
    name: string;
    price: number;
    //restaurantId?: number;
    restaurant?: Restaurant;
}
