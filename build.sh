yarn browserify -e src/index.js -o dist/adder.js --standalone AdderScript
yarn uglifyjs --keep-fnames -o dist/adder.min.js dist/adder.js