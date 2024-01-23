**MUSCLEMEAT**


Een geautomatiseerd testscript bij musclemeat.nl te draaien vereist de volgende benodigheden:
- [WebdriverIO](https://webdriver.io/)
- [node.js](https://nodejs.org/en)
- [VScode](https://code.visualstudio.com/)
- jeffreyjongkees@bsure-digital.nl _email account voor testdoeleinden_

**TEST FRAMEWORK**

Om het testscript zo overzichtelijk mogelijk te houden is ervoor gekozen om gebruik te maken van een **P**age **O**bject **M**odel (POM) folder.
- Iedere webpagina heeft zijn eigen file
- Hierin wordt een klasse met alle elementen met bijbehorende selectoren en functies gedefinieerd
- Deze klassen worden in het testscript geimporteerd zodat alle functies aangeroepen kunnen worden

Het script zelf wordt in een _spec_ file gedefinieerd
