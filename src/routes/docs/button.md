---
title: 'Buttons'
slug: 'button'
outline: 'Demonstration of the button components'
section: 'Components'
---

<script>
    import View from '$lib/docs/View.svelte'
    import Button from '$lib/buttons/Button.svelte'
</script>

## {title}

### Preview

<View displayGrid='grid-3'>
    <Button>Click Me</Button>
    <Button>Click Me</Button>
    <Button>Click Me</Button>
</View>

### Usage
```js
<script>import Button from '$lib/buttons/Button.svelte'</script>
```
```html
<Button type="secondaryLight">Click Me</Button>
<Button type="secondaryDark">Click Me</Button>
<Button type="primary">Click Me</Button>
```
### Usage Guidelines
- Primary button is the default
- When offering primary and secondary actions together, the primary button should always be on the right.
- A button is a button and a link is a link - do not use buttons as links
### Dev Comments
- TODO: scrape and parse comments from the imported component file
- TODO: This will show a list of comments in the component file
- TODO: Allow selecting which comments to parse based on a prefix (eg. TODO: or NB: or whatever)