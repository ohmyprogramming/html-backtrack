
/*
 * Copyright (C) 2023 ohmyprogramming <github.com/ohmyprogramming>
 * html-backtrack
 * JavaScript Function to Backtrack through the DOM tree of an HTML element.
 */

/**
 * Backtrack through the DOM tree of an HTML element.
 * @param HTMLElement element
 * @param string      nodeName
 * @param boolean     getReference (default true)
 * @param int         maxIterations (-1 is infinite)
 * @return            Boolean or HTMLElement if getReference is true
 */
function html_backtrack_element(
    element       = null,
    nodeName      = '',
    getReference  = true,
    maxIterations = -1
)
{
    if ((element instanceof HTMLElement) === false)
        return null;

    if (nodeName === '' || nodeName.trim().length === 0)
        return null;

    nodeName = nodeName.toUpperCase();
    var i = 0;
    var ref = null;

    while (element != null)
    {
        if (element.nodeName === nodeName)
        {
            ref = element;
            break;
        }
        element = element.parentElement;
    }

    if (getReference == true)
    {
        return ref;
    }

    if (ref === null)
    {
        return false;
    }
    else
    {
        return true;
    }
}
