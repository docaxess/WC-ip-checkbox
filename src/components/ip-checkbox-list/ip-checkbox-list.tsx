import { Component, Prop, h, State, Watch, EventEmitter, Event } from '@stencil/core';

interface CheckboxOption {
  id: string;
  label: string;
  disabled?: boolean;
  defaultChecked?: boolean;
}

@Component({
  tag: 'ip-checkbox-list',
  styleUrl: 'ip-checkbox-list.scss',
  shadow: true,
})
export class IpCheckboxList {
  @Prop() options: string;
  @Prop() legend: string;
  @State() selectedOptions: string[] = [];

  parsedOptions: CheckboxOption[] = [];

  @Event({ bubbles: true, composed: true }) selectionChanged: EventEmitter<string[]>;

  componentWillLoad() {
    this.parseOptions(this.options);
    this.selectedOptions = this.parsedOptions.filter(option => option.defaultChecked).map(option => option.id);
  }

  @Watch('options')
  parseOptions(newValue: string) {
    try {
      const parsedOptions = JSON.parse(newValue);

      if (Array.isArray(parsedOptions) && parsedOptions.every(option => 'id' in option && 'label' in option)) {
        this.parsedOptions = parsedOptions;
      } else {
        console.error('Invalid options structure. Expected an array of objects with "id" and "label" properties.');
      }
    } catch (error) {
      console.error('Invalid options:', error);
    }
  }

  handleChange(optionId: string) {
    if (!this.selectedOptions.includes(optionId)) {
      this.selectedOptions.push(optionId);
    } else {
      this.selectedOptions = this.selectedOptions.filter(id => id !== optionId);
    }
    this.selectionChanged.emit(this.selectedOptions);
  }

  render() {
    return (
      <div class="checkbox-list">
        <fieldset class="checkbox-content">
          {this.legend && <legend class="legend">{this.legend}</legend>}
          {this.parsedOptions.map(option => (
            <div key={option.id}>
              <input
                class="checkbox-input"
                type="checkbox"
                id={option.id}
                checked={this.selectedOptions.includes(option.id)}
                onChange={() => this.handleChange(option.id)}
                aria-checked={this.selectedOptions.includes(option.id) ? 'true' : 'false'}
                role="checkbox"
                disabled={option.disabled}
              />
              <label class="checkbox-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    );
  }
}
