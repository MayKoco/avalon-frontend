'use client';
import { create } from 'zustand';
import type { Snapshot } from './types';

interface SessionState {
  code: string; token: string; snapshot: Snapshot | null; connected: boolean; error: string | null;
  setSession: (code:string, token:string) => void; setSnapshot:(snapshot:Snapshot)=>void; setConnected:(connected:boolean)=>void; setError:(error:string|null)=>void; clear:()=>void;
}

export const useSession = create<SessionState>((set) => ({
  code: '',
  token: '',
  snapshot: null, connected: false, error: null,
  setSession: (code, token) => { localStorage.setItem('avalon:code', code); localStorage.setItem('avalon:token', token); set({ code, token }); },
  setSnapshot: (snapshot) => set({ snapshot, error: null }), setConnected: (connected) => set({ connected }), setError: (error) => set({ error }),
  clear: () => { localStorage.removeItem('avalon:code'); localStorage.removeItem('avalon:token'); set({ code:'',token:'',snapshot:null,error:null }); },
}));
