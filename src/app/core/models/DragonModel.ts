export interface Dragons {
    "userDragonId": any,
    "isminted": boolean,
    "imageUrl": any,
    "dragonClass": any,
    "name": any,
    "type": any,
    "territory": territory,
    "skills": skills[],
    "itemAttached": itemAttached[]
}

export interface territory {

    "name": any,
    "imageUrl": any,
    "description": any,
    "territoryId": any

}

export interface skills {
    "id": any,
    "name": any,
    "description": any,
    "type": any,
    "impact": any,
    "DragonClassId": any
}

export interface itemAttached {
    "id": any,
    "equipped": any,
    "AttributeId": any,
    "UserId": any,
    "UserDragonId": any
}

export interface Product {
    "id"?: string;
    "code"?: string;
    "name"?: string;
    "description"?: string;
    "price"?: number;
    "quantity"?: number;
    "inventoryStatus"?: string;
    "category"?: string;
    "image"?: string;
    "rating"?: number;
}