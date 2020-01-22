[![Netlify Status](https://api.netlify.com/api/v1/badges/e66602c6-9a94-4095-a7c4-4e37ff2cdd41/deploy-status)](https://app.netlify.com/sites/focused-beaver-3cc79d/deploys)

NOTE: This is the codelabs.solace.dev landing page itself; codelabs are kept separately. To contribute CodeLabs to codelabs.solace.dev go to [this repo](https://github.com/SolaceDev/solace-dev-codelabs): 

# Solace CodeLabs landing page
NOTE: Original README for Google CodeLabs platform is at https://github.com/googlecodelabs/tools/blob/master/README.md

## How this is setup
1. Forked Google Codelabs [tools repo](https://github.com/googlecodelabs/tools/)
2. In `site` folder of repo run `git submodule add https://github.com/SolaceDev/solace-dev-codelabs`
3. Run `git add . ; git commit ; git push`
4. On Netlify we setup the following build settings:
  * Base directory: `site`
  * Build command: `gulp dist --codelabs-dir=./solace-dev-codelabs/codelabs && rm dist/codelabs && cp -r solace-dev-codelabs/codelabs dist/codelabs/`
  * Publish directory: `site/dist`

## Site setup
- Codelabs Landing Page will live at: codelabs.solace.dev  
- Individual Codelabs will be available at: `codelabs.solace.dev/codelabs/<codelab-id>`
- Redirect will be available from solace.com/developers -> `solace.dev`
- Redirect dev.solace.com to `solace.dev`

## Instructions for creating/editing Codelabs
- To contribute CodeLabs to codelabs.solace.dev follow the instructions in [this repo.](https://github.com/SolaceDev/solace-dev-codelabs) 
