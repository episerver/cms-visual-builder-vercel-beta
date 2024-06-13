// Environment file parsing and updating
import * as DotEnv from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import fs from 'node:fs'
import figures from 'figures'
import chalk from 'chalk'

// Process environment files, to ensure the enviornment configuration is applied
const envFiles : string[] = [".env", ".env.local"]
if (process.env.NODE_ENV) {
    envFiles.push(`.env.${ process.env.NODE_ENV }`)
    envFiles.push(`.env.${ process.env.NODE_ENV }.local`)
}
envFiles.map(s => path.join(process.cwd(), s)).filter(s => fs.existsSync(s)).reverse().forEach(fileName => {
    var result = DotEnv.config({ path: fileName, override: false })
    expand(result)
    console.log(`${ chalk.greenBright(figures.tick) } Processed ${fileName}`)
})

// Actual code generation setup
import { CodegenConfig } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset, { type PresetOptions as OptimizelyGraphPresetConfig } from '@remkoj/optimizely-graph-functions/preset'
 
const config: CodegenConfig = {
  schema: getSchemaInfo(),
  documents: [
    'src/**/*.jsx',
    'src/**/*.tsx',
    'src/**/*.graphql'
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: OptimizelyGraphPreset,
      presetConfig: {
        gqlTagName: 'gql',
        recursion: false,
        injections: [
            {
                // Add from all pages, except colocated blocks
                into: "PageData",
                pathRegex: "src\/components\/page\/.+(?<!\.block)\.[tj]sx$"
            },
            {
                // Add blocks colocated with pages
                into: "BlockData",
                pathRegex: "src\/components\/page\/.+\.block\.[tj]sx$"
            },
            {
                // Add from all blocks 
                into: "BlockData",
                pathRegex: "src\/components\/component\/block\/.+\.[tj]sx$"
            },
            {
                // Add from all elements
                into: "ElementData",
                pathRegex: "src\/components\/component\/element\/.+\.[tj]sx$"
            },
            {
                // Add all block fragments from GraphQL files
                into: "BlockData",
                pathRegex: "\.block\.graphql$"
            },
            {
                // Add all component fragments from GraphQL files
                into: "BlockData",
                pathRegex: "\.component\.graphql$"
            },
            {
                // Add all page fragments from GraphQL files
                into: "PageData",
                pathRegex: "\.page\.graphql$"
            },
            {
                // Add all experience fragments from GraphQL files
                into: "PageData",
                pathRegex: "\.experience\.graphql$"
            },
            {
                // Add all element fragments from GraphQL files
                into: "ElementData",
                pathRegex: "\.element\.graphql$"
            }
        ]
      } as OptimizelyGraphPresetConfig,
    }
  }
}
 
export default config