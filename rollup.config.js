import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
// import autoprefixer from "autoprefixer";

const pkg = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: pkg.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                minimize: true,
                sourceMap: true,
                autoModules: true,
                plugins: [
                    // autoprefixer()
                ],
            }),
        ],
        external: Object.keys(pkg.peerDependencies)
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [
            {
                file: "dist/index.d.ts", 
                format: "esm", 
                sourcemap: true,
            }
        ],
        plugins: [dts()],
    }
]