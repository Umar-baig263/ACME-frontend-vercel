import fs from 'fs';

const replaces = [
  { file: 'src/constants/corporateGiftingData.js', from: '"./bottleS"', to: '"./bottles"' },
  { file: 'src/constants/corporateGiftingData.js', from: "'./bottleS'", to: "'./bottles'" },
  { file: 'src/views/Website/components/AboutUs/Section2.jsx', from: '"../../../../Utils/const"', to: '"../../../../utils/const"' },
  { file: 'src/views/Website/components/AboutUs/Section2.jsx', from: "'../../../../Utils/const'", to: "'../../../../utils/const'" },
  { file: 'src/views/Website/components/ItSolution/section5.jsx', from: '"../../../../Utils/const"', to: '"../../../../utils/const"' },
  { file: 'src/views/Website/components/ItSolution/section5.jsx', from: "'../../../../Utils/const'", to: "'../../../../utils/const'" },
  { file: 'src/views/Website/components/ItSolution/Section6.jsx', from: '"../../../../Utils/const"', to: '"../../../../utils/const"' },
  { file: 'src/views/Website/components/ItSolution/Section6.jsx', from: "'../../../../Utils/const'", to: "'../../../../utils/const'" },
  { file: 'src/views/Website/pages/Products/CardsPro.jsx', from: '"../../components/Products/cardSec1"', to: '"../../components/Products/CardSec1"' },
  { file: 'src/views/Website/pages/Products/CardsPro.jsx', from: "'../../components/Products/cardSec1'", to: "'../../components/Products/CardSec1'" },
  { file: 'src/views/Website/pages/Products/CoppratePro.jsx', from: '"../../../../constants/bottleS"', to: '"../../../../constants/bottles"' },
  { file: 'src/views/Website/pages/Products/CoppratePro.jsx', from: "'../../../../constants/bottleS'", to: "'../../../../constants/bottles'" }
];

for (const rep of replaces) {
  try {
    let content = fs.readFileSync(rep.file, 'utf8');
    if (content.includes(rep.from)) {
      content = content.replace(rep.from, rep.to);
      fs.writeFileSync(rep.file, content);
      console.log('Fixed', rep.file);
    }
  } catch(e) { }
}
