# Grid System
-----------------------------------------------

Powerful multi-device layouts for 12-column, nestable grid.

-----------------------------------------------
## Installations
-----------------------------------------------

1. Clone the project
2. Run `npm install`
3. Make sure you have the Grunt command-line interface with `npm install -g grunt-cli`
4. Run `grunt dev` to start watching for file saves & run a local web server at port 8000 ([localhost:8000](http://localhost:8000/)).

-----------------------------------------------
## Predefined HTML Classes
-----------------------------------------------
These are examples of different ways to use the Grid. Since this Framework is mobile-first, we'll stack content by default. There are 4 different grids based on 3 different break points to allow you to create fairly complex layouts and even drop columns:

- `small` < 768
- 768 <= `medium` < 1024
- 1024 <= `large` < 1440
- 1440 <= `x-large`
This means you can create some pretty complex layouts and even drop columns if you want.

classes:
`.row`: define a row
`.column` or `columns`: define a column
`.small-#`: define the number of column the div will take in small size (12 if not define)
`.medium-#`: define the number of column the div will take in medium size (inherit value from `small` if not define)
`.large-#`: define the number of column the div will take in medium size (inherit value from `medium` if not define)
`.x-large-#`: define the number of column the div will take in medium size (inherit value from `large` if not define)

```
<div class="row">
  <div class="small-2 medium-4 columns">...</div>
  <div class="small-4 medium-4 columns">...</div>
  <div class="small-6 medium-4 columns">...</div>
</div>
<div class="row">
  <div class="medium-3 columns">...</div>
  <div class="medium-6 columns">...</div>
  <div class="medium-3 columns">...</div>
</div>
<div class="row">
  <div class="small-6 medium-2 columns">...</div>
  <div class="small-6 medium-8 columns">...</div>
  <div class="medium-2 columns">...</div>
</div>
```

-----------------------------------------------
## Nesting
-----------------------------------------------
You can nest your grid as much as you want; the padding and margins are set by the class content.

```
<div class="row">
  <div class="small-10 medium-8 columns">8
    <div class="row">
      <div class="small-10 medium-8 columns">8 Nested
        <div class="row">
          <div class="small-6 medium-4 columns">4 Nested Again</div>
          <div class="small-6 medium-8 columns">8 Nested Again</div>
        </div>
      </div>
      <div class="small-2 medium-4 columns">4 Nested</div>
    </div>
  </div>
  <div class="small-2 medium-4 columns">4</div>
</div>
```

-----------------------------------------------
## Offsets
-----------------------------------------------
Offsets allow you to create additional space between columns in a row. They're nestable like the rest of the grid. You can use classes like `.medium-offset-1`, `.large-offset-5`, `.x-large-offset-10` and `.small-offset-3` to manipulate your column positions in different ways. You can offset up to 11 since you wouldn't ever offset a full-width column.

classes:
- `.small-offset-#`: push the div to the left at the small size
- `.medium-offset-#`: push the div to the left at the medium size (inherit value from `small` if not define)
- `.large-offset-#`: push the div to the left at the large size (inherit value from `medium` if not define)
- `.x-large-offset-#`: push the div to the left at the x-large size (inherit value from `large` if not define)

```
<div class="row">
  <div class="medium-1 columns">1</div>
  <div class="medium-11 columns">11</div>
</div>
<div class="row">
  <div class="medium-1 columns">1</div>
  <div class="medium-10 medium-offset-1 columns">10, offset 1</div>
</div>
<div class="row">
  <div class="medium-1 columns">1</div>
  <div class="medium-9 medium-offset-2 columns">9, offset 2</div>
</div>
<div class="row">
  <div class="medium-1 columns">1</div>
  <div class="medium-8 medium-offset-3 columns">8, offset 3</div>
</div>
```

-----------------------------------------------
## Centered Columns
-----------------------------------------------
Centered columns are placed in the middle of the row. This does not center their content but centers the grid element itself. This is accomplished by adding a class of `x-large-centered`, `large-centered`, `medium-centered` or `small-centered` depending on which breakpoint you want the columns to center on. Small versions will carry through all breakpoints if not overridden by a large version. You can center any number of columns you have. To have a column not carry its `small-centered` to `large`, add a class of `large-uncentered`.

classes:
- `.small-centered`: center the div at the small size
- `.medium-centered`: center the div at the medium size (inherit value from `small` if not define)
- `.medium-uncentered`: used if small is centered and medium is uncentered
- `.large-centered`: center the div at the large size (inherit value from `medium` if not define)
- `.large-uncentered`: used if medium is centered and large is uncentered
- `.x-large-centered`: center the div at the x-large size (inherit value from `large` if not define)
- `.x-large-uncentered`: used if large is centered and x-large is uncentered

```
<div class="row">
  <div class="small-3 small-centered columns">3 centered</div>
</div>
<div class="row">
  <div class="small-6 medium-centered columns">6 centered</div>
</div>
<div class="row">
  <div class="small-9 small-centered large-uncentered columns">9 centered</div>
</div>
```

-----------------------------------------------
## Source Ordering
-----------------------------------------------
Using the source ordering classes you can shift columns around between the breakpoints. For instance, using `.medium-push-#` you can have a sub-nav on the left for large displays but below for small ones.

classes:
- `.small-push-#`: push the div to the left on relative position at the small size
- `.medium-push-#`: push the div to the left on relative position at the medium size (inherit value from `small` if not define)
- `.large-push-#`: push the div to the left on relative position at the large size (inherit value from `medium` if not define)
- `.x-large-push-#`: push the div to the left on relative position at the x-large size (inherit value from `large` if not define)

- `.small-pull-#`: push the div to the right on relative position at the small size
- `.medium-pull-#`: push the div to the right on relative position at the medium size (inherit value from `small` if not define)
- `.large-pull-#`: push the div to the right on relative position at the large size (inherit value from `medium` if not define)
- `.x-large-pull-#`: push the div to the right on relative position at the x-large size (inherit value from `large` if not define)

- `.medium-unpush`: cancel the push value from small size
- `.medium-unpull`: cancel the pull value from small size
- `.large-unpush`: cancel the push value from medium size
- `.large-unpull`: cancel the pull value from medium size
- `.x-large-unpush`: cancel the push value from large size
- `.x-large-unpull`: cancel the pull value from large size

```
<div class="row">
  <div class="small-2 medium-push-10 columns">2</div>
  <div class="small-10 medium-pull-2 columns">10, last</div>
</div>
<div class="row">
  <div class="small-4 medium-push-8 large-unpush columns">4</div>
  <div class="small-8 medium-pull-4 large-unpull columns">8, last</div>
</div>
```

-----------------------------------------------
## Responsive utility classes
-----------------------------------------------
Visibility

You can set div visible or hidden at different break points by using the class `visible_#{size}` or `hidden_#{size}`. This framework is mobile first so if you to want hide a div on small size only you need to give 2 classes to your div `.hidden_small` and `.visible_medium`

- `.visible_small`: default value
- `.visible_medium`: set the div display:block on medium size (inherit from .visible_small)
- `.visible_large`: set the div display:block on large size (inherit from .visible_medium)
- `.visible_x-large`: set the div display:block on x-large size (inherit from .visible_large)
- `.hidden_small`: set the div display:none on small size
- `.hidden_medium`: set the div display:none on medium size (inherit from .visible_small)
- `.hidden_large`: set the div display:none on large size (inherit from .visible_medium)
- `.hidden_x-large`: set the div display:none on x-large size (inherit from .visible_large)

Floats

- `.float-right_{#size}`: set the div float:right for the define {#size}
- `.float-left_{#size}`: set the div float:left for the define {#size}
- `.float-none_{#size}`: set the div float:none for the define {#size}

Padding

- `.padded_{#size}`: set the div a padding to $spacing for the define {#size}
- `.padded-none_{#size}`: set the div a padding to 0 for the define {#size}
