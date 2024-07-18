export declare type IRoom = {
    users: Array<string>;
    name?: string;
} & {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
};