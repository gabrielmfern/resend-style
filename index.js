#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import url from 'node:url';
import { program } from 'commander';
import packageJson from './package.json' with { type: 'json' };

program
  .name('resend-style')
  .description('The style Resend uses for all examples, apps, and internals')
  .version(packageJson.version);

const biomeBinaryUrl = import.meta.resolve('@biomejs/biome/bin/biome');
const biomeBinaryPath = url.fileURLToPath(biomeBinaryUrl);

program
  .command('lint:fix')
  .description('Applies the Resend style to the current project')
  .action(() => {
    const biome = spawnSync(
      biomeBinaryPath,
      [
        'check',
        '.',
        '--write',
        '--config-path',
        path.resolve(import.meta.dirname, './biome.json'),
      ],
      {
        stdio: 'inherit',
        cwd: process.cwd(),
      },
    );

    if (biome.error) {
      throw biome.error;
    }
  });

program
  .command('lint')
  .description('Checks if the project conforms to the Resend style')
  .action(() => {
    const biome = spawnSync(
      biomeBinaryPath,
      [
        'check',
        '.',
        '--config-path',
        path.resolve(import.meta.dirname, './biome.json'),
      ],
      {
        stdio: 'inherit',
        cwd: process.cwd(),
      },
    );

    if (biome.error) {
      throw biome.error;
    }
  });

program.parse();
