// tsup.config.ts
import { defineConfig } from 'tsup';
import ts from 'typescript';
import path from 'path';

const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
const compilerOptions = configFile.config?.compilerOptions ?? {};

const alias: Record<string, string> = {};
const paths = compilerOptions.paths ?? {};
const baseUrl = compilerOptions.baseUrl ?? '.';

for (const [key, value] of Object.entries(paths)) {
  const aliasKey = key.replace(/\/\*$/, '');
  const aliasPath = (value as string[])[0].replace(/\/\*$/, '');
  alias[aliasKey] = path.resolve(__dirname, baseUrl, aliasPath);
}

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/worker.ts'
  ],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
  outDir: 'dist',
  target: 'node18',
  esbuildOptions(options) {
    options.alias = alias;
  },
});
