const fs = require('fs');

const data = {
  'tshirt': [12.99, 11.99, 14.99, 9.99, 16.99],
  'shirt': [19.99, 21.99, 17.99, 24.99, 26.99],
  'paintShort': [12.00, 14.50, 16.50, 18.50, 20.00],
  'jacket': [34.99, 49.99, 69.99, 89.99, 29.99],
  'cap': [8.99, 10.99, 7.99, 9.99, 8.99]
};

for (const [file, prices] of Object.entries(data)) {
  const path = 'src/constants/products/apparel/' + file + '.js';
  let content = fs.readFileSync(path, 'utf8');
  let i = 0;
  content = content.replace(/price:\s*\.,/g, () => `price: ${prices[i++]},`);
  fs.writeFileSync(path, content);
}
