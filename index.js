import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const script = join(import.meta.dirname, 'task.js');

spawnSync('bun', [script, 'src']);
