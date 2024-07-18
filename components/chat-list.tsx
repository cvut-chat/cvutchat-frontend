import {sampleRooms, sampleUsers} from "@/types/testData";
import {UserDisplay} from "@/components/user-display";
import {IRoom} from "@/types/IRoom";

export const ChatList = ({
    rooms
}: {
    rooms: Array<IRoom>
}) => {
    return (
        <div className={"h-full w-1/4 flex flex-col gap-5"}>
            {
                rooms.map((room) => {
                    const firstUser = room.users[0];
                    const foundUser = sampleUsers.find((user) => user._id === firstUser);
                    return foundUser ? (
                        <UserDisplay user={foundUser} />
                    ) : <></>
                })
            }
        </div>
    )
};