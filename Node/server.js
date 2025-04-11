import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to dynamically import all server files
async function startAllServers() {
    const taskDir = join(__dirname, 'task');
    const files = await fs.readdir(taskDir);
    
    for (const file of files) {
        if (file.startsWith('server') && file.endsWith('.js')) {
            try {
                const serverModule = await import(`./task/${file}`);
                console.log(`Started ${file}`);
            } catch (error) {
                console.error(`Error starting ${file}:`, error);
            }
        }
    }
}

// Start all servers
startAllServers().catch(console.error);