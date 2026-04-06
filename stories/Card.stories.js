import { html } from 'lit';

export default {
  title: 'Components/Card',
  tags: ['autodocs']
};

export const Default = {
  render: () => `
    <div class="comp-card" style="max-width: 400px;">
      <div class="comp-card-header">
        <span class="comp-card-title">Card Title</span>
        <button class="copy-btn">Copy</button>
      </div>
      <div class="comp-card-body">
        <div class="demo-stage">
          <button class="c-btn primary">Action</button>
          <button class="c-btn ghost">Cancel</button>
        </div>
      </div>
    </div>
  `
};

export const WithTable = {
  render: () => `
    <div class="comp-card" style="max-width: 600px;">
      <div class="comp-card-header">
        <span class="comp-card-title">Data Table</span>
      </div>
      <div class="comp-card-body" style="padding: 0;">
        <table class="c-table zebra">
          <thead class="c-table-header">
            <tr>
              <th class="c-table-header-cell">Name</th>
              <th class="c-table-header-cell">Status</th>
              <th class="c-table-header-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="c-table-row">
              <td class="c-table-cell">Server Alpha</td>
              <td class="c-table-cell"><span class="c-badge success">ACTIVE</span></td>
              <td class="c-table-cell">
                <button class="c-btn ghost" style="padding: 4px 8px; font-size: 0.8rem;">Edit</button>
              </td>
            </tr>
            <tr class="c-table-row">
              <td class="c-table-cell">Server Beta</td>
              <td class="c-table-cell"><span class="c-badge warn">IDLE</span></td>
              <td class="c-table-cell">
                <button class="c-btn ghost" style="padding: 4px 8px; font-size: 0.8rem;">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};
