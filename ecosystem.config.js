module.exports = {
  apps: [
    {
      name: "kanban-web",
      script: "python3",
      args: "-m http.server 8080",
      cwd: "/Users/lionel/.easyclaw/workspace",
      watch: false,
      autorestart: true,
      max_restarts: 10,
      restart_delay: 2000,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "kanban-tunnel",
      script: "cloudflared",
      args: "tunnel --url http://localhost:8080",
      cwd: "/Users/lionel/.easyclaw/workspace",
      watch: false,
      autorestart: true,
      max_restarts: 20,
      restart_delay: 3000,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
