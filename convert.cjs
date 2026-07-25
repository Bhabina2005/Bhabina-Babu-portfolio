const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const srcDir = path.resolve('src');
const files = walk(srcDir);

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    const code = fs.readFileSync(file, 'utf8');
    try {
      const isTsx = file.endsWith('.tsx');
      
      const result = babel.transformSync(code, {
        filename: file,
        presets: [
          '@babel/preset-typescript'
        ],
        plugins: ['@babel/plugin-syntax-jsx'],
        retainLines: true
      });

      let newCode = result.code;
      newCode = newCode.split('\n').filter(line => {
        return !line.includes('import { PortfolioData } from \'../types\'') && 
               !line.includes('import { EducationItem } from \'../types\'') &&
               !line.includes('from \'../types\'');
      }).join('\n');

      const ext = isTsx ? '.jsx' : '.js';
      const newFile = file.replace(/\.tsx?$/, ext);
      
      fs.writeFileSync(newFile, newCode);
      fs.unlinkSync(file);
      console.log('Converted ' + file);
    } catch (e) {
      console.error('Error processing ' + file + ':', e.message);
    }
  }
});
