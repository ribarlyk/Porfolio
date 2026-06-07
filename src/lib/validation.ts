/* ============================================================
   Pure contact-form validation. No React, no DOM — easy to unit test.
   ============================================================ */

export interface ContactValues {
  name: string;
  email: string;
  message: string;
}

export type ContactField = keyof ContactValues;
export type ContactErrors = Partial<Record<ContactField, string>>;

export interface ContactMessages {
  errReq: string;
  errEmail: string;
  errMsg: string;
}

export const MIN_MESSAGE_LENGTH = 10;

// Pragmatic email check: non-space local + "@" + domain + "." + TLD.
export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

/**
 * Validate the contact form. Returns an errors object keyed by field;
 * an empty object means the form is valid. Messages are injected so the
 * same logic works in any language.
 */
export function validateContact(values: ContactValues, messages: ContactMessages): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = messages.errReq;
  }
  if (!isValidEmail(values.email)) {
    errors.email = messages.errEmail;
  }
  if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = messages.errMsg;
  }

  return errors;
}

export function isContactValid(values: ContactValues, messages: ContactMessages): boolean {
  return Object.keys(validateContact(values, messages)).length === 0;
}
