'use client';
import { useEffect, useMemo, useState } from 'react';
import type { Timer as TimerType } from '@/lib/types';

export function PhaseTimer({ timer, serverOffset = 0 }: { timer: TimerType; serverOffset?: number }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const id = window.setInterval(() => setNow(Date.now()), 250); return () => clearInterval(id); }, []);
  const remaining = timer.phaseDeadlineAt ? Math.max(0, timer.phaseDeadlineAt - (now + serverOffset)) : timer.remainingDuration ?? 0;
  const total = Math.max(1, timer.remainingDuration ?? remaining);
  const seconds = Math.ceil(remaining / 1000); const progress = Math.min(1, remaining / total);
  const color = seconds <= 10 ? '#B83E51' : seconds <= 30 ? '#E38B45' : '#D6AD67';
  const style = useMemo(() => ({ background: `conic-gradient(${color} ${progress * 360}deg, rgba(255,255,255,.08) 0deg)` }), [color, progress]);
  if (timer.status === 'DISABLED') return <div className="timer disabled"><strong>ไม่จำกัดเวลา</strong><span>รอการดำเนินการ</span></div>;
  return <div className={`timer ${seconds <= 10 ? 'urgent' : ''}`} style={style} aria-live="polite">
    <div className="timer-core"><strong>{timer.status === 'PAUSED' ? 'พัก' : seconds === 0 ? 'หมดเวลา' : `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`}</strong><span>{timer.status === 'PAUSED' ? 'หยุดเวลาแล้ว' : 'เวลาคงเหลือ'}</span></div>
  </div>;
}
