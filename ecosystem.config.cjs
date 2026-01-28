module.exports = {
  apps: [
    {
      name: 'app',
      script: './dist/index.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
    },
    {
      name: 'worker',
      script: './dist/worker.js',
      instances: 'max',
      exec_mode: 'cluster',
      watch: false,
    },
  ]
};