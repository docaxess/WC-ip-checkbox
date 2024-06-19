import { Component, Prop, h } from '@stencil/core/internal';

@Component({
  tag: 'ip-checkbox-list',
  styleUrl: 'ip-checkbox-list.scss',
  shadow: true,
})
export class IpCheckboxList {
  @Prop() item: string[] = [];

  render() {
    return (
      <div>
        {this.item.map(item => {
          return (
            <div>
              <input class="checkbox" type="checkbox" />
              {item}
            </div>
          );
        })}
      </div>
    );
  }
}
