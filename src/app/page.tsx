"use client"
import { ChangeEvent, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [roomid, setRoomid] = useState<string>("");
  return (
    <main className="flex flex-col items-center justify-between gap-y-6 p-24">
      <h1 className="text-3xl font-bold text-green-800">
        Next JS Video Calling App
        </h1>
      <input 
      type="text" 
      placeholder="Enter the Room ID" 
      className="px-4 py-2 outline-none
       bg-gray-100 rounded-lg"
       value={roomid}
       onChange={(e:ChangeEvent<HTMLInputElement>) =>setRoomid(e.target.value)}
       />

       <Link href={'/room/${roomid}'}>
       <button className="px-4 py-2 bg-green-600 text-white rounded-md">Join Room</button>
       </Link>
    </main>
  );
}
