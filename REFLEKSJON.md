Jeg har jevnt og trutt gjennom hele skolegangen jobbet for å holde minnet litt ferskt når det kommer til TypeScript og sett litt på React og hva det var. Oppgaven har gjort at flere ting har løsnet litt i måten jeg tenker på. Og det har egentlig vært litt deilig og ryddig å sette opp en og en ting i hver sin fil.

Fremgangsmåte
Siden jeg har en litt tight timeplan så var jeg raskt på å kartlegge hva jeg egentlig trengte. Er ikke kjent med poker fra før og det er jo en del nye ting å sette seg inn i. Derfor fikk jeg også satt installert det jeg trengte med React Router og Zustand med en gang.

Jeg brukte GitHub Projects som et enkelt kaban-brett (Backlog / nå / ferdig ) og en DOD for hver oppgave. Å vimse frem og tilbake mellom oppgaver er min største fiende, så sørget for at jeg gjorde en og en ting i en logisk rekkefølge.

Underveis har jeg prøvd å være god på å bruke egne feature-branches for hvert steg med pull request inn til main. Korrigert meg selv litt underveis.

Designmessig har jeg hatt en tanke om hvordan det skulle bli, men det har blitt veldig nedprioritert over det å få satt opp logikken. Det er en enkel ui tilstand på kort som er markert for kasting, som jeg i ettertid (etter en del testin) innser at burde være omvendt. Man burde markere kortene som blir holdt. Jeg har bare ikke hatt tid til å prioritere og gå tilbake og endre.

Noen bevisste valg og avveininger underveis

- Card og CardBack er to separate komponenter. Tanken var at de kunne gjenbrukes uten unødvendig kompleksitet.
- Det er satt opp standard pokerrangering, ikke noe ekstra regler o.l. Tanken var at jeg heller kunne legge til mer og sette meg inn i andre regler om jeg hadde tid.
- Bruker engelsk i koden, for å følge vanlig konvensjon. Mens sidenavn, URLer og tekst spilleren ser er på norsk.
- CurrentBet har foreløpig en fast verdi på grunn av tidspresset.

Det har vært mye småfeil og testing underveis. Men strategien har vært å gjøre litt og litt og teste fortløpende hele tiden så jeg ikke skal trenge å gå for mye tilbake og justere. Så har det blitt lagt inn nye ting der det er relevant når jeg kommer til det punktet.

Med mer tid ville jeg prioritert å få opp et fullverdig innsatssystem og utbetalingen til spilleren sin lommebok. Så er det alt med design og responsivitet.
