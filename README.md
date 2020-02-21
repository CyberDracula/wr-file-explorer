# INSTALLATION

1. Prerequisites
    - Trebuie instalat NodeJs (de descarcat de aici: https://nodejs.org/en/download/ )
    - (folosit pt PDF2IMAGE) Trebuie instalat si GraphicsMagick ( de descarcat de aici: [ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.34-Q16-win64-dll.exe](ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.34-Q16-win64-dll.exe) )
    - (folosit pt PDF2IMAGE) Trebuie instalat si Ghostscript ( https://www.ghostscript.com/download/gsdnld.html )
    - Trebuie pus in System Path folderul bin a aplicatiei Ghostscript (vezi cum se adauga in Path aici: https://www.java.com/en/download/help/path.xml )
    - posibil dupa instalare sa fie necesar un restart
2. Se copiaza tot folderul in ce locatie se doreste
3. se instaleaza aplicatia cu comanda

```console
npm install
```

# RUN
Aplicatia se ruleaza cu comanda:

```console
npm run start
```

# Accesare aplicatie

[http://<IP_MASINA>:3000](http://<IP_MASINA:3000)

# CONFIGURARI APLICATIE
Setarile se pot gasi in fisierul **.env**
Spre exemplu daca se doreste schimbarea portului avem setarea **PORT**. 

# PDF-uri 
Aplicatia cauta acum PDF-urile din folderul `docs`. Daca se doreste alta locatie trebuie modificate 2 setari in fisierul de configurare, vezi mai sus.
**ATENTIE** fisierele PDF trebuie sa aiba numele cu litere mari (mai putin extensia .pdf, sau poate si aia doar ca trebuie modificat in configurare setarea `EXT`)