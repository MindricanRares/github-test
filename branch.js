const nodeCmd = require('node-cmd');
nodeCmd.get('git rev-parse --abbrev-ref HEAD', (err, branchName, stderr) => {
    nodeCmd.get(`heroku create github-workshop-${branchName}`);
});