# Express Handlebars Paginate Helper with Twitter Bootstrap Enabled
I have created this template as I wanted to have a paginate template that would work on the fly. I don't want to make our own html for that and can be used as a helper for express handlebars. I hope this would be useful for others as well.
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
server.js

```javascript
/* ... */
Handlebars.registerHelper('paginate', paginate);
```

###With [Express Handlebars][]
```javascript
/* ... */
hbs.handlebars.registerHelper('paginateHelper', paginateHelper.createPagination);
```

Send the pagination object in your response or express controller
Example:
```javascript
res.render('renderViewHTML', { pagination: { page: currentPage, limit:PageLimit,totalRows: TotalNoOfROWS }});
```

Query Parameter : Allows to send query parameters to paginatin

```javascript
res.render('renderViewHTML', { pagination: { page: currentPage, limit:PageLimit,totalRows: TotalNoOfROWS, queryParams: object }});
```

 ### Usage in Handlebars Template
```handlebars
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

