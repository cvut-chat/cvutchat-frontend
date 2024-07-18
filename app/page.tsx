'use client';

import {sampleRooms, sampleUsers} from "@/types/testData";
import {UserDisplay} from "@/components/user-display";
import {ChatList} from "@/components/chat-list";

export default function Home() {
  return (
    <div className={"w-full h-full flex flex-row gap-2"}>
        <ChatList rooms={sampleRooms} />
        <div className={"h-full w-3/4 flex flex-col gap-2"}>
        </div>
    </div>
  );
}
