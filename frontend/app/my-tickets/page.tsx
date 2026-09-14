import type { Metadata } from "next";
import { MyTicketsView } from "@/src/components/tickets/my-tickets-view";
import { mockTickets } from "@/src/components/tickets/mock-tickets";

export const metadata: Metadata = {
  title: "My Tickets — RVCE Events",
  description:
    "View your RVCE event registrations, digital passes and attendance history.",
};

/**
 * Student registrations dashboard (PRD Epic 5: REG-04).
 *
 * A Server Component that only supplies data and lets the client view own the
 * interaction. The registration service does not exist yet, so this reads from
 * client-side fixtures; when the BFF lands, only this file should need to
 * change — swapping the fixture import for a `src/bff/` call.
 */
export default function MyTicketsPage() {
  return <MyTicketsView tickets={mockTickets} />;
}
