import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import EmptyHeader from "../../components/HeaderEmpty";

import { Subscribe } from "unstated";
import AppState from "../../states/AppState";
import "./CitySelector.css";

const Nieuwegein = {
  // map: require("../../assets/Maps/DH.png"),
  workshops: [
    {
      title: "Extern inhuren, wat komt er allemaal bij kijken",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Dat kan de UBR Inhuurdesk je haarfijn uit de doeken doen.  Tijdelijk capaciteit, handjes of kennis inhuren, daar komt tegenwoordig nogal wat bij kijken. Naast de steeds veranderende wet- en regelgeving, raakt externe inhuur ook verschillende disciplines zoals HRM, management en inkoop. Voor de UBR Inhuurdesk is het inhuren van externen dagelijks kost. De UBR Inhuurdesk adviseert rijksorganisaties bij het werven en inhuren van externe medewerkers voor tijdelijke functies en opdrachten, biedt ondersteuning op maat en werft en huurt tijdelijke medewerkers in. Dus kan je wel wat hulp gebruiken bij het inhuren van externen, wil je meer weten over de mogelijkheden van externe inhuur of heb je andere vragen op dit gebied grijp dan je kans en kom naar deze workshop. ",
      round: 1
    },
    {
      title: "Van papier naar praktijk: inleiding in de gedragsverandering ",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "In ronkende (beleids)taal staat beschreven hoe we de toekomst voor ons zien. Een toekomst met duurzaam inzetbare medewerkers en inclusieve teams die optimaal presteren in een prettige werkomgeving. De praktijk is alleen een stuk rommeliger en niet zo heel makkelijk te veranderen. Want hoe doorbreek je de vaste gewoontes van medewerkers en leidinggevenden? Een toverstokje is er niet, maar met behulp van communicatie kun je het gedrag van mensen wel beïnvloeden. In deze workshop leer je hoe je dat gedrag in je organisatie kunt analyseren en de beste interventies kunt kiezen.",
      round: 1
    },
    {
      title: "Organisatie Ontwikkeling: De sleutelrol van medewerkers",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Organisatie ontwikkeling gaat per definitie over het functioneren van de organisatie in de toekomst, maar hoe medewerkers - in het hier en nu - hun werk invullen, is daarbij bepalend. In deze workshop maak je kennis met state of the art inzichten over hoe je als HR professionals medewerkers hierin kan activeren en hoe je rekening kan houden met hun individuele verschillen. ",
      round: 1
    },
    {
      title: "Route naar een inclusieve cultuur",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "De rijksoverheid heeft diversiteit en inclusie tot een van haar belangrijkste speerpunten benoemd voor de komende jaren. P&O’ers, beleidsadviseurs en leidinggevenden spelen een prominente rol bij het creëren van een werkomgeving waar iedereen zich gewaardeerd en thuis voelt. Dat doet er toe, want in een inclusieve cultuur zijn mensen productiever, creatiever en effectiever. In deze workshop delen Bouchra Talidi en Annick Smits waardevolle tips én minder succesvolle ervaringen over Diversiteit & Inclusie beleid binnen het ministerie. Loop weg met concrete ideeën over aan welke knop(pen) jij kunt gaan draaien binnen je werkomgeving. Bouchra Talidi (programma manager) en Annick Smits werken voor het programma Diversiteit & Inclusie binnen het ministerie van Sociale Zaken en Werkgelegenheid. ",
      round: 1
    },
    {
      title: "Dress how you want to be addressed!",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Welke eerste indruk maak jij? En komt die overeen met wat je wilt uitstralen? Twijfel je over welke kleuren, kleding en accessoires bij je passen? Ik help je je persoonlijke stijl te optimaliseren door middel van onder andere een kleur- en figuuranalyse. Verder benadruk ik het belang van een goede basisgarderobe en garderobeplanning. Je krijgt meer inzicht hoe je mooie en trendy combinaties kan maken, zodat je miskopen voorkomt en geld bespaart! Zo word jij de beste en mooiste versie van jezelf en ga je dit ook uitstralen! Dress for success!",
      round: 2
    },
    {
      title: "FGR inzetten bij wendbaar organiseren",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Een flexibel functiegebouw Rijk geeft ruimte aan mens en organisatie Medewerkers en organisaties worden niet wendbaarder door dat van bovenaf op te leggen. Dat gebeurt alleen als iedereen de mogelijkheden ontdekt en daar ook voordeel in ontdekt en ervaart. Dat betekent soms een andere manier van samenwerken binnen de organisatie, waarbij medewerkers en managers samen invulling kunnen geven aan de ruimte die geboden wordt. Die ruimte kan door medewerker en management gebruikt worden om zich in te zetten op verschillende plekken, of door wisselende teams samen te stellen, afhankelijk van de vraag, interesse en het werkaanbod. Organisaties kunnen zo experimenteren, innoveren en nieuwe vaardigheden aanleren. Benieuwd hoe het FGR hierop in kan spelen en daarvoor door jou gebruikt kan worden? Geef je dan op voor de workshop! ",
      round: 2
    },
    {
      title: "Adaptieve Krijgsmacht",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Defensie is na jarenlange bezuinigingen snel aan het versterken en innoveren. Dat is nodig omdat de veiligheid van Nederland –en de landen waar we worden ingezet- steeds vaker en gevarieerder onder druk staat. Defensie staat daarbij garant voor haar maatschappelijke opdracht. Zij kan en wil die rol niet alleen invullen, en kiest er strategisch voor om haar uitdagingen genetwerkt met civiele en militaire partners op te lossen. Dat heeft verregaande implicaties voor het HR-stelsel. Omdenken en kantalen van een ‘optimaal gesloten P-organisatie’ naar verregaande ‘genetwerkte samenwerking’ en de opbouw van een hoogwaardige flexibele workforce vraagt om leidershap en creativiteit. Werkgeverschap in een ecosysteem, waar loopt Defensie tegen aan? Kolonel Ernst Lobbezoo neemt ons mee op de door defensie ingeslagen reis naar de Adaptieve Krijgsmacht,  die de Nederlandse krijgsmacht wendbaarder en slagvaardiger gaat maken in een onvoorspelbare en onvoorstelbare veiligheidsomgeving en dat combineert met innovatiever en aantrekkelijker werkgeverschap.",
      round: 2
    }
  ],
  programma: [
    {
      eventInfo: {
        time: "10:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: "abdfsdfdsfsdfdsfsdf"
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Workshop Ronde 1",
        button: true
      }
    }
  ]
};

