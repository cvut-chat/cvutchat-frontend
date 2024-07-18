export declare type IMessage = {
    from: string;
    room: string;
    content: string;
} & {
    _id: string;
    createdAt?: string;
    updatedAt?: string;
};