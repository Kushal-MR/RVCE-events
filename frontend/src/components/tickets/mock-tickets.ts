/**
 * Client-side fixtures for the My Tickets dashboard.
 *
 * Issue #30 is strictly frontend: there is no registration service yet, so
 * every ticket below is hand-written sample data. Timestamps carry an explicit
 * `+05:30` offset so they render identically regardless of the machine's
 * timezone, and are fixed (not computed from `Date.now()`) so Storybook
 * renders deterministically.
 *
 * Individual tickets are exported by name so the card stories can reference a
 * single status variant without indexing into the array.
 */

import type { Ticket } from "./types";

export const confirmedTicket: Ticket = {
  id: "tkt-01",
  ticketCode: "RVCE-EVT-98213",
  eventTitle: "HackRVCE 2026",
  eventSlug: "hackrvce-2026",
  organizingClub: "Coding Club",
  venue: "Main Auditorium",
  startsAt: "2026-10-17T09:00:00+05:30",
  endsAt: "2026-10-18T18:00:00+05:30",
  status: "CONFIRMED",
};

export const waitlistedTicket: Ticket = {
  id: "tkt-02",
  ticketCode: "RVCE-EVT-98274",
  eventTitle: "Intro to Kubernetes Workshop",
  eventSlug: "intro-to-kubernetes-workshop",
  organizingClub: "IEEE RVCE",
  venue: "Seminar Hall, CSE Block",
  startsAt: "2026-10-03T14:00:00+05:30",
  endsAt: "2026-10-03T17:30:00+05:30",
  status: "WAITLISTED",
};

export const upcomingConfirmedSprint: Ticket = {
  id: "tkt-03",
  ticketCode: "RVCE-EVT-99001",
  eventTitle: "Open Source Sprint",
  eventSlug: "open-source-sprint",
  organizingClub: "Coding Club",
  venue: "CSE Lab 4",
  startsAt: "2026-11-08T10:00:00+05:30",
  endsAt: "2026-11-08T16:00:00+05:30",
  status: "CONFIRMED",
};

export const cancelledTicket: Ticket = {
  id: "tkt-04",
  ticketCode: "RVCE-EVT-98450",
  eventTitle: "Competitive Programming Bootcamp",
  eventSlug: "competitive-programming-bootcamp",
  organizingClub: "Coding Club",
  venue: "CSE Lab 2",
  startsAt: "2026-10-25T09:30:00+05:30",
  endsAt: "2026-10-25T13:00:00+05:30",
  status: "CANCELLED",
};

export const checkedInTicket: Ticket = {
  id: "tkt-05",
  ticketCode: "RVCE-EVT-87120",
  eventTitle: "Flutter Forward Meetup",
  eventSlug: "flutter-forward-meetup",
  organizingClub: "GDG RVCE",
  venue: "Seminar Hall, ISE Block",
  startsAt: "2026-08-21T15:00:00+05:30",
  endsAt: "2026-08-21T18:00:00+05:30",
  status: "CHECKED_IN",
};

export const pastCheckedInDesignTalk: Ticket = {
  id: "tkt-06",
  ticketCode: "RVCE-EVT-86044",
  eventTitle: "Design Systems 101",
  eventSlug: "design-systems-101",
  organizingClub: "Design Club",
  venue: "Architecture Studio",
  startsAt: "2026-07-12T11:00:00+05:30",
  endsAt: "2026-07-12T13:00:00+05:30",
  status: "CHECKED_IN",
};

/** Registered but never scanned in — a past event the student did not attend. */
export const pastNoShowTicket: Ticket = {
  id: "tkt-07",
  ticketCode: "RVCE-EVT-85319",
  eventTitle: "Cybersecurity Capture The Flag",
  eventSlug: "cybersecurity-capture-the-flag",
  organizingClub: "CyberSec Club",
  venue: "CSE Lab 1",
  startsAt: "2026-06-14T09:00:00+05:30",
  endsAt: "2026-06-14T20:00:00+05:30",
  status: "CONFIRMED",
};

/** Full sample set covering every status across both tabs. */
export const mockTickets: Ticket[] = [
  confirmedTicket,
  waitlistedTicket,
  upcomingConfirmedSprint,
  cancelledTicket,
  checkedInTicket,
  pastCheckedInDesignTalk,
  pastNoShowTicket,
];

/** Drives the empty-state story and the no-registrations screen. */
export const noTickets: Ticket[] = [];
