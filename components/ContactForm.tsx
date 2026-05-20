'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      setErrorMessage(
        'Form is not yet configured. Owner: set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local.',
      );
      return;
    }

    setStatus('submitting');
    setErrorMessage(null);

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
        setErrorMessage('Something went wrong sending your message. Please try again or call us.');
      }
    } catch {
      setStatus('error');
      setErrorMessage("Couldn't reach the form server. Please try again or call us.");
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-navy-50 p-8 text-center shadow-card">
        <h3 className="font-display text-2xl text-navy-900">Message sent.</h3>
        <p className="mt-2 text-ink-muted">Thanks for reaching out — we&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="block text-sm font-medium text-navy-900">
            Name <span aria-hidden="true" className="text-sunset-600">*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-navy-900">
            Email <span aria-hidden="true" className="text-sunset-600">*</span>
            <span className="sr-only"> required</span>
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
          />
        </div>
      </div>
      <div>
        <label htmlFor="c-message" className="block text-sm font-medium text-navy-900">
          Message <span aria-hidden="true" className="text-sunset-600">*</span>
          <span className="sr-only"> required</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
