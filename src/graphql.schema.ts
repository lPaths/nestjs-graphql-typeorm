export class CreateCatInput {
    name?: string;
    age?: number;
}

export class Cat {
    _id?: string;
    name?: string;
    age?: number;
}

export abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}

export abstract class IQuery {
    abstract getCats(): Cat[] | Promise<Cat[]>;

    abstract cat(_id: string): Cat | Promise<Cat>;

    abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}