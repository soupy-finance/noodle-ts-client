shopt -s globstar
rm -rf src/modules
mkdir src/modules
cp --parents ../vue/src/store/generated/*/*/*/module/**/*.ts src/modules
mv src/vue src/modules/
mv src/modules/vue/src/store/generated/* src/modules
rm -rf src/modules/vue
