import { html } from 'lit';

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    value: { control: 'text', description: 'Input value' },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'disabled'],
      description: 'Input state'
    }
  }
};

export const Default = {
  args: { placeholder: 'Enter value', value: '', state: 'default' },
  render: (args) => `
    <input class="c-input" 
           type="text" 
           placeholder="${args.placeholder}"
           value="${args.value}"
           ${args.state === 'disabled' ? 'disabled' : ''}>
  `
};

export const WithValue = {
  args: { placeholder: 'Deployment Name', value: 'chiti-v3-prod-01', state: 'default' },
  render: (args) => `
    <input class="c-input" type="text" value="${args.value}">
  `
};

export const Error = {
  args: { placeholder: 'Enter value', value: 'Invalid config', state: 'error' },
  render: (args) => `
    <input class="c-input error" type="text" value="${args.value}">
  `
};

export const Disabled = {
  args: { placeholder: 'Disabled field', value: '', state: 'disabled' },
  render: (args) => `
    <input class="c-input" type="text" placeholder="${args.placeholder}" disabled>
  `
};

export const Select = {
  render: () => `
    <select class="c-select">
      <option>Region: Asia-Pacific</option>
      <option>Region: Europe</option>
      <option>Region: Americas</option>
    </select>
  `
};

export const AllInputs = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <input class="c-input" type="text" placeholder="Default input">
      <input class="c-input error" type="text" value="Invalid input">
      <input class="c-input" type="text" placeholder="Disabled" disabled>
      <select class="c-select">
        <option>Select option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  `
};
