# Checkbox documentation

In this component, you can use ip-xheckbox and ip-checkbox-list;it depends on how you use it.

- **ip-checkbox**: for a simple checkbox
- **ip-checkbox-list**: for a checkbox list

## Ip-checkbox

### Description

`IpCheckbox` is a Stencil.js component that displays a single checkbox.

### Usage

To use this component, we must add the properties as attributes.

#### Component Tag:

Use the `<ip-checkbox>` tag in your JSX/HTML.

#### Properties

| Property         | Attribute         | Necessity | Description                                     | Type      | Default     |
| ---------------- | ----------------- | --------- | ----------------------------------------------- | --------- | ----------- |
| `id`             | `id`              | Required  | `it is the id of the input for accessibility`   | `string`  | `undefined` |
| `name`           | `name`            | Required  | `it is the name of the input for accessibility` | `string`  | `undefined` |
| `defaultChecked` | `default-checked` | Optional  | `when we need to set the checkbox to checked`   | `boolean` | `false`     |
| `disabled`       | `disabled`        | Optional  | `when we need to set the checkbox to disabled`  | `boolean` | `false`     |

_e.g:_

```html
<ip-checkbox default-checked="true" disabled="true" id="Male"> </ip-checkbox>
```

#### Content

We have predefined label slot for the label before the checkbox,and this will be the content you will put inside the tag.

_e.g:_

```html
<ip-checkbox default-checked="true" disabled="true" id="checked"> Checked ! </ip-checkbox>
```

#### Customization:

We have a set of predefined variable used to customisation the checkbox:

- **--primary-color**
- **--secondary-color**
- **--font-size**
- **--checkbox-size**

To update the values use the following:

```css
ip-checkbox {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

## Ip-checkbox-list

### Usage

To use this component, we must add the properties as attributes.

#### Component Tag:

Use the `<ip-checkbox-list>` tag in your JSX/HTML.

#### Properties

| Property         | Attribute         | Necessity | Description                                                 | Type      | Default     |
| ---------------- | ----------------- | --------- | ----------------------------------------------------------- | --------- | ----------- |
| `options`        | `options`         | Required  | `it is an array of object used to pass options as checkbox` | `string`  | `undefined` |
| `id`             | `id`              | Required  | `it is the id of the input for accessibility`               | `string`  | `undefined` |
| `defaultChecked` | `default-checked` | Optional  | `when we need to set the checkbox to checked`               | `boolean` | `false`     |
| `disabled`       | `disabled`        | Optional  | `when we need to set the checkbox to disabled`              | `boolean` | `false`     |
| `legend`         | `legend`          | Optional  | `it is the legend of the list of checkbox`                  | `string`  | `undefined` |

Example:

```html
<ip-checkbox-list options='[{"id": "option1", "label": "Option 1"}, {"id": "option2", "label": "Option 2"}]'></ip-checkbox-list>
```

#### Customization:

We have a set of predefined variable used to customisation the checkbox:

- **--primary-color**
- **--secondary-color**
- **--font-size**
- **--checkbox-size**

To update the values use the following:

```css
ip-checkbox-list {
  --primary-color: #006342;
  --secondary-color: #000000;
}
```

## Listening to Events

To listen to events emitted by the ip-checkbox and ip-checkbox-list components, open your browser's console. Event details will be displayed in the console when checkboxes are modified.

Example JavaScript code to listen to events:

```javascript
const checkboxList = document.querySelector('ip-checkbox-list');
const checkbox = document.querySelector('ip-checkbox');

checkboxList.addEventListener('change', event => {
  console.log(event.detail);
});

checkbox.addEventListener('change', event => {
  const isChecked = event.detail.checked;
  console.log(isChecked);
});
```
