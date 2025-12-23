export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`).then(async res => {
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(text || `Failed to load applications (status ${res.status})`);
        }
        return res.json();
    });
}