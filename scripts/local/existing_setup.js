var prompt = require('prompt');
const package = require('../../package.json');
const simpleGit = require('simple-git');
const git = simpleGit();
const colors = require("colors/safe");
const createFile = require("./utils.js").createFile;
if(package.name == 'basebuild'){
    console.log(colors.magenta("New Project Setup has NOT been completed. If you have freshly cloned the basebuild repository to begin a new sitebuild project you must run ")+colors.cyan(" `npm run new-project`")+colors.magenta(" to complete the local setup"));
    return;
}
var gitManipulations = async ()=>{
    var lastGitOperation = await git.subModule(["update", "--init", "--recursive"]).subModule(["foreach", "git","checkout", "master"]).subModule(["foreach", "git", "pull", "origin","master"]).add(["-A"]).commit("Initialize and update submodules");
   return lastGitOperation;
};
var fileManipulations = async()=>{
    var htaccess = `Options +FollowSymLinks
RewriteEngine On
RewriteCond %{HTTP_HOST} localhost:8000$
RewriteRule ^wp\-content/uploads/(.*)$ https://${BasicAWSRepoQuestions.name}_${BasicAWSRepoQuestions.project}.designs.brafton.com/wp-content/uploads/$1? [L,R=301]

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
                    `;
                    var access = await createFile("wp/.htaccess", htaccess);
                    return access;
}
fileManipulations().then((res)=>{
    gitManipulations().then(_res=>{

    })
})