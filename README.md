Bookmark – strona produktowa

Zadanie rekrutacyjne: responsywna strona produktowa odwzorowana na podstawie makiet (mobile 375 px, desktop 1440 px).

Demo: https://pawelpp7.github.io/Bookmark/

Technologie

HTML5, CSS3 (zmienne CSS, flexbox, media queries) i czysty JavaScript. Bez frameworków i bundlerów.

Zrealizowane funkcje
Responsywność – układ dopasowany do mobile i desktopu, bez przewijania w poziomie.
Niebieski kształt – zaokrąglone tło narysowane w CSS (.blue-shape).
Grafiki wektorowe – logo jako jeden symbol SVG; kolory (fill) zmieniane zmiennymi CSS, m.in. w stopce i w otwartym menu mobilnym.
Menu mobilne – hamburger zamieniający się w „X”, pełnoekranowy półprzezroczysty panel dark blue; zamykane linkiem, kliknięciem poza menu i klawiszem Esc.
Zakładki Features – przełączają obraz, tytuł i opis; mają role="tab" i aria-selected.
FAQ – rozwijane pytania (<details>) ze strzałką zmieniającą kolor po otwarciu.
Stany aktywne – hover i focus przycisków, linków, zakładek i pytań FAQ.
Newsletter – walidacja po stronie klienta: komunikat błędu dla pustego pola oraz dla adresu bez @ lub domeny.
Modal – otwiera się po najechaniu kursorem na górną część strony (tylko na urządzeniach z hoverem) oraz po 30 s; zawiera treść zakładki „Speedy Searching”.
Licznik „already joined” – spada z 35,000 do 0 w ciągu 20 sekund.
Uruchomienie lokalnie

Otwórz index.html w przeglądarce albo uruchom prosty serwer:

bash
python3 -m http.server 8000

i wejdź na http://localhost:8000.

Struktura
index.html   – struktura strony
style.css    – style i media queries (768 / 600 / 480 px)
script.js    – zakładki, menu mobilne, modal, licznik, walidacja formularza
images/      – grafiki i ikony z zadania
Uwagi
W sekcji FAQ trzy z czterech odpowiedzi są puste, ponieważ makiety nie pokazują, jaka treść powinna się w nich znaleźć. Treść widoczna w makiecie (drugie pytanie) została odwzorowana.
Link „PRICING” przewija do sekcji „Download the extension”, ponieważ makieta nie zawiera osobnej sekcji cennika.
Czcionka Rubik jest ładowana z Google Fonts.
