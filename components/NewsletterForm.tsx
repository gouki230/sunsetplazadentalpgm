'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('company')) {
      setStatus('success');
      form.reset();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p role="status" aria-live="polite" className="text-sm text-sun-400">
        Thanks — we&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-3">
      <label htmlFor="news-email" className="sr-only">
        Email
      </label>
      <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/5 focus-within:border-sunset-500">
        <input
          id="news-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-navy-300 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-sunset-700 px-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-sunset-800"
        >
          {status === 'sending' ? '…' : 'Join'}
        </button>
      </div>
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="_subject" value="Newsletter signup" />
      {status === 'error' && (
        <p role="alert" className="text-xs text-sunset-300">
          Couldn&apos;t sign you up. Please try again later.
        </p>
      )}
    </form>
  );
}
