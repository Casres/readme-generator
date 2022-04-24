

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
        
    ## License
    ${readmeContent(license)}
    
    ## Table of contents
    - [Heading](#heading)
    - [Heading](#heading-1)
    - [Heading](#heading-2)
    
    ## Description
    # ${readmeContent(description)}
    
    ## Languages
    # ${readmeContent(languages)}
    
    ## Usage
    # ${readmeContent(usage)}
    
    ## Installation Instructions
    ${readmeContent(InstallationInstructions)}
    
    ## Contact Information
    # ${readmeContent(contact)}
            
    ## FAQ
    # ${readmeContent(FAQ)}
    
    ## How to contribute
    # ${readmeContent(contribute)}
    `;
}

