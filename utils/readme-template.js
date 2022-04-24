

const readmeContent = (readmeContentInfo) => {
    return readmeContentInfo; 
} 

module.exports = readmeTemplateLayout => {
    const {
        name, 
        languages,
        description, 
        InstallationInstructions, 
        usage,
        contact, 
        license, 
        FAQ, 
        contribute} = readmeTemplateLayout

    return `
# **${readmeContent(name)}**

## **License**
${readmeContent(license)}

## **Table of contents**
- [Description](#Description)
- [Languages](#Languages)
- [Usage](#Usage)
- [Installation Instructions](#Installation Instructions)
- [Contact Information](#Contact Information)
- [FAQ](#FAQ)
- [How to contribute](#How to contribute)

## **Description**
${readmeContent(description)}

## **Languages**
${readmeContent(languages)}

## **Usage**
${readmeContent(usage)}

## **Installation Instructions**
${readmeContent(InstallationInstructions)}

## **Contact Information**
${(readmeContent(contact))}

## **FAQ**
${(readmeContent(FAQ))}

## **How to contribute**
${(readmeContent(contribute))}
    `;
}

