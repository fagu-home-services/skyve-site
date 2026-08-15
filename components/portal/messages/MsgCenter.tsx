"use client";

import { useState } from "react";
import { ChevronDown, Phone, Video, Info, Paperclip, Send, Heart, CheckCheck } from "lucide-react";
import { Icon } from "@/components/shared/Icon";
import { Photo } from "@/components/shared/Photo";
import { AvatarPlaceholder } from "@/components/shared/AvatarPlaceholder";
import { MSG_TABS, MSG_CONVERSATIONS, MSG_THREAD } from "@/lib/portal-messages-data";

export function MsgCenter() {
  const [tab, setTab] = useState("Conversations");

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-mist">
        {MSG_TABS.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setTab(t.label)}
            className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t.label ? "border-ridge text-ridge" : "border-transparent text-ink-50 hover:text-horizon"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-0 overflow-hidden rounded-2xl border border-mist bg-clear shadow-card lg:grid-cols-[300px_1fr]">
        {/* Conversation list */}
        <div className="border-b border-mist lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-sm font-bold text-horizon">Conversations</h2>
            <span className="inline-flex items-center gap-1 rounded-lg border border-mist px-2.5 py-1 text-xs font-semibold text-ink-70">
              All <ChevronDown className="h-3 w-3" />
            </span>
          </div>
          <ul className="max-h-[560px] overflow-y-auto">
            {MSG_CONVERSATIONS.map((c) => (
              <li key={c.name}>
                <button type="button" className={`flex w-full gap-3 border-l-2 px-4 py-3 text-left transition-colors ${c.active ? "border-ridge bg-sky-soft/40" : "border-transparent hover:bg-mist-soft/40"}`}>
                  {c.initials ? (
                    <AvatarPlaceholder initials={c.initials} className="h-9 w-9 shrink-0 rounded-full" />
                  ) : (
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.iconBg} text-clear`}>
                      <Icon name={c.icon ?? "users"} className="h-4 w-4" />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-horizon">{c.name}</p>
                      <span className="shrink-0 text-[10px] text-ink-50">{c.time}</span>
                    </div>
                    <p className="text-[11px] text-ink-50">{c.role}</p>
                    <p className="mt-0.5 truncate text-[11px] text-ink-70">{c.preview}</p>
                  </div>
                  {c.unread && (
                    <span className="mt-1 flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-ridge px-1.5 text-[10px] font-bold text-clear">{c.unread}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4 text-center">
            <button type="button" className="text-xs font-semibold text-ridge hover:text-accent">Load older conversations ↓</button>
          </div>
        </div>

        {/* Chat thread */}
        <div className="flex min-w-0 flex-col">
          {/* Thread header */}
          <div className="flex items-center justify-between border-b border-mist p-4">
            <div className="flex items-center gap-3">
              <AvatarPlaceholder initials={MSG_THREAD.initials} className="h-9 w-9 rounded-full" />
              <div>
                <p className="text-sm font-bold text-horizon">{MSG_THREAD.name}</p>
                <p className="text-[11px] text-ink-50">{MSG_THREAD.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-ridge">
              <button type="button" aria-label="Call" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-mist-soft/60"><Phone className="h-4 w-4" /></button>
              <button type="button" aria-label="Video" className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-mist-soft/60"><Video className="h-4 w-4" /></button>
              <button type="button" aria-label="Info" className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-50 hover:bg-mist-soft/60"><Info className="h-4 w-4" /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {MSG_THREAD.groups.map((g) => (
              <div key={g.date} className="space-y-3">
                <p className="text-center text-[11px] text-ink-50">{g.date}</p>
                {g.messages.map((m, i) => (
                  <div key={i} className={`flex ${m.sent ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] ${m.sent ? "items-end" : "items-start"}`}>
                      {m.photos ? (
                        <div className="grid grid-cols-3 gap-1.5">
                          <Photo src="" seed="msg1" alt="" className="aspect-square w-20 rounded-lg" />
                          <Photo src="" seed="msg2" alt="" className="aspect-square w-20 rounded-lg" />
                          <div className="relative">
                            <Photo src="" seed="msg3" alt="" className="aspect-square w-20 rounded-lg" />
                            <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-horizon-deep/60 text-sm font-bold text-clear">+{m.photos}</span>
                          </div>
                        </div>
                      ) : (
                        <div className={`rounded-2xl px-3.5 py-2.5 text-sm ${m.sent ? "bg-sky-soft/70 text-ink-90" : "bg-mist-soft/70 text-ink-90"}`}>
                          {m.text}
                        </div>
                      )}
                      <div className={`mt-1 flex items-center gap-1.5 text-[10px] text-ink-50 ${m.sent ? "justify-end" : "justify-start"}`}>
                        <span>{m.time}</span>
                        {m.read && <CheckCheck className="h-3 w-3 text-ridge" />}
                        {m.reaction && (
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-clear px-1.5 py-0.5 shadow-card">
                            <Heart className="h-2.5 w-2.5 fill-accent text-accent" /> 1
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-mist p-3">
            <div className="flex items-center gap-2 rounded-xl border border-mist px-3 py-2">
              <button type="button" aria-label="Attach" className="text-ink-50 hover:text-ridge"><Paperclip className="h-4 w-4" /></button>
              <input type="text" placeholder="Type your message..." className="min-w-0 flex-1 bg-transparent text-sm text-ink-90 outline-none placeholder:text-ink-50" />
              <button type="button" aria-label="Send" className="flex h-8 w-8 items-center justify-center rounded-lg bg-ridge text-clear hover:bg-ridge-bright"><Send className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
