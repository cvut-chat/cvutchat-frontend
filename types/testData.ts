import {IUser} from "@/types/IUser";
import {IRoom} from "@/types/IRoom";
import {IMessage} from "@/types/IMessages";

export const sampleUsers: Array<IUser> = [
    {
        _id: "1",
        handle: 'Alice',
        email: 'alice@hello.fr',
    },
    {
        _id: "2",
        handle: 'caca',
        email: 'caca@hello.fr',
    },
    {
        _id: "3",
        handle: 'Bob',
        email: '',
    },
    {
        _id: "4",
        handle: 'Charlie',
        email: '',
    }
]

export const sampleRooms: Array<IRoom> = [
    {
        _id: "1",
        users: ["1", "2"],
    },
    {
        _id: "2",
        users: ["1"],
    },
    {
        _id: "3",
        users: ["2"],
    },
];

export const sampleMessages: Array<IMessage> = [
    {
        _id: "1",
        from: "1",
        room: "1",
        content: "Hello",
    },
    {
        _id: "2",
        from: "2",
        room: "1",
        content: "Hi",
    },

]

export const currentUser = sampleUsers[0];