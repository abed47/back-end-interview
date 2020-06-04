import path from 'path';
import {createWriteStream} from 'fs';

const storeUpload = ({ stream, filename}) => {
  new Promise((resolve, reject) => {
    stream.pipe(createWriteStream(path.join(__dirname, "uploads/", filename)))
    .on("finish", () => resolve())
    .on("error", reject)
  })
}

export default {
    Query: {
        getUser: (parent, args, {models}) => {
            models.findOne({where: {id}})
        },
        uploads: (parent, args) => {}
    },

    Mutation: {
        createUser: async (parent, args, {models}) => {
           return await models.user.create(args)
        },

        singleUpload: async (parent,args) => {
          const { stream, filename } = await args.file;

          await storeUpload({ stream, filename });

          return args.file.then(file => {
            return file;
          })
        }
    }
}
