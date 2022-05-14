import {useEffect,useState} from 'react';
import { Computer } from '../types';

export default function useComputers()
{
    const [computers, setComputers] = useState<Array<Computer>>([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        let mounted = true;
        console.log('useEffect');
        if (mounted) {
            fetch('http://192.168.13.5:3000/getComputers')
                .then(response => {
                    response.json()
                        .then(data => {
                            setComputers(data)
                            setLoad(false);
                        });
                })
                .catch(err => console.log(err));
        }
        return () => { mounted = false }
    }, [])

    return {computers,load}
}