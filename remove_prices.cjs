const fs = require('fs');

const files = ['tshirt', 'shirt', 'paintShort', 'jacket', 'cap'];

for (const file of files) {
  const path = 'src/constants/products/apparel/' + file + '.js';
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/\s*price:\s*[^,]+,/g, '');
  fs.writeFileSync(path, content);
}
