/**
 * Modified by Afu Tse on 14/11/2019.
 */
"use strict";
exports.createPagination = (pagination, options) => {

    if (!pagination) {
        return '';
    }

    var limit = 7;
    var n = 1;
    var queryParams = '';
    var page = parseInt(pagination.page || 0);
    var leftText = '<i class="fas fa-angle-left"></i>';
    var rightText = '<i class="fas fa-angle-right"></i>';
    var firstText = '<i class="fas fa-angle-double-left"></i>';
    var lastText = '<i class="fas fa-angle-double-right"></i>';
    var paginationClass = 'pagination pagination-sm';

    if (options.hash.limit) limit = +options.hash.limit;
    if (options.hash.leftText) leftText = options.hash.leftText;
    if (options.hash.rightText) rightText = options.hash.rightText;
    if (options.hash.firstText) firstText = options.hash.firstText;
    if (options.hash.lastText) lastText = options.hash.lastText;
    if (options.hash.paginationClass) paginationClass = options.hash.paginationClass;

    var pageCount = Math.ceil(pagination.totalRows / pagination.limit);

    //query params
    if (pagination.queryParams) {
        queryParams = '&';
        for (var key in pagination.queryParams) {
            if (pagination.queryParams.hasOwnProperty(key) && key !== 'page') {
                queryParams += key + "=" + pagination.queryParams[key] + "&";
            }
        }
        var lastCharacterOfQueryParams = queryParams.substring(queryParams.length, -1);

        if (lastCharacterOfQueryParams === "&") {
            //trim off last & character
            queryParams = queryParams.substring(0, queryParams.length - 1);
        }
    }

    var template = '<ul class="' + paginationClass + '">';

    // ========= First Button ===============
    if (page === 1) {
        template = template + '<li class="page-item disabled"><a class="page-link" href="?page=1' + queryParams + '">' + firstText + '</a></li>';
    } else {
        template = template + '<li class="page-item"><a class="page-link" href="?page=1' + queryParams + '">' + firstText + '</a></li>';
    }

    // ========= Previous Button ===============
    if (page === 1) {
        n = 1;
        template = template + '<li class="page-item disabled"><a class="page-link" href="?page=' + n + queryParams + '">' + leftText + '</a></li>';
    } else {
        if (page <= 1) {
            n = 1;
        } else {
            n = page - 1;
        }
        template = template + '<li class="page-item"><a class="page-link" href="?page=' + n + queryParams + '">' + leftText + '</a></li>';
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
            template = template + '<li class="page-item active"><a class="page-link" href="?page=' + n + queryParams + '">' + n + '</a></li>';
        } else {
            template = template + '<li class="page-item"><a class="page-link" href="?page=' + n + queryParams + '">' + n + '</a></li>';
        }

        start++;
        i++;
    }

    // ========== Next Button ===========
    if (page === pageCount) {
        n = pageCount;
        template = template + '<li class="page-item disabled"><a class="page-link" href="?page=' + n + queryParams + '">' + rightText + '</i></a></li>';
    } else {
        if (page >= pageCount) {
            n = pageCount;
        } else {
            n = page + 1;
        }
        template = template + '<li class="page-item"><a class="page-link" href="?page=' + n + queryParams + '">' + rightText + '</a></li>';
    }
    
    // ========= Last Button ===============
    if (page === pageCount) {
        template = template + '<li class="page-item disabled"><a class="page-link" href="?page=' + pageCount + queryParams + '">' + lastText + '</a></li>';
    } else {
        template = template + '<li class="page-item"><a class="page-link" href="?page=' + pageCount + queryParams + '">' + lastText + '</a></li>';
    }

    template = template + '</ul>';
    return template;
};