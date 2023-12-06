[![Netlify Status](https://api.netlify.com/api/v1/badges/e66602c6-9a94-4095-a7c4-4e37ff2cdd41/deploy-status)](https://app.netlify.com/sites/codelabs-solace/deploys)

# Solace Codelabs landing page
[The Solace Codelabs](https://codelabs.solace.dev/) landing page that is based on the [Google Codelabs tool](https://github.com/googlecodelabs/tools)
Note: This is the codelabs.solace.dev landing page itself; individual codelabs are kept separately here https://github.com/SolaceDev/solace-dev-codelabs

## Run locally
1. Clone the repo and initialize all submodules recursively `git clone --recursive https://github.com/SolaceDev/solace-dev-codelabs-site.git`
1. Navigate to the `/site` directory
1. Install node dependencies `npm install`
1. Serve up a local server `npm run serve`
1. Navigate to [http://localhost:8000](http://localhost:8000) and see the codelabs running locally

Note: To avoid caching issues, either disable caching from the browser developer tools or open in incognito

## Netlify setup
1. Set the base directory to `/site`
1. Configure the build command as follows `gulp dist --codelabs-dir=./solace-dev-codelabs/codelabs && rm dist/codelabs && cp -r solace-dev-codelabs/codelabs dist/codelabs/`
1. Set the publish directory to `site/dist`

## Contributing

Adding new category (color and SVG icon) card.

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
