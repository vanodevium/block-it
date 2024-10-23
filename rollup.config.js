import copy from "rollup-plugin-copy";
import filesize from 'rollup-plugin-filesize';
import { minify } from "rollup-plugin-esbuild-minify";
import { createTransform } from "rollup-copy-transform-css";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/block-it.cdn.js",
      format: "umd",
      name: "BlockIT",
    },
    {
      file: "dist/block-it.cdn.min.js",
      format: "umd",
      name: "BlockIT",
      compact: true,
      plugins: [minify()],
    },
  ],
  plugins: [
    filesize(),
    copy({
      targets: [
        {
          src: "styles/block-it.css",
          dest: "dist",
          rename: 'block-it.min.css',
          transform: createTransform({
            inline: true,
            minify: { fast: true },
          }),
        },
      ],
    }),
  ],
};
