import { html } from 'lit';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs']
};

export const Default = {
  render: () => `
    <div class="c-tabs">
      <button class="c-tab active">Overview</button>
      <button class="c-tab">Analytics</button>
      <button class="c-tab">Settings</button>
    </div>
  `
};

export const WithContent = {
  render: () => `
    <div>
      <div class="c-tabs">
        <button class="c-tab active">Dashboard</button>
        <button class="c-tab">Reports</button>
        <button class="c-tab">Users</button>
      </div>
      <div style="margin-top: 16px; padding: 20px; background: var(--surface-2); border-radius: 8px;">
        Tab content goes here
      </div>
    </div>
  `
};
