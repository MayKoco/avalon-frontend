import type { Snapshot } from './types';

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}/api${path}`, { ...init, headers: { 'content-type': 'application/json', ...init?.headers } });
  const envelope = await response.json();
  if (!response.ok || envelope?.success === false) throw new Error(envelope?.error?.message ?? envelope?.message ?? 'เกิดข้อผิดพลาด');
  return (envelope?.success === true ? envelope.data : envelope) as T;
}

export const api = {
  create: (nickname: string) => request<{code:string;playerId:string;rejoinToken:string}>('/rooms', { method: 'POST', body: JSON.stringify({ nickname }) }),
  join: (code: string, nickname: string) => request<{code:string;playerId:string;rejoinToken:string}>('/rooms/join', { method: 'POST', body: JSON.stringify({ code, nickname }) }),
  lobby: (code:string, token:string) => request<any>(`/rooms/${code}?token=${encodeURIComponent(token)}`),
  action: (code:string, path:string, token:string, payload:Record<string,unknown>={}) => request<Snapshot>(`/rooms/${code}/${path}`, { method: 'POST', body: JSON.stringify({ token, ...payload }) }),
};
