const nodeCmd = require('node-cmd');
nodeCmd.get('git rev-parse --abbrev-ref HEAD', (err, branchName, stderr) => {

    nodeCmd.get('')
    nodeCmd.get(`heroku create github-workshop-${branchName}`);
    nodeCmd.get(`git push heroku github-workshop-${branchName}:master`); 

});