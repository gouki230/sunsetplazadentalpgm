'use client';

import { useState } from 'react';
import { services } from '@/data/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots typically fill every field.
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
        setErrorMessage("Something went wrong sending your request. Please call us at (310) 855-2434.");
      }
    } catch {
      setStatus('error');
      setErrorMessage("Couldn't reach the form server. Please call us at (310) 855-2434.");
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-navy-50 p-8 text-center shadow-card"
      >
        <h3 className="font-display text-2xl text-navy-900">Request received.</h3>
        <p className="mt-2 text-ink-muted">
          Thanks for reaching out. We&apos;ll get back to you within one business day to confirm a
          time.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Preferred date" name="preferred_date" type="date" />
      </div>
      <Select label="Service" name="service" options={services.map((s) => s.title)} />
      <Textarea
        label="Tell us a little about what you're looking for"
        name="message"
        rows={4}
      />

      {/* Honeypot — hidden from sighted + AT users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-muted">
          We&apos;ll never share your information. By submitting you agree to be contacted about
          scheduling.
        </p>
        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Request appointment'}
        </button>
      </div>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
        {required && <span aria-hidden="true" className="text-sunset-600"> *</span>}
        {required && <span className="sr-only"> required</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
      />
    </div>
  );
}

function Textarea({ label, name, rows = 4 }: { label: string; name: string; rows?: number }) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-base text-ink shadow-sm transition focus:border-navy-700"
      >
        <option value="" disabled>
          Choose a service (optional)
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
        <option value="Not sure">Not sure — help me figure it out</option>
      </select>
    </div>
  );
}
