# INSTALLATION

1. Prerequisites
    - Trebuie instalat NodeJs (de descarcat de aici: [https://nodejs.org/en/download/](https://nodejs.org/en/download/) )
    - (folosit pt PDF2IMAGE) Trebuie instalat si GraphicsMagick ( de descarcat de aici: [ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.34-Q16-win64-dll.exe](ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/GraphicsMagick-1.3.34-Q16-win64-dll.exe) )
    - (folosit pt PDF2IMAGE) Trebuie instalat si Ghostscript ( [https://www.ghostscript.com/download/gsdnld.html](https://www.ghostscript.com/download/gsdnld.html) )
    - Trebuie pus in System Path folderul bin a aplicatiei Ghostscript (vezi cum se adauga in Path aici: [https://www.java.com/en/download/help/path.xml](https://www.java.com/en/download/help/path.xml) )
    - posibil dupa instalare sa fie necesar un restart
2. Se copiaza tot folderul in locatia dorita
3. in folderul aplicatiei se redenumeste fisierul **.env.example** in **.env**
4. se instaleaza aplicatia cu comanda

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
Spre exemplu daca se doreste schimbarea portului avem setarea **PORT**  
Exista o setare **PATH_RELATIVE** ce daca este **1** aplicatia cauta fisiere doar in interiorul directorului propriu
daca se pune pe **0** se poate cauta in path-uri absolute (de tip *C:/bla/bla* ). Pentru a fuctiona se pune si directorul path-ului absolut in **PATH_PARTITION** iar in
folderele tinta se pune toata calea *bla/bla*

# PDF-uri

Aplicatia cauta acum PDF-urile din folderul `docs`. Daca se doreste alta locatie trebuie modificate 2 setari in fisierul de configurare, vezi mai sus.
**ATENTIE** fisierele PDF trebuie sa aiba numele cu litere mari (mai putin extensia .pdf, sau poate si aia doar ca trebuie modificat in configurare setarea `EXT`)
