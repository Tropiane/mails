import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

const templatesPath = path.join(process.cwd(),'src','modules', 'templates');

export const compileTemplate = (templateName: string, data: any) => {
    const templateSource = fs.readFileSync(path.join(templatesPath, `${templateName}.hbs`), 'utf-8');
    const template = handlebars.compile(templateSource);
    return template(data);
}