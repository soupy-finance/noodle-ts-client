shopt -s globstar
rm -rf modules
mkdir modules
cp --parents ../vue/src/store/generated/*/*/*/module/**/*.ts modules
mv vue modules/
mv modules/vue/src/store/generated/* modules
rm -rf modules/vue
