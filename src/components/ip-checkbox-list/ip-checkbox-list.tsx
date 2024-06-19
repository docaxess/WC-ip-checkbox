import { Component, Prop, h, State, Watch, EventEmitter, Event } from '@stencil/core';

interface CheckboxOption {
  id: string;
  label: string;
}

@Component({
  tag: 'ip-checkbox-list',
  styleUrl: 'ip-checkbox-list.scss',
  shadow: true,
})
export class IpCheckboxList {
  @Prop() options: string;
  @State() selectedOptions: string[] = [];

  parsedOptions: CheckboxOption[] = [];

  @Event({ bubbles: true, composed: true }) selectionChanged: EventEmitter<string[]>;

  componentWillLoad() {
    this.parseOptions(this.options);
  }

  @Watch('options')
  parseOptions(newValue: string) {
    try {
      this.parsedOptions = JSON.parse(newValue);
    } catch (error) {
      console.error('Invalid options:', error);
    }
  }

  handleChange(optionId: string) {
    const index = this.selectedOptions.indexOf(optionId);

    if (index < 0) {
      this.selectedOptions = [...this.selectedOptions, optionId];
    } else {
      this.selectedOptions = [...this.selectedOptions.slice(0, index), ...this.selectedOptions.slice(index + 1)];
    }
    this.selectionChanged.emit(this.selectedOptions);
  }

  render() {
    return (
      <div class="checkbox-list">
        {this.parsedOptions.map(option => (
          <div key={option.id}>
            <input
              class="checkbox"
              type="checkbox"
              id={option.id}
              checked={this.selectedOptions.includes(option.id)}
              onChange={() => this.handleChange(option.id)}
              aria-checked={this.selectedOptions.includes(option.id) ? 'true' : 'false'}
              role="checkbox"
            />
            <label class="checkbox-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
