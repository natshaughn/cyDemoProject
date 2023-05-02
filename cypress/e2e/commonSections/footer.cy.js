    import Footer from "../commonObjects/footer";

    const footer = new Footer();

    describe('Footer tests', () => {
        beforeEach(() => {
            cy.Login('standard_user', 'secret_sauce');
        })

        it('Opens the facebook link', () => {
           footer.openLink(footer.facebookLink);
          // Cant require cy origin variables  
           cy.origin(footer.facebookOrigin, () => {
            fbVisit = '/saucelabs';
            cookie = 'body > div.__fb-light-mode.x1n2onr6.x1vjfegm > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div.xb57i2i.x1q594ok.x5lxg6s.x78zum5.xdt5ytf.x6ikm8r.x1ja2u2z.x1pq812k.x1rohswg.xfk6m8.x1yqm8si.xjx87ck.xx8ngbg.xwo3gff.x1n2onr6.x1oyok0e.x1odjw0f.x1e4zzel.x114jws4 > div.x78zum5.x1iyjqo2.x1n2onr6.xdt5ytf > div > div.xua58t2.xx6bls6';
            acceptCookie = 'body > div.__fb-light-mode.x1n2onr6.x1vjfegm > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div.xzg4506.x1l90r2v.x1pi30zi.x1swvt13 > div > div:nth-child(2) > div.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x1ypdohk.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x87ps6o.x1lku1pv.x1a2a7pz.x9f619.x3nfvp2.xdt5ytf.xl56j7k.x1n2onr6.xh8yej3 > div > div.x6s0dn4.x78zum5.xl56j7k.x1608yet.xljgi0e.x1e0frkt > div > span > span';
            
            cy.visit(fbVisit);
            cy.get(cookie).should('be.visible');
            cy.get(acceptCookie).click();
            // cy.get('head > title').contains('Sauce Labs | Facebook')
           })
           cy.visit('/');
        });

        it.only('Opens the twitter link', () => {
          footer.openLink(footer.twitterLink);
           cy.origin(footer.twitterOrigin, () => {
            twVisit = '/saucelabs';
            cookie = '#layers > div > div:nth-child(2) > div > div > div';
            acceptCookie = '#layers > div > div:nth-child(2) > div > div > div > div.css-1dbjc4n.r-eqz5dr.r-1joea0r.r-1r5su4o > div:nth-child(1) > div';
            login = '#layers > div > div:nth-child(1) > div > div > div > div > div.css-1dbjc4n.r-1ydw1k6 > div > div > div:nth-child(1) > a > div > span > span';
            cy.once('uncaught:exception', () => false);
            cy.visit(twVisit);
            cy.get(cookie).should('be.visible');
            cy.get(acceptCookie).click();
            cy.get(login).should('have.text', 'Log in');
           })
           cy.visit('/');
        });

        it('Opens the linkedin link', {}, () => {
            footer.openLink(footer.linkedInLink);
            cy.origin(footer.linkedInOrigin, () => {
              liVisit = '/authwall?trk=bf&trkInfo=AQEC4wB3d48yaAAAAYe3u1QASJgeU3-YdUxZoKOQLEuymF8hVpse4W0A7kQI9Zks72K1KTlBsk2Kq6z9_hJdW1uk1VZVUSDG2Gj1VY1Lx0p0UNOmH4RE9GoPaybgI1PhwrpJaTc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fsauce-labs%2F';
              signUp = '#main-content > div > form';
              cy.visit(liVisit);
              cy.get(signUp).should('be.visible');
            })
            cy.visit('/');
        });
    })
    


  