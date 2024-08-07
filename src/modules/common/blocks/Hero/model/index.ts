import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";
import linkGroup from "../../links/model/linkGroup";

export const HeroBlockModel: Block = {
  slug: "HeroBlock",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },

    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },
    linkGroup()
  ],
  interfaceName: "HeroBlock",
};
