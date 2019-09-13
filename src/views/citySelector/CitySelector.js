import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import EmptyHeader from "../../components/HeaderEmpty";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";
import "./CitySelector.css";

const DenHaag = {
  // map: require("../../assets/Maps/DH.png"),
  workshops: [
    {
      title: "Extern inhuren, wat komt er allemaal bij kijken",
      location: "Zaal 3",
      leader: "Ank Mokveld",
      text:
        "Dat kan de UBR Inhuurdesk je haarfijn uit de doeken doen. Tijdelijk capaciteit, handjes of kennis inhuren, daar komt tegenwoordig nogal wat bij kijken. Naast de steeds veranderende wet- en regelgeving, raakt externe inhuur ook verschillende disciplines zoals HRM, management en inkoop. Voor de UBR Inhuurdesk is het inhuren van externen dagelijks kost. De UBR Inhuurdesk adviseert rijksorganisaties bij het werven en inhuren van externe medewerkers voor tijdelijke functies en opdrachten, biedt ondersteuning op maat en werft en huurt tijdelijke medewerkers in. Dus kan je wel wat hulp gebruiken bij het inhuren van externen, wil je meer weten over de mogelijkheden van externe inhuur of heb je andere vragen op dit gebied grijp dan je kans en kom naar deze workshop. ",
      smallImage: require("../../assets/Workshops/DenHaag/1-Ank-Mokveld.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/1-Ank-Mokveld-Groot.jpg")
    },
    {
      title: "Van papier naar praktijk: inleiding in de gedragsverandering ",
      location: "Zaal 1",
      leader: "Mandy de Visser",
      text:
        "In ronkende (beleids)taal staat beschreven hoe we de toekomst voor ons zien. Een toekomst met duurzaam inzetbare medewerkers en inclusieve teams die optimaal presteren in een prettige werkomgeving. De praktijk is alleen een stuk rommeliger en niet zo heel makkelijk te veranderen. Want hoe doorbreek je de vaste gewoontes van medewerkers en leidinggevenden? Een toverstokje is er niet, maar met behulp van communicatie kun je het gedrag van mensen wel beïnvloeden. In deze workshop leer je hoe je dat gedrag in je organisatie kunt analyseren en de beste interventies kunt kiezen.",
      smallImage: require("../../assets/Workshops/DenHaag/2-Mandy-Visser.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/2-Mandy-Visser-Groot.jpg")
    },
    {
      title: "Organisatie Ontwikkeling: De sleutelrol van medewerkers",
      location: "Zaal 2",
      leader: "Jason Gawke & Lea Mazor",
      text:
        "Organisatie ontwikkeling gaat per definitie over het functioneren van de organisatie in de toekomst, maar hoe medewerkers - in het hier en nu - hun werk invullen, is daarbij bepalend. In deze workshop maak je kennis met state of the art inzichten over hoe je als HR professional medewerkers hierin kan activeren en hoe je rekening houdt met hun individuele verschillen. ",
      smallImage: require("../../assets/Workshops/DenHaag/3-Jason-Gawke.png"),
      bigImage: require("../../assets/Workshops/DenHaag/3-Jason-Gawke-Groot.png")
    },
    {
      title: "Route naar een inclusieve cultuur",
      location: "Zaal 4",
      leader: "Annick Smit & Bouchra Talidi",
      text:
        "De rijksoverheid heeft diversiteit en inclusie tot een van haar belangrijkste speerpunten benoemd voor de komende jaren. P&O’ers, beleidsadviseurs en leidinggevenden spelen een prominente rol bij het creëren van een werkomgeving waar iedereen zich gewaardeerd en thuis voelt. Dat doet er toe, want in een inclusieve cultuur zijn mensen productiever, creatiever en effectiever. In deze workshop delen Bouchra Talidi en Annick Smits waardevolle tips én minder succesvolle ervaringen over Diversiteit & Inclusie beleid binnen het ministerie. Loop weg met concrete ideeën over aan welke knop(pen) jij kunt gaan draaien binnen je werkomgeving. Bouchra Talidi (programma manager) en Annick Smits werken voor het programma Diversiteit & Inclusie binnen het ministerie van Sociale Zaken en Werkgelegenheid. ",
      smallImage: require("../../assets/Workshops/DenHaag/4-Bouchra-Annick.png"),
      bigImage: require("../../assets/Workshops/DenHaag/4-Bouchra-Annick-Groot.png")
    },
    {
      title: "Dress how you want to be addressed!",
      location: "Zaal 7",
      leader: "Simone Kiers",
      text:
        "Welke eerste indruk maak jij? En komt die overeen met wat je wilt uitstralen? Twijfel je over welke kleuren, kleding en accessoires bij je passen? Ik help je je persoonlijke stijl te optimaliseren door middel van onder andere een kleur- en figuuranalyse. Verder benadruk ik het belang van een goede basisgarderobe en garderobeplanning. Je krijgt meer inzicht hoe je mooie en trendy combinaties kan maken, zodat je miskopen voorkomt en geld bespaart! Zo word jij de beste en mooiste versie van jezelf en ga je dit ook uitstralen! Dress for success!",
      smallImage: require("../../assets/Workshops/DenHaag/5-Simone-Kiers.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/5-Simone-Kiers-Groot.jpg")
    },
    {
      title: "FGR inzetten bij wendbaar organiseren",
      location: "Zaal 5",
      leader: "Regina Koning",
      text:
        "Een flexibel functiegebouw Rijk geeft ruimte aan mens en organisatie Medewerkers en organisaties worden niet wendbaarder door dat van bovenaf op te leggen. Dat gebeurt alleen als iedereen de mogelijkheden ontdekt en daar ook voordeel in ontdekt en ervaart. Dat betekent soms een andere manier van samenwerken binnen de organisatie, waarbij medewerkers en managers samen invulling kunnen geven aan de ruimte die geboden wordt. Die ruimte kan door medewerker en management gebruikt worden om zich in te zetten op verschillende plekken, of door wisselende teams samen te stellen, afhankelijk van de vraag, interesse en het werkaanbod. Organisaties kunnen zo experimenteren, innoveren en nieuwe vaardigheden aanleren. Benieuwd hoe het FGR hierop in kan spelen en daarvoor door jou gebruikt kan worden? Geef je dan op voor de workshop! ",
      smallImage: require("../../assets/Workshops/DenHaag/6-ReginaKoning.png"),
      bigImage: require("../../assets/Workshops/DenHaag/6-ReginaKoning-Groot.png")
    },
    {
      title: "Adaptieve Krijgsmacht",
      location: "Zaal 8",
      leader: "Ernst Lobbezoo",
      text:
        "Defensie is na jarenlange bezuinigingen snel aan het versterken en innoveren. Dat is nodig omdat de veiligheid van Nederland –en de landen waar we worden ingezet- steeds vaker en gevarieerder onder druk staat. Defensie staat daarbij garant voor haar maatschappelijke opdracht. Zij kan en wil die rol niet alleen invullen, en kiest er strategisch voor om haar uitdagingen genetwerkt met civiele en militaire partners op te lossen. Dat heeft verregaande implicaties voor het HR-stelsel. Omdenken en kantalen van een ‘optimaal gesloten P-organisatie’ naar verregaande ‘genetwerkte samenwerking’ en de opbouw van een hoogwaardige flexibele workforce vraagt om leidershap en creativiteit. Werkgeverschap in een ecosysteem, waar loopt Defensie tegen aan? Kolonel Ernst Lobbezoo neemt ons mee op de door defensie ingeslagen reis naar de Adaptieve Krijgsmacht,  die de Nederlandse krijgsmacht wendbaarder en slagvaardiger gaat maken in een onvoorspelbare en onvoorstelbare veiligheidsomgeving en dat combineert met innovatiever en aantrekkelijker werkgeverschap.",
      smallImage: require("../../assets/Workshops/DenHaag/7-Ernst-Lobbezoo.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/7-Ernst-Lobbezoo-Groot.jpg")
    },
    {
      title: " Dilemmalogica: leg het probleem op tafel ",
      location: "Zaal 6",
      leader: "Guido Rijnja",
      text:
        "Waarom focussen we bij communicatie zoveel op opbrengsten en uitkomsten? Je krijgt veel meer steun bij contact over het probleem. Dilemmalogica’ staat voor eerste hulp bij ordening van ongemak. ‘Elk nadeel heb se voordeel’, noemde Johan Cruijif dat. Of anders om. Wie maar één kant belicht, laat een kans liggen op écht contact. Ervaringen met deze insteek bij diverse kabinetsthema’s maakt duidelijk wat kansen zijn van eerdere actieve openheid, en ook welke risico’s eraan verbonden zijn. Guido Rijnja van de Rijksvoorlichtingsdienst neemt ons mee in ervaringen en daagt uit tot toepassing op eigen casuïstiek. ",
      smallImage: require("../../assets/Workshops/DenHaag/8-Guido-Rijnja.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/8-Guido-Rijnja-Groot.jpg")
    },
    {
      title: "Ambitie als lifestyle",
      location: "Zaal 16",
      leader: "Lidewey van der Sluis",
      text:
        "Aan de hand van academische kennis en praktische inzichten zal op inspirerende en informatieve wijze worden besproken hoe medewerkers, teams en organisaties kunnen gaan bruisen van de energie. De perspectieven vanuit het individu en de organisatie wisselen elkaar af en lopen aan het eind in elkaar over. Deze sessie is een verdieping van de keynotesessie. ",
      smallImage: require("../../assets/Workshops/DenHaag/9-Lidewey.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/9-Lidewey-Groot.jpg")
    },
    {
      title: "What makes you tick?! Waarom doe ik wat ik doe?",
      location: "Zaal 15",
      leader: "Ellen Viergever & Henk Van der Steen",
      text:
        "Waarom werk je voor de Rijksoverheid? Wat motiveert jou? Wat maakt het werken voor de publieke zaak zo bijzonder? Wat geeft jou energie op je werk? En hoe zit dat in deze tijden van grote veranderingen? Onze SG’s willen met elkaar werken aan de organisatie ontwikkeling bij het Rijk en zijn benieuwd naar antwoorden op deze vragen. Om vervolgens ook weer beter in staat te zijn om antwoorden te kunnen formuleren op de uitdagingen die ons als Rijksoverheid te wachten staan. Vanuit de kern dus, de bedoeling, de ‘purpose’ van ons werk. In deze workshop ga je op een bijzondere manier met collega’s in gesprek, hoor je inspirerende verhalen en ga je met nieuwe energie weer naar buiten! Deze workshop is onderdeel van een ontdekkingstocht naar de purpose van het Rijk die het komende jaar door veel verschillende plekken binnen de Rijksoverheid trekt ",
      smallImage: require("../../assets/Workshops/DenHaag/10-Ellen-Viergever.JPG"),
      bigImage: require("../../assets/Workshops/DenHaag/10-Ellen-Viergever-Groot.png")
    },
    {
      title: "Cultuur als ontbijt",
      location: "Zaal 14",
      leader: "Jan Peter Kuiper ",
      text:
        "“Culture eats strategy for breakfast” zei Peter Drucker. Torben Rick maakte daar in 2014 “Organizational culture eats strategy for breakfast, lunch and dinner”. Maar wat is organisatiecultuur nu precies, wat kunnen we er mee en waarom is het zo belangrijk? In deze workshop maken we kennis met het begrip organisatiecultuur, we kijken naar het effect dat (cultuur) verschillen hebben op samenwerking en wat we daaruit voor ons zelf en ons P&O werk kunnen leren. De workshop is een combinatie van theorie en achtergronden, en groeps- en individuele oefeningen. De workshop wordt gegeven door drs Jan-Peter Kuiper. Jan-Peter is organisatie antropoloog en adviseur. Hij werkt bij het ministerie van Justitie en Veiligheid aan de dossiers ‘ongeschreven regels’, ‘samenwerken’ en ‘organisatie inrichting’. Daarnaast begeleidt hij als een van de oprichters van The Rebel Alliance cultuurveranderingstrajecten en reorganisaties bij onder meer overheden en onderwijs. ",
      smallImage: require("../../assets/Workshops/DenHaag/11-Jan-Peter.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/11-Jan-Peter-Groot.jpg")
    }
  ],
  programma: [
    {
      eventInfo: {
        time: "9:30",
        name: "Inloop + infomarkt",
        location: "Cateringplein",
        text: `We heten je van harte welkom op de P&O Dagen Rijk 2019. We nodigen je graag uit om een kijkje te nemen bij de verschillende stands. Ben je bijvoorbeeld op de hoogte van de verschillende opleidingen die de RAFEB aanbiedt? Of welke loopbaanstappen en leerlijnen er zijn voor de lage loonschalen?`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "10:15",
        name: "Start plenair programma",
        location: "Motorruimte",
        text: `De plenaire opening kent een druk bezet programma! De dagvoorzitter, Sicco Louw (Interim Directeur P&O en Directeur BZK flex) opent. De keynote spreekster, professor Lidewey van der Sluis aan Nyenrode Business Universiteit, zal daarna het woord nemen. Bekend om haar expertise en scherpe visie op leiderschap, trends op de arbeidsmarkt en ontwikkeling op de organisatie en talentmanagemt, neemt Lidewey je mee in de meest actuele themas rondom P&O en organisatieontwikkeling. Na de keynote zal Ellen Viergiever (DT lid Organisatie Ontwikkeling Rijk) het thema "Organisatie Ontwikkeling" bij het Rijk toelichten, gevolgd door een bankgesprek met verschillende sprekers over dit thema. Voel je vrij om vragen te stellen tijdens het bankgesprek!`,
        banner: require("../../assets/Program/Banner2.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "12:00",
        name: "Lunch + infomarkt",
        location: "Cateringplein",
        text: `Tijdens de lunch worden verschillende versnaperingen geserveerd. Je wordt aangemoedigd om met een broodje (en/of een kop koffie) in de hand een kijkje te nemen bij de verschillende stands. Ben je bijvoorbeeld bekend met de WRNA? Of wil je een leuke foto met collega's maken in de Fotobooth?`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "13:15",
        name: "Workshopronde 1",
        button: true
      }
    },
    {
      eventInfo: {
        time: "14:30",
        name: "Pauze",
        location: "Cateringplein",
        text:
          "De pauze is het moment om samen met je collega's te reflecteren op de belangrijkste inzichten uit de workshops. Vergeet ook niet feedback te geven in de app over de workshop die je hebt bijgewoond!",
        banner: require("../../assets/Program/Banner3.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "15:00",
        name: "Workshopronde 2",
        button: true
      }
    },
    {
      eventInfo: {
        time: "16:15",
        name: "Plenaire afsluiting",
        location: "Motorrplein",
        text: `Zoals elk jaar kent de afsluiting van de P&O dagen Rijk een afsluiting met een knipoog. Na een korte samenvatting en reflectie van Sicco zal niemand anders Harry Glotzbach (onder andere finalist Leids Cabaret Festival en winnaar van het het Amsterdams Kleinkunst Festival Comedy Concours) de afsluiting verzorgen. Laat je verrassen door zijn bizar grappige kijk op de wereld om hem heen.`,
        banner: require("../../assets/Program/Banner2.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "16:45",
        name: "Netwerkborrel",
        location: "Cateringplein",
        text: `Sluit de dag af met een gezellig drankje en borrel hapje. We hopen dat je kan terugkijken op een geslaagde P&O dag Rijk. Vergeet niet de algehele evaluatie in te vullen en je ervaring met ons te delen.`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {}
    }
  ]
};

const Nieuwegein = {
  workshops: [
    {
      title: "Wendbaar werken",
      location: "Zaal 8",
      leader: "Ruud van Rheenen",
      text:
        "'Er is niets gevaarlijker dan over een ravijn springen in twee sprongen.' Mensen en organisaties staan in steeds grotere mate voor de uitdaging wendbaar in te spelen op de veranderingen in het werk, technologische ontwikkelingen en de trends in de samenleving De opgaven waar overheden aan bijdragen kiezen zij niet meer alleen, maar in nauw contact met hun omgeving of het overkomt ze zelfs. Het werken aan veranderende opgaven, waarin invloed en besluitvorming samen met partners gebeurt is nieuwe werkelijkheid en vraagt om het vermogen de eigen rol en koers snel en effectief te veranderen. Dit vraagt om andere vormen van leiderschap, een hoge mate van autonomie en resultaatverantwoordelijkheid én nieuwe manieren om de ambities en talenten van alle medewerkers optimaal te benutten. Maar hoe werkt dat in de praktijk? In deze workshop geeft Ruud van Rheenen, specialist op het gebied van Wendbaar Werken, inzicht in de manier waarop diverse organisaties concreet invulling geven aan deze uitdaging. ",
      bigImage: require("../../assets/Workshops/Nieuwegein/1-Ruud-groot.png"),
      smallImage: require("../../assets/Workshops/Nieuwegein/1-Ruud-klein.png")
    },
    {
      title: "Van papier naar praktijk: inleiding in de gedragsverandering ",
      location: "Zaal 5",
      leader: "Mandy de Visser",
      text:
        "In ronkende (beleids)taal staat beschreven hoe we de toekomst voor ons zien. Een toekomst met duurzaam inzetbare medewerkers en inclusieve teams die optimaal presteren in een prettige werkomgeving. De praktijk is alleen een stuk rommeliger en niet zo heel makkelijk te veranderen. Want hoe doorbreek je de vaste gewoontes van medewerkers en leidinggevenden? Een toverstokje is er niet, maar met behulp van communicatie kun je het gedrag van mensen wel beïnvloeden. In deze workshop leer je hoe je dat gedrag in je organisatie kunt analyseren en de beste interventies kunt kiezen.",
      smallImage: require("../../assets/Workshops/DenHaag/2-Mandy-Visser.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/2-Mandy-Visser-Groot.jpg")
    },
    {
      title: "Organisatie Ontwikkeling: De sleutelrol van medewerkers",
      location: "Zaal 9",
      leader: "Jason Gawke",
      text:
        "Organisatie ontwikkeling gaat per definitie over het functioneren van de organisatie in de toekomst, maar hoe medewerkers - in het hier en nu - hun werk invullen, is daarbij bepalend. In deze workshop maak je kennis met state of the art inzichten over hoe je als HR professional medewerkers hierin kan activeren en hoe je rekening houdt met hun individuele verschillen. ",
      smallImage: require("../../assets/Workshops/DenHaag/3-Jason-Gawke.png"),
      bigImage: require("../../assets/Workshops/DenHaag/3-Jason-Gawke-Groot.png")
    },
    {
      title: "Route naar een inclusieve cultuur",
      location: "Zaal 6",
      leader: "Saniye Celik",
      text:
      "De Rijksoverheid heeft diversiteit en inclusie tot een van haar belangrijkste speerpunten benoemd voor de komende jaren. P&O’ers, beleidsadviseurs en leidinggevenden spelen een prominente rol bij het creëren van een werkomgeving waar iedereen zich gewaardeerd en thuis voelt. Dat doet er toe, want in een inclusieve cultuur zijn mensen productiever, creatiever en effectiever. In deze workshop neemt Saniye Çelik ons mee naar de essentie van diversiteit en inclusie en bespreekt ze de waarden die daaraan ten grondslag liggen. Waarom doen we aan diversiteit en hoe kun je een inclusieve cultuur bevorderen? Wat vraagt dat van ons in termen van skills en gedrag? Aan de hand van een unieke inclusiescan brengen we in kaart hoe inclusief we als individu zijn.",
      smallImage: require("../../assets/Workshops/Nieuwegein/4-Saniye-Celik-klein.jpg"),
      bigImage: require("../../assets/Workshops/Nieuwegein/4-Saniye-Celik-groot.jpg")
    },
    {
      title: "Dress how you want to be addressed!",
      location: "Zaal 7",
      leader: "Simone Kiers",
      text:
        "Welke eerste indruk maak jij? En komt die overeen met wat je wilt uitstralen? Twijfel je over welke kleuren, kleding en accessoires bij je passen? Ik help je je persoonlijke stijl te optimaliseren door middel van onder andere een kleur- en figuuranalyse. Verder benadruk ik het belang van een goede basisgarderobe en garderobeplanning. Je krijgt meer inzicht hoe je mooie en trendy combinaties kan maken, zodat je miskopen voorkomt en geld bespaart! Zo word jij de beste en mooiste versie van jezelf en ga je dit ook uitstralen! Dress for success!",
      smallImage: require("../../assets/Workshops/DenHaag/5-Simone-Kiers.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/5-Simone-Kiers-Groot.jpg")
    },
    {
      title: "FGR inzetten bij wendbaar organiseren",
      location: "Zaal 10",
      leader: "Regina Koning",
      text:
        "Een flexibel functiegebouw Rijk geeft ruimte aan mens en organisatie. Medewerkers en organisaties worden niet wendbaarder door dat van bovenaf op te leggen. Dat gebeurt alleen als iedereen de mogelijkheden ontdekt en daar ook voordeel in ontdekt en ervaart. Dat betekent soms een andere manier van samenwerken binnen de organisatie, waarbij medewerkers en managers samen invulling kunnen geven aan de ruimte die geboden wordt. Die ruimte kan door medewerker en management gebruikt worden om zich in te zetten op verschillende plekken, of door wisselende teams samen te stellen, afhankelijk van de vraag, interesse en het werkaanbod. Organisaties kunnen zo experimenteren, innoveren en nieuwe vaardigheden aanleren. Benieuwd hoe het FGR hierop in kan spelen en daarvoor door jou gebruikt kan worden? Geef je dan op voor de workshop! ",
      smallImage: require("../../assets/Workshops/DenHaag/6-ReginaKoning.png"),
      bigImage: require("../../assets/Workshops/DenHaag/6-ReginaKoning-Groot.png")
    },
    {
      title: "Adaptieve Krijgsmacht",
      location: "Zaal 12",
      leader: "Ernst Lobbezoo",
      text:
        "Defensie is na jarenlange bezuinigingen snel aan het versterken en innoveren. Dat is nodig omdat de veiligheid van Nederland –en de landen waar we worden ingezet- steeds vaker en gevarieerder onder druk staat. Defensie staat daarbij garant voor haar maatschappelijke opdracht. Zij kan en wil die rol niet alleen invullen, en kiest er strategisch voor om haar uitdagingen genetwerkt met civiele en militaire partners op te lossen. Dat heeft verregaande implicaties voor het HR-stelsel. Omdenken en kantalen van een ‘optimaal gesloten P-organisatie’ naar verregaande ‘genetwerkte samenwerking’ en de opbouw van een hoogwaardige flexibele workforce vraagt om leidershap en creativiteit. Werkgeverschap in een ecosysteem, waar loopt Defensie tegen aan? Kolonel Ernst Lobbezoo neemt ons mee op de door defensie ingeslagen reis naar de Adaptieve Krijgsmacht,  die de Nederlandse krijgsmacht wendbaarder en slagvaardiger gaat maken in een onvoorspelbare en onvoorstelbare veiligheidsomgeving en dat combineert met innovatiever en aantrekkelijker werkgeverschap.",
      smallImage: require("../../assets/Workshops/DenHaag/7-Ernst-Lobbezoo.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/7-Ernst-Lobbezoo-Groot.jpg")
    },
    {
      title: " Dilemmalogica: leg het probleem op tafel ",
      location: "Zaal 11",
      leader: "Guido Rijnja",
      text:
        "Waarom focussen we bij communicatie zoveel op opbrengsten en uitkomsten? Je krijgt veel meer steun bij contact over het probleem. Dilemmalogica’ staat voor eerste hulp bij ordening van ongemak. ‘Elk nadeel heb se voordeel’, noemde Johan Cruijif dat. Of anders om. Wie maar één kant belicht, laat een kans liggen op écht contact. Ervaringen met deze insteek bij diverse kabinetsthema’s maakt duidelijk wat kansen zijn van eerdere actieve openheid, en ook welke risico’s eraan verbonden zijn. Guido Rijnja van de Rijksvoorlichtingsdienst neemt ons mee in ervaringen en daagt uit tot toepassing op eigen casuïstiek. ",
      smallImage: require("../../assets/Workshops/DenHaag/8-Guido-Rijnja.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/8-Guido-Rijnja-Groot.jpg")
    },
    {
      title: "Ambitie als lifestyle",
      location: "Zaal 15",
      leader: "Lidewey van der Sluis",
      text:
        "Aan de hand van academische kennis en praktische inzichten zal op inspirerende en informatieve wijze worden besproken hoe medewerkers, teams en organisaties kunnen gaan bruisen van de energie. De perspectieven vanuit het individu en de organisatie wisselen elkaar af en lopen aan het eind in elkaar over. Deze sessie is een verdieping van de keynotesessie. ",
      smallImage: require("../../assets/Workshops/DenHaag/9-Lidewey.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/9-Lidewey-Groot.jpg")
    },
    {
      title: "What makes you tick?| Waarom doe ik wat ik doe?",
      location: "Zaal 16",
      leader: "Ellen Viergever & Henk Van der Steen ",
      text:
        "Waarom werk je voor de Rijksoverheid? Wat motiveert jou? Wat maakt het werken voor de publieke zaak zo bijzonder? Wat geeft jou energie op je werk? En hoe zit dat in deze tijden van grote veranderingen? Onze SG’s willen met elkaar werken aan de organisatie ontwikkeling bij het Rijk en zijn benieuwd naar antwoorden op deze vragen. Om vervolgens ook weer beter in staat te zijn om antwoorden te kunnen formuleren op de uitdagingen die ons als Rijksoverheid te wachten staan. Vanuit de kern dus, de bedoeling, de ‘purpose’ van ons werk. In deze workshop ga je op een bijzondere manier met collega’s in gesprek, hoor je inspirerende verhalen en ga je met nieuwe energie weer naar buiten! Deze workshop is onderdeel van een ontdekkingstocht naar de purpose van het Rijk die het komende jaar door veel verschillende plekken binnen de Rijksoverheid trekt ",
      smallImage: require("../../assets/Workshops/DenHaag/10-Ellen-Viergever.JPG"),
      bigImage: require("../../assets/Workshops/DenHaag/10-Ellen-Viergever-Groot.png")
    },
    {
      title: "Cultuur als ontbijt",
      location: "Zaal 17",
      leader: "Jan Peter Kuiper",
      text:
        "'Culture eats strategy for breakfast' zei Peter Drucker. Torben Rick maakte daar in 2014 'Organizational culture eats strategy for breakfast, lunch and dinner'. Maar wat is organisatiecultuur nu precies, wat kunnen we er mee en waarom is het zo belangrijk? In deze workshop maken we kennis met het begrip organisatiecultuur, we kijken naar het effect dat (cultuur) verschillen hebben op samenwerking en wat we daaruit voor ons zelf en ons P&O werk kunnen leren. De workshop is een combinatie van theorie en achtergronden, en groeps- en individuele oefeningen. De workshop wordt gegeven door drs Jan-Peter Kuiper. Jan-Peter is organisatie antropoloog en adviseur. Hij werkt bij het ministerie van Justitie en Veiligheid aan de dossiers ‘ongeschreven regels’, ‘samenwerken’ en ‘organisatie inrichting’. Daarnaast begeleidt hij als een van de oprichters van The Rebel Alliance cultuurveranderingstrajecten en reorganisaties bij onder meer overheden en onderwijs. ",
      smallImage: require("../../assets/Workshops/DenHaag/11-Jan-Peter.jpg"),
      bigImage: require("../../assets/Workshops/DenHaag/11-Jan-Peter-Groot.jpg")
    }
  ],
  programma: [
    {
      eventInfo: {
        time: "9:30",
        name: "Inloop + infomarkt",
        location: "Lobby",
        text: `We heten je van harte welkom op de P&O Dagen Rijk 2019. We nodigen je graag uit om een kijkje te nemen bij de verschillende stands. Ben je bijvoorbeeld op de hoogte van de verschillende opleidingen die de RAFEB aanbiedt? Of welke loopbaanstappen en leerlijnen er zijn voor de lage loonschalen?`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "10:15",
        name: "Start plenair programma",
        location: "Combinatiezaal 18-19",
        text: `De plenaire opening kent een druk bezet programma! De dagvoorzitter, Sicco Louw (Interim Directeur P&O en Directeur BZK flex) opent. De keynote spreekster, professor Lidewey van der Sluis aan Nyenrode Business Universiteit, zal daarna het woord nemen. Bekend om haar expertise en scherpe visie op leiderschap, trends op de arbeidsmarkt en ontwikkeling op de organisatie en talentmanagemt, neemt Lidewey je mee in de meest actuele themas rondom P&O en organisatieontwikkeling. Na de keynote zal Ellen Viergiever (DT lid Organisatie Ontwikkeling Rijk) het thema "Organisatie Ontwikkeling" bij het Rijk toelichten, gevolgd door een bankgesprek met verschillende sprekers over dit thema. Voel je vrij om vragen te stellen tijdens het bankgesprek!`,
        banner: require("../../assets/Program/Banner2.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "12:00",
        name: "Lunch + infomarkt",
        location: "Lobby",
        text: `Tijdens de lunch worden verschillende versnaperingen geserveerd. Je wordt aangemoedigd om met een broodje (en/of een kop koffie) in de hand een kijkje te nemen bij de verschillende stands. Ben je bijvoorbeeld bekend met de WRNA? Of wil je een leuke foto met collega's maken in de Fotobooth?`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "13:15",
        name: "Workshopronde 1",
        button: true
      }
    },
    {
      eventInfo: {
        time: "14:30",
        name: "Pauze",
        location: "Lobby",
        text:
          "De pauze is het moment om samen met je collega's te reflecteren op de belangrijkste inzichten uit de workshops. Vergeet ook niet feedback te geven in de app over de workshop die je hebt bijgewoond!",
        banner: require("../../assets/Program/Banner3.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "15:00",
        name: "Workshopronde 2",
        button: true
      }
    },
    {
      eventInfo: {
        time: "16:15",
        name: "Plenaire afsluiting ",
        location: "Combinatiezaal 18-19",
        text: `Zoals elk jaar kent de afsluiting van de P&O dagen Rijk een afsluiting met een knipoog. Na een korte samenvatting en reflectie van Sicco zal niemand anders Harry Glotzbach (onder andere finalist Leids Cabaret Festival en winnaar van het het Amsterdams Kleinkunst Festival Comedy Concours) de afsluiting verzorgen. Laat je verrassen door zijn bizar grappige kijk op de wereld om hem heen.`,
        banner: require("../../assets/Program/Banner2.png")
      },
      speakerInfo: {}
    },
    {
      eventInfo: {
        time: "16:45",
        name: "Netwerkborrel",
        location: "Lobby",
        text: `Sluit de dag af met een gezellig drankje en borrel hapje. We hopen dat je kan terugkijken op een geslaagde P&O dag Rijk. Vergeet niet de algehele evaluatie in te vullen en je ervaring met ons te delen.`,
        banner: require("../../assets/Program/Banner1.png")
      },
      speakerInfo: {
        // image: require("../../assets/Program/Speaker.png"),
        // speaker: "Geen spreker",
        // name: "komt nog",
        // text: "komt nog"
      }
    }
  ]
};

class CitySelector extends Component {
  render() {
    return (
      <React.Fragment>
        <EmptyHeader />

        <Subscribe to={[AppState]}>
          {appState => (
            <div>
              <NavLink
                to="/introduction"
                onClick={() =>
                  appState.setLocation(
                    "Den Haag",
                    DenHaag.workshops,
                    DenHaag.programma,
                    require("../../assets/Maps/DH.png")
                  )
                }
              >
                <div className="help">
                  <Button
                    color="orange"
                    className="buttonDH"
                    style={{
                      fontSize: "5vw",
                      backgroundColor: "#FFA304"
                    }}
                  >
                    Den Haag
                  </Button>
                </div>
              </NavLink>
              <div className="help">
                <NavLink
                  to="/introduction"
                  onClick={() =>
                    appState.setLocation(
                      "Nieuwegein",
                      Nieuwegein.workshops,
                      Nieuwegein.programma,
                      require("../../assets/Maps/NG.PNG")
                    )
                  }
                >
                  <Button
                    color="orange"
                    className="buttonNW"
                    style={{
                      fontSize: "5vw",
                      backgroundColor: "#FFA304"
                    }}
                  >
                    Nieuwegein
                  </Button>
                </NavLink>
              </div>
            </div>
          )}
        </Subscribe>
      </React.Fragment>
    );
  }
}
export default CitySelector;
