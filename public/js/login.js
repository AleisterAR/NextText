
const form = document.getElementById('login');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    f.submit(e.submitter)
    const data = new FormData(e.target);
    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: new URLSearchParams(data),
        });
        const result = await res.json();
        if (!res.ok) {
            throw result;
        }
        window.location.href = '/dashboard';
    } catch (error) {
        setTimeout(() => {
            e.target.querySelector('.form-alert').classList.remove('invisible')
            f.submitted(e.submitter)
        }, 500);
    }
});
