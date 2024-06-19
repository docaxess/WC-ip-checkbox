import { Component, h, Element } from '@stencil/core/internal';

@Component({
  tag: 'ip-checkbox',
  styleUrl: 'ip-checkbox.scss',
  shadow: true,
})
export class IpCheckbox {
  @Element() hostElement: HTMLElement;

  handleChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.hostElement.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          checked: checkbox.checked,
        },
      }),
    );
  }

  render() {
    return (
      <div>
        <input class="checkbox" type="checkbox" onChange={event => this.handleChange(event)} />
        <slot></slot>
      </div>
    );
  }
}
