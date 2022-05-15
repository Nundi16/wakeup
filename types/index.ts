import React, { MouseEvent } from 'react'

export interface Computer {
    Ip:string,
    Mac:string,
    Name:string,
    IsOn:string,
    WakeUp: (c: Computer) => Promise<Response>
}