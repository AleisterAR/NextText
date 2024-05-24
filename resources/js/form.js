window.f = {
    submit :(submiter) => {
        submiter.setAttribute('disabled', 'true');
        submiter.querySelector('[role="status"]').removeAttribute('hidden');
    },
    submitted : (submiter) => {
        submiter.removeAttribute('disabled');
        submiter.querySelector('[role="status"]').setAttribute('hidden', 'true');
    }
}
