import { Component, h, Element, Prop } from '@stencil/core/internal';

@Component({
  tag: 'ip-checkbox',
  styleUrl: 'ip-checkbox.scss',
  shadow: true,
})
export class IpCheckbox {
  @Element() hostElement: HTMLElement;

  @Prop() id: string;
  @Prop() disabled: boolean = false;
  @Prop() defaultChecked: boolean = false;
  @Prop() name: string;

  handleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.hostElement.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          name: this.name,
          checked: checkbox.checked,
        },
      }),
    );
  }

  render() {
    return (
      <div class="checkbox-content">
        <input
          class="checkbox-input"
          type="checkbox"
          name={this.name}
          id={this.id}
          checked={this.defaultChecked}
          disabled={this.disabled}
          onChange={event => this.handleChange(event)}
        />
        <label htmlFor={this.id} class="checkbox-label">
          <slot></slot>
        </label>
      </div>
    );
  }
}
