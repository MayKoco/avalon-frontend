'use client';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { API_URL } from '@/lib/api';
import { useSession } from '@/lib/store';

export function useGameSocket() {
  const { code, token, setSnapshot, setConnected, setError } = useSession();
  useEffect(() => {
    if (!code || !token) return;
    const socket = io(API_URL, { transports: ['websocket', 'polling'], reconnection: true });
    const sync = () => socket.emit('game:sync', { code, token }, (result:{success:boolean;data?:any;error?:{message:string}}) => result.success ? setSnapshot(result.data) : setError(result.error?.message ?? 'ซิงก์เกมไม่สำเร็จ'));
    socket.on('connect', () => { setConnected(true); sync(); });
    socket.on('disconnect', () => setConnected(false));
    socket.on('game:phase_changed', sync);
    return () => { socket.disconnect(); };
  }, [code, token, setConnected, setError, setSnapshot]);
}
