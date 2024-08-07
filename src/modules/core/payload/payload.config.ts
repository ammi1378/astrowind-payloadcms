// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


// const generateTitle: GenerateTitle<Page> = ({ doc }) => {
//   return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
// }

// const generateURL: GenerateURL<Page> = ({ doc }) => {
//   return doc?.slug
//     ? `${process.env.NEXT_PUBLIC_SERVER_URL}/${doc.slug}`
//     : process.env.NEXT_PUBLIC_SERVER_URL
// }

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  // cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  // csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  sharp,
  plugins: [
    // seoPlugin({
    //   generateTitle,
    //   generateURL,
    // }),
    // storage-adapter-placeholder
  ],

})
