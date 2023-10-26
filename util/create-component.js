require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

const camelCase = function (input) {
	return input.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
};
const pascalCase = function (input) {
	return input[0].toUpperCase() + input.slice(1);
};

const snakeCase = function (input) {
	return input.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`).slice(1);
};

const dashCase = function (input) {
	return input.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).slice(1);
};

if (!componentName) {
	console.error('Please supply a valid PascalCase component name'.red);
	process.exit(1);
}

const componentNames = {
	camelCase: camelCase(componentName),
	pascalCase: pascalCase(componentName),
	snakeCase: snakeCase(componentName),
	dashCase: dashCase(componentName),
};
console.log('Creating Component Templates with name: ' + componentNames.camelCase);

const componentDirectory = `./src/components/ui/${componentNames.camelCase}`;

if (fs.existsSync(componentDirectory)) {
	console.error(`Component ${componentNames.camelCase} already exists.`.red);
	process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentNames));

generatedTemplates.forEach((template) => {
	fs.writeFileSync(`${componentDirectory}/${template.name}${template.extension}`, template.content);
});

console.log('Successfully created component under: ' + componentDirectory.green);
