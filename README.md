# firstapp

Jak na razie podstawowe repo służące temu, aby każdy się trochę zapoznał z gitem, githubem, dockerem itd.

## Docker
### Instalacja
- MacOS: https://docs.docker.com/docker-for-mac/
- Linux: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Windows: https://docs.docker.com/docker-for-windows/install/

### Podstawowe używanie
Ogólnie warto korzystać z szybkiego helpa dostępnego w terminalu:
```
docker help
```
Oraz do uzyskiwania bardziej szczegółowego info na temat jakiegoś polecenia
```
docker run --help
```

## Uruchomienie aplikacji z repo
Zakładając, że już sklonowałeś repo na swoją maszynkę przy użyciu ```git clone``` i masz już zainstalowanego i działającego dockera (oraz docker-compose) wejdź do sklonowanego katalogu __firstapp__ i użyj polecenia
```
docker ps
```
Prawdopodbnie nie wypisał nic, ponieważ żaden kontener nie został jeszcze uruchomiony
```
docker-compose build
docker-compose up --no-start
docker ps
docker ps -a
```
Jak widać ```docker ps``` nadal nic nie wylistował ze względu na flagę __--no-start__ w poleceniu ```docker-compose up``` która spowodowała, że nie uruchomiliśmy żadnego kontenera. Jednak ```docker ps -a``` wylistował dwa utworzone przed chwilą kontenery: __firstapp__ i __mongo__.
```
docker-compose start
docker ps
```
Utworzone wcześniej kontenery zostały uruchomione. Teraz możesz odpalić przeglądarkę i wbić na adres __localhost__ aby cieszyć się _"Hello world"_ :)

Gdy już się nacieszysz i chcesz wyłączyć pracujące w tle kontenery z aplikacją użyj
```
docker-compose stop
```

Gdybyś wprowadził jakieś większe zmiany w aplikacji będziesz zmuszony przebudować ponownie kontenery. W tym celu zastopuj kontenery, przebuduj je i uruchom ponownie poleceniami
```
docker-compose stop
docker-compose up --no-start
docker-copmpose start
```