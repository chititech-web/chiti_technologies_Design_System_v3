import { html } from 'lit';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'ghost', 'danger'],
      description: 'Visual style variant'
    },
    disabled: { control: 'boolean', description: 'Disabled state' }
  }
};

export const Primary = {
  args: { variant: 'primary', label: 'Confirm Deployment', disabled: false },
  render: (args) => `
    <button class="c-btn ${args.variant}" ${args.disabled ? 'disabled' : ''}>
      ${args.label}
    </button>
  `
};

export const Ghost = {
  args: { variant: 'ghost', label: 'Cancel Action', disabled: false },
  render: (args) => `
    <button class="c-btn ${args.variant}" ${args.disabled ? 'disabled' : ''}>
      ${args.label}
    </button>
  `
};

export const Danger = {
  args: { variant: 'danger', label: 'Delete Records', disabled: false },
  render: (args) => `
    <button class="c-btn ${args.variant}" ${args.disabled ? 'disabled' : ''}>
      ${args.label}
    </button>
  `
};

export const Disabled = {
  args: { variant: 'primary', label: 'Locked State', disabled: true },
  render: (args) => `
    <button class="c-btn ${args.variant}" disabled>
      ${args.label}
    </button>
  `
};

export const AllVariants = {
  render: () => `
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="c-btn primary">Primary</button>
      <button class="c-btn ghost">Ghost</button>
      <button class="c-btn danger">Danger</button>
      <button class="c-btn primary" disabled>Disabled</button>
    </div>
  `
};
