import {IUser} from "@/types/IUser";
import {Link} from "@nextui-org/link";
import {User} from "@nextui-org/user";
import {IRoom} from "@/types/IRoom";

export const UserDisplay = ({
    room,
    user,
}:{
    room: IRoom,
    user: IUser
}) => {
    return (
        <User
            className={"cursor-pointer hover:bg-gray-900 w-fit p-2"}
            name="Junior Garcia"
            description={`@${user.handle}`}
            avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4"
            }}
        />
    )
}