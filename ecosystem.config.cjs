module.exports = {
  apps: [
    {
      name: "likemove360-web",
      script: "./server.js",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      time: true,
      merge_logs: true,
      error_file: "./logs/likemove360-error.log",
      out_file: "./logs/likemove360-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      kill_timeout: 5000,
      listen_timeout: 10000,
      wait_ready: false,
    },
  ],
};
