module.exports = {
    apps: [
        {
            name: "buenity-landing",
            script: "pnpm start -p 6207",
            cwd: "./",
            instances: 1,
            exec_mode: "fork",
            error_file: "./logs/pm2-error.log",
            out_file: "./logs/pm2-out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            merge_logs: true,
            autorestart: true,
            max_restarts: 10,
            min_uptime: "10s",
            max_memory_restart: "1G",
            watch: false,
            ignore_watch: ["node_modules", "logs", ".next"],
        },
    ],
};

