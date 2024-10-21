async function fetchLinkedInEmail(accessToken) {
    const url = 'https://api.linkedin.com/v2/userinfo';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching email:', errorData);
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('User email:', data.email);
        return data.email;
    } catch (error) {
        console.error('Error fetching email:', error);
    }
}

module.exports = {
    "getEmail": fetchLinkedInEmail,
}