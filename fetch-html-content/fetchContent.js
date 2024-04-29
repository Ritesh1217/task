const fs = require('fs-extra');
const axios = require('axios');

async function main() {
    try {
        // Step 1: Read URLs from a file
        const urls = fs.readFileSync('urls.txt', 'utf8').split('\n').filter(url => url.trim() !== '');

        // Step 2: Fetch content concurrently
        const promises = urls.map(async (url, index) => {
            try {
                const response = await axios.get(url);
                // Step 3: Write content to HTML files
                await fs.writeFile(`page${index + 1}.html`, response.data);
                console.log(`Content from ${url} saved to page${index + 1}.html`);
            } catch (error) {
                console.error(`Error fetching or writing content from ${url}: ${error.message}`);
            }
        });

        await Promise.all(promises);
        console.log('All pages saved successfully.');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
