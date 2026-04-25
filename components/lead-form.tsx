"use client";

import { FormEvent, useState } from "react";

const spendOptions = ["<$25K", "$25K-$100K", "$100K-$500K", "$500K+"];

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("sending");
    // Static preview build: form is a visual demo, not wired to a backend yet.
    void formData;
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
  }

  return (
    <form onSubmit={submit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          className="focus-ring rounded border border-line bg-chalk/5 px-4 py-3 text-sm text-chalk placeholder:text-ash"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="focus-ring rounded border border-line bg-chalk/5 px-4 py-3 text-sm text-chalk placeholder:text-ash"
          name="brand"
          placeholder="Brand"
          required
        />
      </div>
      <select
        className="focus-ring rounded border border-line bg-coal px-4 py-3 text-sm text-chalk"
        name="monthlySpend"
        defaultValue=""
        required
      >
        <option value="" disabled>
          Monthly ad spend
        </option>
        {spendOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <textarea
        className="focus-ring min-h-28 rounded border border-line bg-chalk/5 px-4 py-3 text-sm text-chalk placeholder:text-ash"
        name="message"
        placeholder="What are you trying to unlock?"
      />
      <button
        className="focus-ring rounded bg-acid px-5 py-3 text-sm font-bold text-ink transition hover:bg-chalk disabled:cursor-wait disabled:opacity-70"
        disabled={status === "sending" || status === "sent"}
        type="submit"
      >
        {status === "sent" ? "Request received" : status === "sending" ? "Sending" : "Send request"}
      </button>
    </form>
  );
}
