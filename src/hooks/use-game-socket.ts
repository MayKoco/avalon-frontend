'use client';
import { useEffect } from 'react';
import { io, type Socket } from 'socket.io-client';
import { API_URL } from '@/lib/api';
import { useSession } from '@/lib/store';
import type { ClientToServerEvents, ServerToClientEvents } from '@/lib/socket-contracts';

export function useGameSocket() {
  const { code, token, setSnapshot, setConnected, setError } = useSession();
  useEffect(() => {
    if (!code || !token) return;
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(API_URL, { transports: ['websocket', 'polling'], reconnection: true });
    const sync = () => socket.emit('game:sync', { code, token }, (result) => result.success ? setSnapshot(result.data) : setError(result.error.message ?? 'ซิงก์เกมไม่สำเร็จ'));
    socket.on('connect', () => { setConnected(true); sync(); });
    socket.on('disconnect', () => setConnected(false));
    socket.on('game:phase_changed', sync);
    socket.on('room:presence_changed', sync);
    socket.on('room:updated', sync);
    return () => { socket.disconnect(); };
  }, [code, token, setConnected, setError, setSnapshot]);
}
