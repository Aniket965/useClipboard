'use strict';
let { useState, useEffect } = require('react');

async function getClipboardText() {
    return typeof navigator !== "undefined" ? await navigator.clipboard.readText().catch(err => console.log(err)) : "";
}
function useClipboard() {

    let [clipboardtext, setClipboardText] = useState('none');
    function setText(text) {
        navigator.clipboard.writeText().then(_ => {
            setClipboardText(text);
        });
    }
    function syncClipboardText() {
        getClipboardText().then(text => setClipboardText(text));
    }

    useEffect(() => {
        syncClipboardText()

        document.addEventListener('copy', (e) => {
            syncClipboardText()
        })
        document.addEventListener('cut', (e) => {
            syncClipboardText()
        })
        document.addEventListener('paste', (e) => {
            syncClipboardText()
        })
        return () => {
            document.removeEventListener('copy', _ => { })
            document.removeEventListener('cut', _ => { })
            document.removeEventListener('paste', _ => { })
        }
    }, [clipboardtext])

    return { clipboardtext, setText, syncClipboardText };
}

module.exports = useClipboard;
