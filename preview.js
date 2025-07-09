const fs = require('fs-extra');
const path = require('path');
const chokidar = require('chokidar');
const dotenv = require('dotenv');
const spawn = require('cross-spawn');

dotenv.config();

const ZENBPM_SRC = process.env.ZENBPM_SRC || '../zenbpm';

async function syncFiles() {
    try {
        await fs.ensureDir('docs');
        await fs.copy(path.join(ZENBPM_SRC, 'docs'), 'docs', { overwrite: true });
        await fs.ensureDir('openapi/redocusaurus');
        await fs.copy(
            path.join(ZENBPM_SRC, 'openapi/api.yaml'),
            'openapi/redocusaurus/api.yaml'
        );
        await fs.ensureDir('proto');
        await fs.copy(
            path.join(ZENBPM_SRC, 'internal/grpc/proto/zenbpm.proto'),
            'proto/zenbpm.proto'
        );
        console.log('Files synchronized successfully');
    } catch (err) {
        console.error('Error syncing files:', err);
    }
}

syncFiles();

const watcher = chokidar.watch(path.join(ZENBPM_SRC, 'docs'), {
    persistent: true,
    ignoreInitial: true
});

watcher.on('all', (event, path) => {
    console.log(`Detected ${event} in ${path}`);
    syncFiles();
});

// Start Docusaurus
const docusaurusProcess = spawn('npx', ['docusaurus', 'start', '--host', '0.0.0.0'], {
    stdio: 'inherit'
});

function cleanup() {
    console.log('Cleaning up...');
    watcher.close();
    if (!docusaurusProcess.killed) {
        docusaurusProcess.kill();
    }
    process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);

docusaurusProcess.on('close', (code) => {
    console.log(`Docusaurus process exited with code ${code}`);
    cleanup();
});
