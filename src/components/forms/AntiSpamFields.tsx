"use client";

import { useState } from "react";

/**
 * Shared anti-spam fields for all public forms:
 * - `company_website` is a honeypot input, hidden off-screen (not display:none,
 *   which some bots detect) — only bots that auto-fill every field will touch it.
 * - `startedAt` records when the form mounted, so the server action can reject
 *   near-instant submissions.
 */
export function AntiSpamFields() {
  const [startedAt] = useState(() => Date.now().toString());

  return (
    <>
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="company_website">Leave this field empty</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />
    </>
  );
}