const DenHaag = {
  workshops: [
    {
      title: "Extern inhuren, wat komt er allemaal bij kijken",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Dat kan de UBR Inhuurdesk je haarfijn uit de doeken doen.  Tijdelijk capaciteit, handjes of kennis inhuren, daar komt tegenwoordig nogal wat bij kijken. Naast de steeds veranderende wet- en regelgeving, raakt externe inhuur ook verschillende disciplines zoals HRM, management en inkoop. Voor de UBR Inhuurdesk is het inhuren van externen dagelijks kost. De UBR Inhuurdesk adviseert rijksorganisaties bij het werven en inhuren van externe medewerkers voor tijdelijke functies en opdrachten, biedt ondersteuning op maat en werft en huurt tijdelijke medewerkers in. Dus kan je wel wat hulp gebruiken bij het inhuren van externen, wil je meer weten over de mogelijkheden van externe inhuur of heb je andere vragen op dit gebied grijp dan je kans en kom naar deze workshop. ",
      round: 1
    },
    {
      title: "Van papier naar praktijk: inleiding in de gedragsverandering ",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "In ronkende (beleids)taal staat beschreven hoe we de toekomst voor ons zien. Een toekomst met duurzaam inzetbare medewerkers en inclusieve teams die optimaal presteren in een prettige werkomgeving. De praktijk is alleen een stuk rommeliger en niet zo heel makkelijk te veranderen. Want hoe doorbreek je de vaste gewoontes van medewerkers en leidinggevenden? Een toverstokje is er niet, maar met behulp van communicatie kun je het gedrag van mensen wel beïnvloeden. In deze workshop leer je hoe je dat gedrag in je organisatie kunt analyseren en de beste interventies kunt kiezen.",
      round: 1
    },
    {
      title: "Organisatie Ontwikkeling: De sleutelrol van medewerkers",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Organisatie ontwikkeling gaat per definitie over het functioneren van de organisatie in de toekomst, maar hoe medewerkers - in het hier en nu - hun werk invullen, is daarbij bepalend. In deze workshop maak je kennis met state of the art inzichten over hoe je als HR professionals medewerkers hierin kan activeren en hoe je rekening kan houden met hun individuele verschillen. ",
      round: 1
    },
    {
      title: "Route naar een inclusieve cultuur",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "De rijksoverheid heeft diversiteit en inclusie tot een van haar belangrijkste speerpunten benoemd voor de komende jaren. P&O’ers, beleidsadviseurs en leidinggevenden spelen een prominente rol bij het creëren van een werkomgeving waar iedereen zich gewaardeerd en thuis voelt. Dat doet er toe, want in een inclusieve cultuur zijn mensen productiever, creatiever en effectiever. In deze workshop delen Bouchra Talidi en Annick Smits waardevolle tips én minder succesvolle ervaringen over Diversiteit & Inclusie beleid binnen het ministerie. Loop weg met concrete ideeën over aan welke knop(pen) jij kunt gaan draaien binnen je werkomgeving. Bouchra Talidi (programma manager) en Annick Smits werken voor het programma Diversiteit & Inclusie binnen het ministerie van Sociale Zaken en Werkgelegenheid. ",
      round: 1
    },
    {
      title: "Dress how you want to be addressed!",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Welke eerste indruk maak jij? En komt die overeen met wat je wilt uitstralen? Twijfel je over welke kleuren, kleding en accessoires bij je passen? Ik help je je persoonlijke stijl te optimaliseren door middel van onder andere een kleur- en figuuranalyse. Verder benadruk ik het belang van een goede basisgarderobe en garderobeplanning. Je krijgt meer inzicht hoe je mooie en trendy combinaties kan maken, zodat je miskopen voorkomt en geld bespaart! Zo word jij de beste en mooiste versie van jezelf en ga je dit ook uitstralen! Dress for success!",
      round: 2
    },
    {
      title: "FGR inzetten bij wendbaar organiseren",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Een flexibel functiegebouw Rijk geeft ruimte aan mens en organisatie Medewerkers en organisaties worden niet wendbaarder door dat van bovenaf op te leggen. Dat gebeurt alleen als iedereen de mogelijkheden ontdekt en daar ook voordeel in ontdekt en ervaart. Dat betekent soms een andere manier van samenwerken binnen de organisatie, waarbij medewerkers en managers samen invulling kunnen geven aan de ruimte die geboden wordt. Die ruimte kan door medewerker en management gebruikt worden om zich in te zetten op verschillende plekken, of door wisselende teams samen te stellen, afhankelijk van de vraag, interesse en het werkaanbod. Organisaties kunnen zo experimenteren, innoveren en nieuwe vaardigheden aanleren. Benieuwd hoe het FGR hierop in kan spelen en daarvoor door jou gebruikt kan worden? Geef je dan op voor de workshop! ",
      round: 2
    },
    {
      title: "Adaptieve Krijgsmacht",
      location: "Zaal X",
      leader: "komt nog",
      text:
        "Defensie is na jarenlange bezuinigingen snel aan het versterken en innoveren. Dat is nodig omdat de veiligheid van Nederland –en de landen waar we worden ingezet- steeds vaker en gevarieerder onder druk staat. Defensie staat daarbij garant voor haar maatschappelijke opdracht. Zij kan en wil die rol niet alleen invullen, en kiest er strategisch voor om haar uitdagingen genetwerkt met civiele en militaire partners op te lossen. Dat heeft verregaande implicaties voor het HR-stelsel. Omdenken en kantalen van een ‘optimaal gesloten P-organisatie’ naar verregaande ‘genetwerkte samenwerking’ en de opbouw van een hoogwaardige flexibele workforce vraagt om leidershap en creativiteit. Werkgeverschap in een ecosysteem, waar loopt Defensie tegen aan? Kolonel Ernst Lobbezoo neemt ons mee op de door defensie ingeslagen reis naar de Adaptieve Krijgsmacht,  die de Nederlandse krijgsmacht wendbaarder en slagvaardiger gaat maken in een onvoorspelbare en onvoorstelbare veiligheidsomgeving en dat combineert met innovatiever en aantrekkelijker werkgeverschap.",
      round: 2
    }
  ],
  programma: [
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst DH",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        name: "",
        text: ""
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: "abdfsdfdsfsdfdsfsdf"
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst DH",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: "",
        name: "",
        text: ""
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: "abdfsdfdsfsdfdsfsdf"
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst DH",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: "",
        name: "",
        text: ""
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: "abdfsdfdsfsdfdsfsdf"
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst DH",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }
    },
    {
      eventInfo: {
        time: "09:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      },
      speakerInfo: {
        image: "",
        name: "",
        text: ""
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Ontvangst",
        location: "Zaal X",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lacus et erat mattis, eget dapibus mauris convallis. Phasellus mollis tellus non nisl porttitor varius et et diam. Nulla in est nibh. Nunc ullamcorper ornare urna quis laoreet. Pellentesque non rhoncus quam, sed facilisis odio. Morbi nec turpis tincidunt, porttitor eros id, dictum augue. Aenean sit amet interdum eros, ut rhoncus purus. Curabitur at lorem id urna tristique mattis in quis ante. Ut fringilla aliquet libero et lobortis. Ut ornare libero in congue egestas. Vestibulum elementum egestas ex feugiat suscipit. Morbi sed nunc feugiat, molestie sem ut, consequat mauris. In ornare leo et libero tempus, in feugiat enim volutpat. Phasellus euismod, mauris condimentum pellentesque malesuada, quam est sagittis purus, ac laoreet leo sem non dolor. Quisque tortor orci, pretium quis lectus at, volutpat rutrum sem. Phasellus ultrices libero eget tellus ullamcorper, quis scelerisque lacus convallis.`
      },
      speakerInfo: {
        image: require("../../assets/Program/Speaker.png"),
        speaker: "Spreker : ",
        name: "komt nog",
        text: "abdfsdfdsfsdfdsfsdf"
      }
    },
    {
      eventInfo: {
        time: "10:00",
        name: "Workshop Ronde 1",
        button: true
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
