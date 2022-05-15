import { useEffect, useState } from 'react';
import { Computer } from '../types';
import React, { MouseEvent } from 'react'
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from "websocket";

export default function useComputers() {
    const [computers, setComputers] = useState<Array<Computer>>([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        let mounted = true;
        console.log('useEffect');
        if (mounted) {
            const client = new W3CWebSocket('ws://192.168.13.5:8080');
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            };
            client.onmessage = (message:IMessageEvent) => {
                setComputers(JSON.parse(message.data.toString())
                .map((c: Computer) => { c.WakeUp = wakeUp; return c }))
            };
            fetch('http://192.168.13.5:3001/getComputers', { headers: { 'Access-Control-Allow-Origin': '*'}})
                .then(response => {
                    response.json()
                        .then(data => {
                            setComputers(data.map((c: Computer) => {c.WakeUp = wakeUp;return c}))
                            setLoad(false);
                        });
                })
                .catch(err => console.log(err));
        }
        return () => { mounted = false }
    }, [])
    const wakeUp = (c:Computer):Promise<Response> => {
        return fetch('http://192.168.13.5:3001/wakeUp', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            method:'POST',
            body: JSON.stringify({computer:[c]})
        });
    }
    return { computers, load }
}