//Here’s the completed flexboxProperties object structure, based on the Flexbox documentation (https://flexbox.malven.co/) and MDN:

const flexboxProperties = {
    container: {
      display: {
        flex: { description: "Defines a block-level flex container." },
        "inline-flex": { description: "Defines an inline-level flex container." }
      },
      "flex-direction": {
        row: { "initial-value": true, description: "Defines the main axis as horizontal, left-to-right." },
        "row-reverse": { description: "Defines the main axis as horizontal, right-to-left." },
        column: { description: "Defines the main axis as vertical, top-to-bottom." },
        "column-reverse": { description: "Defines the main axis as vertical, bottom-to-top." }
      },
      "flex-wrap": {
        nowrap: { "initial-value": true, description: "Items will not wrap onto multiple lines." },
        wrap: { description: "Items will wrap onto multiple lines." },
        "wrap-reverse": { description: "Items will wrap onto multiple lines in reverse order." }
      },
      "justify-content": {
        "flex-start": { "initial-value": true, description: "Aligns items to the start of the main axis." },
        "flex-end": { description: "Aligns items to the end of the main axis." },
        center: { description: "Centers items along the main axis." },
        "space-between": { description: "Distributes items with space between them." },
        "space-around": { description: "Distributes items with space around them." },
        "space-evenly": { description: "Distributes items with equal space around them." }
      },
      "align-items": {
        stretch: { "initial-value": true, description: "Stretches items to fill the container's cross axis." },
        flexStart: { description: "Aligns items to the start of the cross axis." },
        flexEnd: { description: "Aligns items to the end of the cross axis." },
        center: { description: "Centers items along the cross axis." },
        baseline: { description: "Aligns items along their baseline." }
      },
      "align-content": {
        stretch: { "initial-value": true, description: "Stretches lines to fill the container's cross axis." },
        "flex-start": { description: "Aligns lines to the start of the cross axis." },
        "flex-end": { description: "Aligns lines to the end of the cross axis." },
        center: { description: "Centers lines along the cross axis." },
        "space-between": { description: "Distributes lines with space between them." },
        "space-around": { description: "Distributes lines with space around them." }
      }
    },
    children: {
      "align-self": {
        auto: { "initial-value": true, description: "Inherits the align-items value from the container." },
        stretch: { description: "Stretches the item to fill the cross axis." },
        "flex-start": { description: "Aligns the item to the start of the cross axis." },
        "flex-end": { description: "Aligns the item to the end of the cross axis." },
        center: { description: "Centers the item along the cross axis." },
        baseline: { description: "Aligns the item along its baseline." }
      },
      order: {
        description: "Defines the order of the item relative to its siblings.",
        "initial-value": 0
      },
      "flex-grow": {
        description: "Defines how much the item will grow relative to others.",
        "initial-value": 0
      },
      "flex-shrink": {
        description: "Defines how much the item will shrink relative to others.",
        "initial-value": 1
      },
      "flex-basis": {
        description: "Defines the initial size of the item before any remaining space is distributed.",
        "initial-value": "auto"
      }
    }
  };
  