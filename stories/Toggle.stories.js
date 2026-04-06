import { html } from 'lit';

export default {
  title: 'Components/Toggle',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Initial checked state' }
  }
};

export const Unchecked = {
  args: { checked: false },
  render: (args) => `
    <label style="display: flex; align-items: center; gap: 12px;">
      <input class="c-toggle" type="checkbox" ${args.checked ? 'checked' : ''}>
      <span>Enable feature</span>
    </label>
  `
};

export const Checked = {
  args: { checked: true },
  render: (args) => `
    <label style="display: flex; align-items: center; gap: 12px;">
      <input class="c-toggle" type="checkbox" ${args.checked ? 'checked' : ''}>
      <span>Real-time sync enabled</span>
    </label>
  `
};

export const AllToggles = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <label style="display: flex; align-items: center; gap: 12px;">
        <input class="c-toggle" type="checkbox" checked>
        <span>Enable notifications</span>
      </label>
      <label style="display: flex; align-items: center; gap: 12px;">
        <input class="c-toggle" type="checkbox">
        <span>Dark mode</span>
      </label>
      <label style="display: flex; align-items: center; gap: 12px;">
        <input class="c-toggle" type="checkbox" checked>
        <span>Auto-save</span>
      </label>
    </div>
  `
};
