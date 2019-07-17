[![Netlify Status](https://api.netlify.com/api/v1/badges/b90d4895-1340-4831-a0cb-21ac6f8c36b6/deploy-status)](https://app.netlify.com/sites/musing-darwin-82a461/deploys)

NOTE: Original README for Google CodeLabs platform is at https://github.com/googlecodelabs/tools/blob/master/README.md

# Solace CodeLabs landing page
## How this is setup
1. Forked Google Codelabs [tools repo](https://github.com/googlecodelabs/tools/)
2. In `site` folder of repo run `git submodule add https://github.com/SolaceDev/solace-dev-codelabs`
3. Run `git add . ; git commit ; git push`
4. On Netlify we setup the following build settings:
  * Base directory: `site`
  * Build command: `gulp dist --codelabs-dir=./solace-dev-codelabs/codelabs && rm dist/codelabs && cp -r codelabs/codelabs dist/`
  * Publish directory: `site/dist`

## Site setup
- Codelabs Landing Page will live at: solace.dev/codelabs  
- Individual Codelabs will be available at: solace.dev/codelabs/<codelab-id> 
- Redirect will be available from solace.com/developers -> `solace.dev`
- Redirect dev.solace.com to `solace.dev`

## Instructions for creating/editing Codelabs
