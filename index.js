/**
 * Created by Babish Shrestha on 4/8/2015.
 */
"use strict";
exports.createPagination = function (pagination, options) {
    if (!pagination) {
        return '';
    }

    var limit = 7
        , n;
    var queryParams='';
    var page = pagination.page;
    var leftText = '<i class="fa fa-chevron-left"></i>';
    var rightText = '<i class="fa fa-chevron-right"></i>';
    var paginationClass = 'pagination pagination-sm';

    if (options.hash.limit) limit = +options.hash.limit;
    if (options.hash.leftText) leftText = options.hash.leftText;
    if (options.hash.rightText) rightText = options.hash.rightText;
    if (options.hash.paginationClass) paginationClass = options.hash.paginationClass;

    var pageCount = Math.ceil(pagination.totalRows / pagination.limit);

    //query params
    if(pagination.queryParams){
        queryParams = '&';
        for (var key in pagination.queryParams) {
            if (pagination.queryParams.hasOwnProperty(key) && key !== 'page') {
                queryParams += key+"="+pagination.queryParams[key]+"&";
            }
        }
        var lastCharacterOfQueryParams = queryParams.substring(queryParams.length,-1);

        if(lastCharacterOfQueryParams === "&"){
            //trim off last & character
            queryParams = queryParams.substring(0,queryParams.length-1);
        }
    }


    var template = '<ul class="' + paginationClass + '">';

    // ========= Previous Button ===============
    if (page === 1) {
        n = 1;
        template = template + '<li class="disabled"><a href="?page=' + n + queryParams + '">'+ leftText +'</a></li>';
    }
    else {
        n = page - 1;
        template = template + '<li><a href="?page=' + n + queryParams + '">'+ leftText +'</a></li>';
    }

    // ========= Page Numbers Middle ======

    var i = 0;
    var leftCount = Math.ceil(limit / 2) - 1;
    var rightCount = limit - leftCount - 1;
    if (page + rightCount > pageCount) {
        leftCount = limit - (pageCount - page) - 1;
    }
    if (page - leftCount < 1) {
        leftCount = page - 1;
    }
    var start = page - leftCount;

    while (i < limit && i < pageCount) {
        n = start;
        if (start === page) {
            template = template + '<li class="active"><a href="?page=' + n + queryParams + '">' + n + '</a></li>';
        } else {
            template = template + '<li><a href="?page=' + n + queryParams + '">' + n + '</a></li>';
        }

        start++;
        i++;
    }

// ========== Next Buton ===========
    if (page === pageCount) {
        n = pageCount;
        template = template + '<li class="disabled"><a href="?page=' + n + queryParams + '">'+ rightText +'</i></a></li>';
    }
    else {
        n = page + 1;
        template = template + '<li><a href="?page=' + n + queryParams + '">'+ rightText +'</a></li>';
    }
    template = template + '</ul>';
    return template;
}
;
