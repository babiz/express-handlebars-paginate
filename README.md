# Express Handlebars Paginate Helper with Twitter Bootstrap Enabled


## Install

    npm install express-handlebars-paginate

## Usage

```javascript
/* ... */

var paginateHelper = require('express-handlebars-paginate');
//Register Helper
Handlebars.registerHelper('paginate', paginate);
```

###With [Handlebars][]
```javascript
/* ... */
Handlebars.registerHelper('paginate', paginate);
```

###With [Express Handlebars][]
```javascript
/* ... */
hbs.handlebars.registerHelper('paginateHelper', paginateHelper.createPagination);
```

```handlebars Template
{{{paginateHelper pagination}}}
```

[Express Handlebars]: https://github.com/ericf/express-handlebars
[Handlebars]: https://github.com/wycats/handlebars.js

## Options

### limit
Type: `int`
Default: `7`

Allows to define the number of page number limit

```handlebars
{{paginate pagination limit="7"}}
```

### leftText
Type: `string`
Default: `<i class="fa fa-chevron-left"></i>`

Allows to define the text for left link

```handlebars
{{paginate pagination leftText="Prev"}}
```

### rightText
Type: `string`
Default: `<i class="fa fa-chevron-right"></i>`

Allows to define the text for right link

```handlebars
{{paginate pagination rightText="Next"}}
```

### paginationClass
Type: `string`
Default: `pagination pagination-sm`

Allows to define the ul pagination class

```handlebars
{{paginate pagination paginationClass="some class"}}
```