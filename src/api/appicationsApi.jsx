export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/applications?email=${email}`).then(async res => {
        if (!res.ok) {
            const text = await res.text().catch(() => '');
            throw new Error(text || `Failed to load applications (status ${res.status})`);
        }
        return res.json();
    });
}

export const deleteApplication = async (applicationId) => {
    const res = await fetch(`http://localhost:3000/applications/${applicationId}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Failed to delete application (status ${res.status})`);
    }
    return res.json();
}