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

### Getting setup
1. Clone the repo (recursive initializes all submodules within, using their default settings)
`git clone --recursive git@github.com:SolaceDev/solace-dev-codelabs-site.git`
2. Create new branch `git checkout -b <new-branch>`
3. Install NPM Dependancies `npm install`
4. Install Gulp `npm install --global gulp-cli`
5. Use this Gulp command to serve up a local dev server `gulp serve:dist --codelabs-dir=./solace-dev-codelabs/codelabs && rm dist/codelabs && cp -r solace-dev-codelabs/codelabs dist` - By running `gulp serve` task, all of the tasks specified as dependencies have been run first. Exactly what you want, head over to your browser of choice and open up [http://localhost:8000](http://localhost:8000) in *Incognito*, as it tends to cache otherwise. If all is well, you should hopefully see your CodeLabs site running locally now.

### Making your updates

Steps for adding a new Codelab category (color and SVG icon) card.

1. Open `/site/app/styles/categories.scss`.

2. Scroll down till you see the comment `/* Solace - Custom Colours */`, under this line you will see color variables for existing categories, organized in alphabetical order. Add a new line similar to the example below, name your new color variable for your category and use a associated HEX color code for your new category.
    ```
    $color-java-red: #dc403d;
    ```
3. Scroll down till you see the comment `/* Solace - CSS Classes */`, under this line you will see other variables being used, like the ones created above. Add new lines similar to the example below, use your new color variable, along with the SVG.
    ```
    @include codelab-card(['java'],
    $color-java-red, 'java.svg');
    ```
4. Category icons are located under `site/app/images/` and should be in SVG format, please add your new SVG to this folder.

5. Push

6. Create PR