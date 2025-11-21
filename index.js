#!/usr/bin/env node

import { execSync } from 'node:child_process';
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
  .command('apply')
  .description('Applies the Resend style to the current project')
  .action(() => {
    execSync(
      biomeBinaryPath,
      [
        'check',
        '.',
        '--write',
        '--config-path',
        path.resolve(import.meta.dirname, './biome.config.json'),
      ],
      {
        stdio: 'inherit',
        cwd: process.cwd(),
      },
    );
  });

program
  .command('check')
  .description('Applies the Resend style to the current project')
  .action(() => {
    execSync(
      biomeBinaryPath,
      [
        'check',
        '.',
        '--config-path',
        path.resolve(import.meta.dirname, './biome.config.json'),
      ],
      {
        stdio: 'inherit',
        cwd: process.cwd(),
      },
    );
  });
