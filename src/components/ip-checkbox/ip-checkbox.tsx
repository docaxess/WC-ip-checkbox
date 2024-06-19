import { Component, h } from '@stencil/core/internal';

@Component({
  tag: 'ip-checkbox',
  styleUrl: 'ip-checkbox.scss',
  shadow: true,
})
export class IpCheckbox {
  render() {
    return (
      <div>
        <input class="checkbox" type="checkbox" />
        <slot></slot>
      </div>
    );
  }
}
