
const form = document.getElementById('keyword');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    f.submit(e.submitter)
    const data = new FormData(e.target);
    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: new URLSearchParams(data),
            credentials: 'include'  
        });
        const result = await res.json();
        if (!res.ok) {
            throw result;
        }
        window.location.href = '/keywords';
    } catch (error) {
        setTimeout(() => {
            f.submitted(e.submitter)
        }, 500);
    }
});
