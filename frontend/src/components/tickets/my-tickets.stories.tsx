import type { Meta, StoryObj } from "@storybook/react";
import { MyTicketsView } from "./my-tickets-view";
import { mockTickets, noTickets } from "./mock-tickets";

/**
 * Pinned reference time. Without it the upcoming/past split would drift as the
 * fixture dates age, and these stories would eventually show something
 * different from what they document.
 */
const REFERENCE_NOW = new Date("2026-09-14T12:00:00+05:30");

const meta: Meta<typeof MyTicketsView> = {
  title: "Tickets/MyTicketsView",
  component: MyTicketsView,
  tags: ["autodocs"],
  args: {
    now: REFERENCE_NOW,
  },
  argTypes: {
    browseHref: { control: "text" },
  },
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-[var(--bg-cobalt)]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MyTicketsView>;

/**
 * Populated dashboard: four upcoming registrations across confirmed,
 * waitlisted and cancelled states. Switch to Past Registrations for the three
 * historic tickets, and use Cancel Registration to open the confirmation.
 */
export const Populated: Story = {
  args: { tickets: mockTickets },
};

/** No registrations at all — both tabs fall back to the empty state. */
export const Empty: Story = {
  args: { tickets: noTickets },
};

/** Mobile — cards stack, the QR pass centres and the tab row stays on one line. */
export const Mobile: Story = {
  args: { tickets: mockTickets },
  parameters: { viewport: { defaultViewport: "mobile2" } },
};

/** Tablet — the card's two-column split engages. */
export const Tablet: Story = {
  args: { tickets: mockTickets },
  parameters: { viewport: { defaultViewport: "tablet" } },
};

/** Empty state on mobile, where the dashed panel and CTA must still breathe. */
export const EmptyMobile: Story = {
  args: { tickets: noTickets },
  parameters: { viewport: { defaultViewport: "mobile2" } },
};
