export declare type IUser = {
   handle: string;
   email: string;
} & {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
};