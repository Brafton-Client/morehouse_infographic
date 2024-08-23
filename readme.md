# Brafton Project
The following is instructions on the workflow for versin controlled projects. This repository is design to be a complete self contained development environment for a project that can than be deployed to the designs.brafton.com server for review.

## Command pallette
- `npm run new-project` will setup a new project.
- `npm run compress` will compress the images in the assets/original folder.
# New Project Setup  
## Step 1: Create the client repository

- Create a new repository on github for your new site build project
    - organization: "brafton-client" https://github.com/Brafton-Client
    - Repository Name: {ClientName}\_{ProjectName} [note: There can be no spaces or dashes. Use underscores( \_ ) for word separation]
> For projects that will use WPPusher to deploy code changes to a production site the theme name and the repo name must match. If you know that this project will deploy to a self hosted server other than WPEngine you must use a proper naming convention now to eliminate problems later.

## Step 2: Create our new project

- clone the basebuild repository ` git clone https://github.com/brafton-client/projectbasebuild {clientName}_{projectName}` to your local computer
- `cd {clientName}_{projectName} ` Inside your new folder run the following commands `npm install `, `npm run new-project`.
- Answer the prompts:
    - You will be asked if you have completed step 1. THIS IS SUPER IMPORTANT. YOU MUST COMPLETE STEP ONE!!!!!!!!!
    - You will be asked the clients name (this needs to contain no spaces or special characters.)
    - You will be asked the project name (this needs to contain no spaces or special characters.)
    - You will be asked the repo name you created in step one.
- This folder will be automatically linked to your newly created repository on github
- "develop" and "beta-build" branches will be created for you automatically and you will be switched over to the "beta-build" branch.
- Initially you can perform your work in "beta-build" until you are ready to deploy to the development server.

## Deploy to designs.brafton.com 
- During the setup process an AWS Pipeline will be created for you automatically and your dev site viewable at https://{clientName}\_{projectName}.designs.brafton.com will be instantly available.
- Each push to your develop branch will cause a deployment to the dev server. 
> This deployment could take up to 10 minutes

# Asset Handling  
This repo provides assistance with assets for the project. All images can be placed in the assets/original folder (can contain subfolders) and those images will be compressed for web and dumped into the compress folder for upload into the site. 
> Be sure to compress ALL images for best performance.

# Git Workflow

Some general helpful tips
> Be sure to keep commits small and detailed.  
> describe each pull request to ensure proper history tracking  
> Use issues to create a list of items you need to work on or features you need to create.  

## Working on your project as the primary developer
When you initially setup your project you will have the following repos.
```
    develop
    beta-build
```
- develop: this branch will deploy your working theme to the development server. You should never push directly into this branch but rather create a pull request from your working branch and merge into develop.

- beta-build: this branch is your initial working branch for a new project.  You should be working in this branch until you are ready to create a deployment as outlined above to the development server.

Once the site is deployed to the development server you should no longer be working in beta-build but rather branch from develop. Use the naming convention "feature/patch-{your-name}-{what you are working on} for easy identification. 

To deploy to the development server create a pull request for your branch and merge into develop.
> be sure to remove the feature branch when you are done with it to keep the repo clean.

Once the site is soft-launched to the clients final server we still want to maintain the development server to be as close to the staging and live deployments as possible. for this we use the wp pusher plugin to deploy to the staging and live sites.  