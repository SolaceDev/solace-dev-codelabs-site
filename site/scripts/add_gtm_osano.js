const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const replace = require('replace-in-file');

const codelabs_dir = "../site/solace-dev-codelabs/codelabs"
const head_inject = `\
  <!-- Osano -->
  <script src="https://cmp.osano.com/AzZrhlTmT5f216Foa/84ba7dc4-a4e5-4b02-b120-977eb6f052d4/osano.js"></script> \n\
  <!-- End Osano -->

  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': \n\
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], \n\
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= \n\
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); \n\
    })(window,document,'script','dataLayer','GTM-KLSDFH');\n\
  </script> \n\
  <!-- End Google Tag Manager -->

</head>
`
const body_inject = `\
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLSDFH"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
`

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

getFiles(codelabs_dir)
  .then(files => {
    files.map(file => {
      if (file.includes("index.html")) {
        var replace_head = {
          files: file,
          from: '</head>',
          to: head_inject
        }
        var replace_body = {
          files: file,
          from: '<body>',
          to: body_inject
        }
        try {
          var results = replace.sync(replace_head);
          console.log('Replacement results:', results);
          results = replace.sync(replace_body);
          console.log('Replacement results:', results);
        }
        catch (error) {
          console.error('Error occurred:', error);
        }
      }
    })
  })
  .catch(e => console.error(e));