import {IMessage} from "@/types/IMessages";
import {IRoom} from "@/types/IRoom";

export const Chat = ({
    room,
    messages
}: {
    room: IRoom;
    messages: Array<IMessage>;
}) => {
    return (
        <div className={"w-full h-full p-2 flex flex-col gap-5"}>
            <div className={"p-4"}>
                Chat with
            </div>
            <div className={"flex flex-col gap-5"}>

            </div>
        </div>
    )
}