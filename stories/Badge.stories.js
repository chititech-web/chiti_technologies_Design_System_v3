import { html } from 'lit';

export default {
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'warn', 'error'],
      description: 'Badge color variant'
    },
    label: { control: 'text', description: 'Badge label' }
  }
};

export const Success = {
  args: { variant: 'success', label: 'ACTIVE' },
  render: (args) => `
    <span class="c-badge ${args.variant}">${args.label}</span>
  `
};

export const Warning = {
  args: { variant: 'warn', label: 'SYNC' },
  render: (args) => `
    <span class="c-badge ${args.variant}">${args.label}</span>
  `
};

export const Error = {
  args: { variant: 'error', label: 'BUSY' },
  render: (args) => `
    <span class="c-badge ${args.variant}">${args.label}</span>
  `
};

export const AllBadges = {
  render: () => `
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <span class="c-badge success">READY</span>
      <span class="c-badge warn">SYNC</span>
      <span class="c-badge error">BUSY</span>
      <span class="c-badge success">VERIFIED</span>
      <span class="c-badge warn">PENDING</span>
      <span class="c-badge error">FAILED</span>
    </div>
  `
};
