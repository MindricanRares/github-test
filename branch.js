const nodeCmd = require('node-cmd');
nodeCmd.get('git rev-parse --abbrev-ref HEAD', (err, branchName, stderr) => {
    console.log("Wohooooo");
    nodeCmd.get(`heroku create github-workshop-${branchName}`);
    nodeCmd.get(`heroku git:remote -a github-workshop-${branchName}`); 
    nodeCmd.get(`git push heroku master`); 

});