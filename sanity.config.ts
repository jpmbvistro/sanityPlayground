import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import { shopstory } from "@shopstory/sanity";
import { mediaAssetSource } from "sanity-plugin-media";

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'darkcyan-meerkat',

  projectId: '7u5w4md1',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(),
    shopstory({
        accessToken: "your-shopstory-access-token",
        canvasUrl: "/shopstory-canvas",
        locales: [
          {
            code: "en",
            isDefault: true,
          },
          {
            code: "de",
            fallback: "en",
          },
        ],
        assetSource: mediaAssetSource,
      }), 
    ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

