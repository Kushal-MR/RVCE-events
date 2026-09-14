import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TicketPassCard } from "./ticket-pass-card";
import {
  cancelledTicket,
  checkedInTicket,
  confirmedTicket,
  waitlistedTicket,
} from "./mock-tickets";

const meta: Meta<typeof TicketPassCard> = {
  title: "Tickets/TicketPassCard",
  component: TicketPassCard,
  tags: ["autodocs"],
  args: {
    onCancelRequest: fn(),
  },
  argTypes: {
    eventHref: { control: "text" },
    showCancelAction: { control: "boolean" },
  },
  // The card lives on the cobalt dashboard, constrained to the column width it
  // occupies in the real list.
  decorators: [
    (Story) => (
      <div className="flex min-h-[320px] justify-center bg-[var(--bg-cobalt)] p-6">
        <div className="w-full max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TicketPassCard>;

/** Active registration for a future event — the common case. */
export const Confirmed: Story = {
  args: { ticket: confirmedTicket },
};

/** Seat not yet secured; the student is in the queue. */
export const Waitlisted: Story = {
  args: { ticket: waitlistedTicket },
};

/**
 * Past registration that was scanned at the door. Past tickets cannot be
 * given up, so the dashboard passes `showCancelAction={false}`.
 */
export const PastCheckedIn: Story = {
  args: { ticket: checkedInTicket, showCancelAction: false },
};

/** Released seat: the pass is dimmed to read as void, and cancelling is gone. */
export const Cancelled: Story = {
  args: { ticket: cancelledTicket },
};

/** Mobile — the QR pass stacks under the details and actions wrap. */
export const Mobile: Story = {
  args: { ticket: confirmedTicket },
  parameters: { viewport: { defaultViewport: "mobile2" } },
};

/** Tablet — the two-column split has just engaged. */
export const Tablet: Story = {
  args: { ticket: confirmedTicket },
  parameters: { viewport: { defaultViewport: "tablet" } },
};
