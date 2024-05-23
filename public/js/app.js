import './form'
async function copyClipboard(id){
    try {
        const copy = document.getElementById(id)
        await navigator.clipboard.writeText(copy.innerText);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
}

window.copyClipboard = copyClipboard