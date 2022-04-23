

const readmeContent = (readmeContentInfo) => {
    return readmeContentInfo; 
} 

module.exports = readmeTemplateLayout => {
    const {
        name, 
        languages, 
        about, 
        installation, 
        usage, 
        license, 
        questions, 
        contribute, 
        guidLines, 
        testInstructions} = readmeTemplateLayout

    return `
        
        # **${readmeContent(name)}**

        ## **License**
        ${readmeContent(license)}

        ## **Table of contents**
        #

        ## **Description**
        # ${readmeContent(description)}

        ## **Languages**
        # ${readmeContent(languages)}

        ## **Usage**
        # ${readmeContent(usage)}

        ## **Installation Instructions**
        ${readmeContent(InstallationInstructions)}

        ## **Contact Information**
        # ${(readmeContent(contact))}
        
        ## **FAQ**
        # ${(readmeContent(FAQ))}

        ## **How to contribute**
        # ${(readmeContent(contribute))}
    `;
}

