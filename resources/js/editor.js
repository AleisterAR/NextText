(function ({ component, siteId, keywordId, f }) {
    let currentSelector = {};
    const iframe = document.getElementById('magic-customize');
    let content = [];
    const undo = [];
    const getIframeDoc = () =>
        iframe.contentDocument || iframe.contentWindow.document;
    const textArea = document.querySelector('textarea');
    const magicEditor = document.querySelector('#magic-editor');
    const toggleEditor = document.querySelector('#toggle-editor');

    toggleEditor.addEventListener('click', function (e) {
        magicEditor.classList.toggle('left-0');
        magicEditor.classList.toggle('right-0');
    });

    const vailTag = (tag) => {
        return !['svg', 'img', 'body'].includes(tag);
    };

    document
        .getElementById('scroll-top')
        .addEventListener('click', function () {
            iframe.contentWindow.scrollTo(0, 0);
        });

    const createOverlay = (el) => {
        const iframeDoc = getIframeDoc();
        const rect = el.getBoundingClientRect();
        const left = rect.left;
        const top = rect.top + iframeDoc.documentElement.scrollTop;
        const width = rect.width;
        const height = rect.height;
        if (rect.top) {
            iframe.contentWindow.scrollTo(0, top - 100);
        }

        const overLay = iframeDoc.querySelector('#magic-overlay');

        overLay.style.position = 'absolute';
        overLay.style.left = left + 'px';
        overLay.style.top = top + 'px';
        overLay.style.width = width + 5 + 'px';
        overLay.style.height = height + 5 + 'px';
        overLay.style.display = 'block';
        overLay.style.border = '2px solid purple';
        overLay.style.zIndex = 9999999;
    };

    const scrollOverLay = (el) => {
        const iframeDoc = getIframeDoc();
        const rect = el.getBoundingClientRect();
        const left = rect.left;
        const top = rect.top + iframeDoc.documentElement.scrollTop;
        const width = rect.width;
        const height = rect.height;

        const overLay = iframeDoc.querySelector('#magic-overlay');

        overLay.style.position = 'absolute';
        overLay.style.left = left + 'px';
        overLay.style.top = top + 'px';
        overLay.style.width = width + 5 + 'px';
        overLay.style.height = height + 5 + 'px';
        overLay.style.display = 'block';
        overLay.style.border = '2px solid purple';
        overLay.style.zIndex = 9999999;
    };

    const hideOverLay = () => {
        const overLay = getIframeDoc().querySelector('#magic-overlay');
        overLay.style.display = 'none';
    };

    document.querySelector('#undo').onclick = function () {
        const [undoSelector, previous, el] = undo.pop() || [];

        if (undoSelector) {
            el.innerHTML = previous;
            if (!undo.find((u) => u[2] === el)) {
                content = content.filter((c) => c.el !== el);
            }
        }

        if (undo.length) {
            const [nextSelector, previous, el] = undo[undo.length - 1];
            createOverlay(el);
            currentSelector = nextSelector;
            textArea.value = el.innerHTML;
        } else {
            currentSelector = {};
            textArea.value = '';
            hideOverLay();
            content = [];
        }
    };

    const handleChange = function () {
        let timeout;
        return function (e) {
            if (timeout) clearTimeout(timeout);
            if (Object.keys(currentSelector).length) {
                timeout = setTimeout(() => {
                    let el;
                    const iframeDoc = getIframeDoc();

                    if (currentSelector.type === 'id') {
                        el = iframeDoc.body.querySelector(
                            currentSelector.selector
                        );
                    } else {
                        el = Array.from(
                            iframeDoc.body.querySelectorAll(
                                currentSelector.selector
                            )
                        )[currentSelector.index];
                    }

                    if (!content.find((c) => c.el === el)) {
                        content.push({ ...currentSelector, el });
                    }

                    undo.push([{ ...currentSelector }, el.innerHTML, el]);
                    el.innerHTML = e.target.value;
                    createOverlay(el);
                }, 500);
            } else {
                e.target.value = '';
            }
        };
    };

    const handleScroll = () => {
        let timeout;
        return () => {
            hideOverLay();
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (Object.keys(currentSelector).length) {
                    scrollOverLay(currentSelector.el);
                }
            }, 500);
        };
    };

    iframe.contentWindow.addEventListener('DOMContentLoaded', function () {
        const iframeDoc = getIframeDoc();

        iframeDoc.addEventListener('scroll', handleScroll());

        const div = iframeDoc.createElement('div');
        div.id = 'magic-overlay';
        iframeDoc.body.appendChild(div);

        if (component) {
            const contents = component.contents;

            contents.forEach(function (c) {
                if (c.type === 'id') {
                } else {
                    const el = iframeDoc.querySelectorAll(c.selector)[c.index];
                    el.innerHTML = c.value;
                    el.setAttribute('next-text', c._id);
                }
            });
        }

        div.addEventListener('click', function () {
            magicEditor.classList.remove('hidden');
        });

        Array.from(iframeDoc.querySelectorAll('a')).forEach((a) => {
            a.style.pointerEvents = 'none';
        });

        iframeDoc.body.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.id === 'magic-overlay') return;

            const className = e.target.className;
            const id = e.target.id;
            const tagName = e.target.tagName.toLowerCase();

            if (!vailTag(tagName)) return;

            currentSelector = {};

            if (id) {
                currentSelector = {
                    index: 0,
                    type: 'id',
                    selector: `#${id}`,
                    el: e.target,
                };
            } else if (className) {
                const attributeSelector = `[class='${className}']`;
                const els = iframeDoc.body.querySelectorAll(attributeSelector);
                const index = Array.from(els).indexOf(e.target);
                currentSelector = {
                    index,
                    type: 'class',
                    selector: attributeSelector,
                    el: e.target,
                };
            } else {
                const tags = iframeDoc.body.querySelectorAll(tagName);
                const index = Array.from(tags).indexOf(e.target);
                currentSelector = {
                    index,
                    type: 'tag',
                    selector: tagName,
                    el: e.target,
                };
            }

            createOverlay(e.target);
            magicEditor.classList.remove('hidden');
            textArea.value = e.target.innerHTML;

            return false;
        });
    });

    textArea.addEventListener('input', handleChange());

    document
        .querySelector('#save')
        .addEventListener('submit', async function (e) {
            e.preventDefault();
            if (!content.length) return;
            f.submit(e.submitter);
            const contents = content.map((c) => {
                const { el, ...other } = c;
                return {
                    ...other,
                    value: el.innerHTML,
                    _id: el.getAttribute('next-text') || null,
                };
            });

            const data = {
                contents,
                site: siteId,
                keyword: keywordId,
            };

            try {
                const res = await fetch(e.target.action, {
                    body: JSON.stringify(data),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const result = await res.json();

                if (!res.ok) {
                    throw result;
                }
                window.location.reload();
            } catch (error) {
                setTimeout(() => {
                    f.submitted(e.submitter);
                }, 500);
            }
        });
})({ component, siteId, keywordId, f });
