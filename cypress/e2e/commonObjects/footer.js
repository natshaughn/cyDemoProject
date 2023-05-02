class Footer
{
    facebookLink = '.social_facebook > a';
    facebookOrigin = 'https://www.facebook.com';
    twitterLink = '.social_twitter > a';
    twitterOrigin = 'https://twitter.com';
    linkedInLink = '.social_linkedin > a';
    linkedInOrigin = 'https://www.linkedin.com';


    removeTargetAttr(socialLink)
    {
        cy.get(socialLink).invoke('removeAttr', 'target').click();
    }

    openLink(socialLink)
    {
        cy.get(socialLink).click()
    }
}

export default Footer;