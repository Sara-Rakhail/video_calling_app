"use client";
import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants';

export default function room({params}:{params:{roomid:string}}) {
  const roomID : string = params.roomid
  const myMeeting = async (element: any) => {
    // generate Kit Token
     const appID : number = Number(process.env.NEXT_PUBLIC_APPID);
     const serverSecret : string = process.env.NEXT_PUBLIC_SERVER_SECRETE as string;
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      roomID, 
       Date.now().toString(),  
       "Enter Your Name Here",
      );

   
    // Create instance object from Kit Token.
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     // start the call
     zp.joinRoom({
       container: element,
       sharedLinks: [
         {
           name: 'Personal link',
           url:
            window.location.protocol + '//' + 
            window.location.host + window.location.pathname +
             '?roomID=' +
             roomID,
         },
       ],
       scenario: {
         mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
       },
     });

   
 };



  return (
    <div
    ref ={myMeeting}
    className='w-[100vw] h-[100vh]'
    >Room Page
    </div>
  )
}
